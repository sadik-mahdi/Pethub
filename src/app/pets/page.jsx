import PetCard from "@/components/PetCard";
import Link from "next/link";

const AllPetsPage = async ({ searchParams }) => {
  const { search = "", species = "" } = await searchParams;

  const queryParams = new URLSearchParams();

  if (search) queryParams.append("search", search);
  if (species) queryParams.append("species", species);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pet?${queryParams.toString()}`,
    {
      cache: "no-store",
    },
  );

  const pets = await res.json();

  return (
    <div className="container mx-auto max-w-7xl p-6">
      <h1 className="text-4xl font-bold mb-6">All Pets</h1>
      <form method="GET" className="space-y-5 mb-10">
        <div className="flex gap-3">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search pets by name..."
            className="border p-3 rounded w-full text-black"
          />

          <button type="submit" className="bg-cyan-500 text-white px-5 rounded">
            Search
          </button>
        </div>

        {/* 🐾 FILTER BUTTONS */}
        <div className="flex gap-3 flex-wrap">
          {["Dog", "Cat", "Bird", "Others"].map((sp) => (
            <a
              key={sp}
              href={`?species=${sp}${search ? `&search=${search}` : ""}`}
              className={`px-4 py-2 border rounded transition ${
                species === sp ? "bg-black text-white" : "hover:bg-gray-100"
              }`}
            >
              {sp}
            </a>
          ))}

          {/* RESET */}
          <Link
            href="/pets"
            className="px-4 py-2 border rounded bg-red-500 text-white"
          >
            Reset
          </Link>
        </div>
      </form>

      {/* 🐶 PET GRID */}
      <div className="grid grid-cols-3 gap-4">
        {pets.length > 0 ? (
          pets.map((pet) => <PetCard key={pet._id} pet={pet} />)
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No pets found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default AllPetsPage;
