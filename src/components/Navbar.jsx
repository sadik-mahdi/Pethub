'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

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
          <Link 
            href="/dashboard/add-pet" 
            className="text-sm font-semibold hover:text-orange-500 transition-colors"
          >
            Add Pet
          </Link>
        </ul>

        {user ? (
  <div className="flex items-center gap-4 list-none">
    <Dropdown>
      <Dropdown.Trigger>
        <div 
          role="button" 
          tabIndex={0}
          aria-label="User Profile Menu"
          className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer bg-transparent border-0 p-0 focus:outline-none select-none"
        >
          <Avatar className="w-10 h-10 border bg-slate-100 shrink-0">
            <Avatar.Image referrerPolicy="no-referrer" src={user?.image} />
            <Avatar.Fallback className="text-slate-700 font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </Avatar.Fallback>
          </Avatar>

          <div className="w-10 h-10 rounded-full border border-orange-600 bg-orange-500 text-white font-black flex items-center justify-center shadow-sm shrink-0">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          
          <IoIosArrowDropdown className="text-slate-600 w-5 h-5 transition-transform" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Popover>
        <Dropdown.Menu className="bg-orange-500 text-white"
          onAction={(key) => {
            if (key === "logout") {
              handleSignOut();
            } else {
              console.log(`Selected action: ${key}`);
            }
          }}
        >
          <Dropdown.Item id="new-file" textValue="New file">
            <Label className="text-white">{user.name} {user.email}</Label>
          </Dropdown.Item>
          
          <Dropdown.Item id="dashboard" textValue="Dashboard" 
            as={Link}
              href="/dashboard">
            <Label>Dashboard</Label>
          </Dropdown.Item>

          <Dropdown.Item id="logout" textValue="Delete file" variant="danger">
            <Label className="text-red-600 font-semibold">Logout</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>

  </div>
          ): (
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