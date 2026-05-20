import Link from "next/link";
import React from "react";
import { Button } from "@heroui/react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h1 className="text-2xl font-extrabold mb-3">
            <span className="text-slate-900">Pet</span>
            <span className="text-orange-500">Hub</span>
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed">
            PetHub is a trusted platform to find, adopt, and manage pets easily.
            We connect loving homes with pets in need.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            Contact Information
          </h2>

          <p className="text-gray-600 text-sm">
            📍 Dhaka, Bangladesh
          </p>
          <p className="text-gray-600 text-sm mt-1">
            📞 +8801885467838
          </p>
          <p className="text-gray-600 text-sm mt-1">
            ✉️ sadikmahadi06@gmail.com
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-3">
            Follow Us
          </h2>

          <div className="flex gap-3 flex-wrap">
            <Link href="#" className="text-gray-600 hover:text-orange-500">
              Facebook
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-500">
              Instagram
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-500">
              Twitter
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-500">
              LinkedIn
            </Link>
          </div>

          <div className="mt-4">
            <Button className="bg-orange-500 text-white font-semibold px-5">
              Become a Member
            </Button>
          </div>
        </div>

      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-orange-500 font-semibold">PetHub</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;