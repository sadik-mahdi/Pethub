import PetCard from "@/components/PetCard";
import Link from "next/link";

const AllPetsPage = async ({ searchParams }) => {
  const { search = "", species = "" } = await searchParams;

  const queryParams = new URLSearchParams();

  if (search) queryParams.append("search", search);
  if (species) queryParams.append("species", species);

  const res = await fetch(
    `http://localhost:5000/pet?${queryParams.toString()}`,
    {
      cache: "no-store",
    },
  );

  const pets = await res.json();

  return (
    <div className="container mx-auto max-w-7xl p-6">
      {/* 🏷️ TITLE */}
      <h1 className="text-4xl font-bold mb-6">All Pets</h1>

      {/* 🔍 SEARCH + FILTER UI */}
      <form method="GET" className="space-y-5 mb-10">
        {/* SEARCH BOX */}
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
