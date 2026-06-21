import { Calendar, Dna, DollarSign, HeartPulse, MapPin, PawPrint, ShieldCheck, User2 } from "lucide-react";
import Image from "next/image";
import PetRequestForm from "@/components/PetRequestForm";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

const res = await fetch(`http://localhost:5000/pet/${id}`, {
    // cache: "no-store",
    next: { revalidate: 0 },
    headers : {
      authorization : "logged in"
    }
  }
);
  const pet = await res.json();

  if (!pet || Object.keys(pet).length === 0) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-red-400">Pet Profile Not Found</h2>
        <p className="text-slate-400 text-sm">
          The server could not find any records matching ID: <span className="font-mono text-white bg-slate-800 px-2 py-1 rounded">{id}</span>
        </p>
      </div>
    );
  }

 const {
    petName,
    imageUrl,
    species,
    vaccinationStatus,
    breed,
    age,
    gender,
    healthStatus,
    location,
    adoptionFee,
    description
  } = pet;

//   if (!pet) {
//   return (
//     <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center gap-4">
//       <h2 className="text-2xl font-bold text-slate-300">Pet Profile Not Found</h2>
//       <p className="text-slate-500 text-sm">The ID requested does not match any entry in our system.</p>
//     </div>
//   );
// }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      
        <div className="lg:col-span-2 space-y-8">
          <div className="relative h-100 w-full overflow-hidden rounded-3xl bg-slate-800">
            <Image 
              src={imageUrl || "/assets/placeholder.png"} 
              alt={petName} 
              fill
              unoptimized
              priority
              className="object-cover"
            />
            <span className="absolute top-4 right-4 bg-[#10B981] text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-sm">
              Available
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-5xl font-black tracking-tight capitalize">{petName}</h1>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-500/10 border border-pink-500/20 text-[#E06B8B] text-xs font-bold px-3 py-1 rounded-full capitalize">
                  {species}
                </span>
                <span className="bg-[#1E2538] text-slate-300 text-xs font-medium px-3 py-1 rounded-full capitalize">
                  {breed}
                </span>
                <span className="bg-[#1E2538] text-slate-300 text-xs font-medium px-3 py-1 rounded-full capitalize">
                  {gender}
                </span>
              </div>
            </div>

            <div className="sm:text-right bg-[#1E2538]/40 border border-white/5 p-4 rounded-2xl min-w-35">
              <p className="text-slate-400 text-xs font-medium">Adoption Fee</p>
              <h3 className="text-3xl font-black text-[#E06B8B] mt-1">
                {Number(adoptionFee) === 0 ? "Free" : `$${adoptionFee}`}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-pink-400">
                <PawPrint size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Species</p>
                <p className="text-base font-semibold text-slate-100 capitalize">{species}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-cyan-400">
                <Dna size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Breed</p>
                <p className="text-base font-semibold text-slate-100 capitalize">{breed}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-pink-400">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Age</p>
                <p className="text-base font-semibold text-slate-100">{age} years</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-cyan-400">
                <User2 size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Gender</p>
                <p className="text-base font-semibold text-slate-100 capitalize">{gender}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-pink-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Location</p>
                <p className="text-base font-semibold text-slate-100">{location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-green-400">
                <DollarSign size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Adoption Fee</p>
                <p className="text-base font-semibold text-slate-100">
                  {Number(adoptionFee) === 0 ? "Free Adoption" : `$${adoptionFee}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-pink-400">
                <HeartPulse size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Health Status</p>
                <p className="text-base font-semibold text-slate-100 capitalize">{healthStatus || "Healthy"}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E2538] border border-white/5">
              <div className="p-3 rounded-xl bg-slate-800 text-cyan-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Vaccinated</p>
                <p className="text-base font-semibold text-slate-100 capitalize">{vaccinationStatus}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="text-2xl font-bold text-slate-100">About {petName}</h2>
            <p className="text-slate-400 text-base leading-relaxed font-medium">
              {description || "No specific detailed description bio recorded for this pet profile entry yet."}
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="sticky top-6 p-6 rounded-3xl bg-[#151C2C] border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold mb-2">Request to Adopt {petName}</h3>
            <p className="text-slate-400 text-xs mb-4">Fill out this form and the owner will review your request.</p>
            
            <div className="text-slate-500 text-center border border-dashed border-white/10 rounded-2xl">
              <PetRequestForm pet={pet}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PetDetailsPage;