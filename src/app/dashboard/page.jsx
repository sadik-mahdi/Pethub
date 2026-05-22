import { ListBox, ListBoxItem } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { MdDashboard, MdFormatListBulleted, MdPets } from 'react-icons/md';

const DashBoardPage = () => {
  return (
    <div>
      <div className="w-64 h-screen bg-[#0F172A] text-white p-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 py-4 mb-6">
        <span className="font-bold text-xl tracking-tight text-white">PetNest</span>
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
          Menu
        </p>
        
        <ListBox 
          aria-label="User Navigation Menu"
          variant="flat"
          className="p-0 gap-1"
          itemClasses={{
            base: "px-3 py-3 rounded-xl data-[hover=true]:bg-slate-800 text-slate-300 data-[hover=true]:text-white transition-all",
            title: "font-semibold text-sm"
          }}
        >
          <ListBoxItem 
            key="my-requests" 
            as={Link}                
            href="/dashboard/my-requests"
            startContent={<MdDashboard size={20} />}
            className="text-white data-[hover=true]:bg-rose-600 data-[hover=true]:text-white"
          >
            My Requests
          </ListBoxItem>
          
          <ListBoxItem key="add-pet" startContent={<MdPets size={20} />}
          className="text-white data-[hover=true]:bg-rose-600 data-[hover=true]:text-white">
            Add Pet
          </ListBoxItem>
          
          <ListBoxItem 
            key="my-listings" 
            startContent={<MdFormatListBulleted size={20} />}
            className=" text-white data-[hover=true]:bg-rose-600 data-[hover=true]:text-white"
          >
            My Listings
          </ListBoxItem>
        </ListBox>
      </div>
    </div>

    </div>
  );
};

export default DashBoardPage;