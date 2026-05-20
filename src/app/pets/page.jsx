import PetCard from '@/components/PetCard';
import React from 'react';

const allPetsPage = async() => {
  const res = await fetch(`http://localhost:5000/pet`)
    const pets = await res.json();

  return (
    <div>
      <div>
        <div className="m-10"><h2 className="font-bold text-4xl">All pets</h2></div>

        <div className="grid grid-cols-3 gap-4 container mx-auto">
          {
            pets.map(pet=> <PetCard key={pet._id} pet={pet}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default allPetsPage;