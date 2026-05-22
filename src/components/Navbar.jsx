'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log("Navbar session user status:", user);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/"; 
        }
      }
    });
  };

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <h1 className="text-2xl font-extrabold">
            <span className="text-slate-900">Pet</span>
            <span className="text-orange-500">Hub</span>
          </h1>
        </Link>

        <ul className="flex items-center gap-10 font-semibold text-gray-700">
          <li>
            <Link href="/" className="hover:text-orange-500 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pets" className="hover:text-orange-500 transition duration-200">
              All Pets
            </Link>
          </li>
          <li>
            <Link href="/my-requests" className="hover:text-orange-500 transition duration-200">
              My Requests
            </Link>
          </li>
          <li>
            <Link href="/add-pet" className="hover:text-orange-500 transition duration-200">
              Add Pet
            </Link>
          </li>
        </ul>

        {user ? (
          <div className="flex items-center gap-4 list-none">
            <Avatar className="w-10 h-10 border text-slate-700 font-bold bg-slate-100">
              <Avatar.Image referrerPolicy="no-referrer" src={user?.image || undefined} />
              <Avatar.Fallback>
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </Avatar.Fallback>
            </Avatar>
            <Button 
              color="danger" 
              className="font-semibold px-4"
              onPress={handleSignOut}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href='/signup'>
              <Button className="bg-orange-500 text-white font-semibold px-6 rounded-xl">
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-orange-500 text-white font-semibold px-6 rounded-xl">
                Log In
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;