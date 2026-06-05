'use client'

import { ListBox, ListBoxItem } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { MdDashboard, MdFormatListBulleted, MdPets } from 'react-icons/md';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row min-h-screen bg-gray-900">
      <aside className="md:w-1/4 w-1/5 min-w-60 bg-orange-500 text-white flex flex-col p-4 shadow-xl">
        <p className="text-xs font-bold mt-6 text-orange-100 uppercase tracking-wider px-3 mb-4">
          Dashboard Menu
        </p>
        
        <ListBox 
          aria-label="User Navigation Menu"
          variant="flat"
          className="p-0 gap-1"
          itemClasses={{
            base: "px-3 py-3 rounded-xl transition-all text-white hover:text-blue",
            title: "font-semibold text-sm"
          }}
        >
          <ListBoxItem 
            key="my-requests" 
            as={Link}                
            href="/dashboard/my-requests"
            startContent={<MdDashboard size={20} />}
          >
            My Requests
          </ListBoxItem>
          
          <ListBoxItem 
            key="add-pet" 
            as={Link}                
            href="/dashboard/add-pet"
            startContent={<MdPets size={20} />}
          >
            Add Pet
          </ListBoxItem>
          
          <ListBoxItem 
            key="my-listings" 
            as={Link}                
            href="/dashboard/my-listings"
            startContent={<MdFormatListBulleted size={20} />}
          >
            My Listings
          </ListBoxItem>
        </ListBox>
      </aside>

      <main className="flex-1 p-8 text-white overflow-y-auto">
        {children}
      </main>

    </div>
  );
}