import { Button } from '@heroui/react';
import { DollarSign, HeartPulse, MapPin, Syringe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PetCard = ({pet}) => {
  const {_id,petName,imageUrl,species,vaccinationStatus,breed,age,gender,healthStatus,location,adoptionFee,description} = pet;

  return (
    <div key={_id} 
     className="overflow-hidden rounded-3xl bg-[#0B1120] border border-white/10 shadow-2xl group hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-64 overflow-hidden p-4">
        <Image
          src={imageUrl}
          alt={petName}
          fill
          unoptimized
          sizes="(max-w-sm) 100vw, 33vw"
          className="object-cover"
          priority
        />

        <div className="absolute top-4 left-1 md:left-4 z-10">
          <span className="bg-orange-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold backdrop-blur-md">
            🐾 {species}
          </span>
        </div>

        <div className="absolute top-4 right-1 z-10">
          <span className="bg-emerald-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold backdrop-blur-md">
            {vaccinationStatus}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        
        <div>
          <h3 className="text-3xl font-bold text-pink-500 capitalize">
            {petName}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {breed} • {age} years old • {gender}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <HeartPulse size={18} className="text-pink-400" />
            <span className="truncate">{healthStatus}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <Syringe size={18} className="text-cyan-400" />
            <span className="truncate">{vaccinationStatus}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <MapPin size={18} className="text-pink-400" />
            <span className="truncate">{location}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300 text-sm">
            <DollarSign size={18} className="text-green-400" />
            <span>
              {Number(adoptionFee) === 0
                ? "Free Adoption"
                : `$${adoptionFee} fee`}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-400 line-clamp-2 h-10">
          {description}
        </p>

        <div className="pt-4 border-t  flex gap-3">
          <Link href={`/pets/${_id}`}>
            <Button
              variant="bordered"
              className="flex-1 rounded-xl border-white/10 text-white hover:bg-white/10 text-sm h-10"
            >
              View Details
            </Button> 
          </Link>
            <Link href='/adoption'>
              <Button className="flex-1 rounded-xl  text-white font-semibold text-sm h-10">
                Adopt Now
              </Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

