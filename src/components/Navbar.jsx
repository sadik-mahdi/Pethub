import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <h1 className="text-2xl font-extrabold">
            <span className="text-slate-900">Pet</span>
            <span className="text-orange-500">Hub</span>
          </h1>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-10 font-semibold text-gray-700">

          <li>
            <Link
              href="/"
              className="hover:text-orange-500 transition duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/pets"
              className="hover:text-orange-500 transition duration-200"
            >
              All Pets
            </Link>
          </li>

          <li>
            <Link
              href="/my-requests"
              className="hover:text-orange-500 transition duration-200"
            >
              My Requests
            </Link>
          </li>

          <li>
            <Link
              href="/add-pet"
              className="hover:text-orange-500 transition duration-200"
            >
              Add Pet
            </Link>
          </li>

        </ul>

       {/* {user? ( 
        <> */}
          <Link href="signup">
            <Button className="bg-orange-500 text-white font-semibold px-6">
              Sign Up
            </Button>
          </Link>
        {/* </>)
        :
        (
        <>
          <Dropdown>
            <Button aria-label="Menu" variant="secondary">
              Actions
            </Button>
            <Dropdown.Popover>
              <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                <Dropdown.Item id="new-file" textValue="New file">
                  <Label>New file</Label>
                </Dropdown.Item>
                <Dropdown.Item id="copy-link" textValue="Copy link">
                  <Label>Copy link</Label>
                </Dropdown.Item>
                <Dropdown.Item id="edit-file" textValue="Edit file">
                  <Label>Edit file</Label>
                </Dropdown.Item>
                <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
                  <Label>Delete file</Label>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </>)} */}

      </div>
    </nav>
  );
};

export default Navbar;