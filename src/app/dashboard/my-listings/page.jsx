import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Edit3, Users, Trash2 } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const MyListingsPage = async () => {
  const res = await fetch(`http://localhost:5000/pet`, { cache: "no-store" });
  const listings = await res.json();

  const totalListings = listings?.length || 0;
  const availableCount =
    listings?.filter((pet) => pet.adoptionFee !== "Adopted").length || 0;
  const adoptedCount = totalListings - availableCount;

  return (
    <div className="min-h-screen text-slate-100 space-y-8 max-w-6xl mx-auto px-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs bg-red-500/10 text-red-400 px-2.5 py-1 rounded-full border border-red-500/20 font-semibold mb-2 inline-block">
            🐾 My Dashboard
          </span>
          <h1 className="text-4xl font-black tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-cyan-400">
              Listings
            </span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage your pet listings and adoption requests.
          </p>
        </div>

        <Link
          href="/dashboard/add-pet"
          className="bg-linear-to-r from-pink-500 to-blue-500 hover:opacity-90 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-1.5"
        >
          <span>+</span> Add New Pet
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="text-center bg-[#151C2C] border border-white/5 py-6 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-black text-pink-500">{totalListings}</h2>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
            Total Listings
          </p>
        </div>
        <div className="text-center bg-[#151C2C] border border-white/5 py-6 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-black text-green-400">
            {availableCount}
          </h2>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
            Available
          </p>
        </div>
        <div className="text-center bg-[#151C2C] border border-white/5 py-6 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-black text-cyan-400">{adoptedCount}</h2>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
            Adopted
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {listings?.map((listing) => (
          <div
            key={listing._id}
            className="bg-[#151C2C] border border-white/5 rounded-3xl overflow-hidden shadow-xl flex flex-col group hover:border-white/10 transition-all duration-300"
          >
            <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
              <Image
                src={listing.imageUrl || "/assets/placeholder.png"}
                alt={listing.petName}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-3 right-3 bg-green-500/20 backdrop-blur-md text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-500/30">
                Available
              </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold tracking-tight capitalize text-white">
                    {listing.petName}
                  </h3>
                  <p className="text-slate-400 text-xs font-medium mt-0.5 capitalize">
                    {listing.species} • {listing.breed || "Mixed"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-rose-400 font-extrabold text-base">
                    {Number(listing.adoptionFee) === 0
                      ? "Free"
                      : `$${listing.adoptionFee}`}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                    0 requests
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link href={`/pets/${listing._id}`} className="block">
                  <Button
                    variant="bordered"
                    size="sm"
                    className="w-full border-white/10 text-slate-300 text-xs font-semibold rounded-xl hover:bg-white/5 flex items-center justify-center gap-1.5"
                  >
                    <Eye size={14} /> View
                  </Button>
                </Link>

                <Link
                  href={`/dashboard/edit-pet/${listing._id}`}
                  className="block"
                >
                  <Button
                    variant="bordered"
                    size="sm"
                    className="w-full border-white/10 text-slate-300 text-xs font-semibold rounded-xl hover:bg-white/5 flex items-center justify-center gap-1.5"
                  >
                    <Edit3 size={14} /> Edit
                  </Button>
                </Link>

                <Modal>
                  <Button
                    variant="bordered"
                    size="sm"
                    className="border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold rounded-xl hover:bg-blue-500/10 flex items-center justify-center gap-1.5"
                  >
                    <Users size={14} />
                    Requests
                  </Button>

                  <Modal.Backdrop>
                    <Modal.Container>
                      <Modal.Dialog className="sm:max-w-90">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                          <Modal.Heading className='flex items-center gap-3'><BsPeopleFill />Adoption Requests for pet
                          </Modal.Heading>
                          <Modal.Icon className="bg-default text-foreground mx-auto">
                            <FaRegHeart  className="size-5" />
                          </Modal.Icon>
                        </Modal.Header>

                        <Modal.Body>
                          <p>No request Yet</p>
                        </Modal.Body>

                        <Modal.Footer>
                          <Button className="w-full" slot="close">
                            Continue
                          </Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>

                <Button
                  variant="bordered"
                  size="sm"
                  className="border-red-500/20 bg-red-500/5 text-red-400 text-xs font-semibold rounded-xl hover:bg-red-500/10 flex items-center justify-center gap-1.5"
                >
                  <Trash2 size={14} /> Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalListings === 0 && (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-[#151C2C]/30">
          <p className="text-slate-400 text-sm font-medium">
            No pets listed yet under this account profile.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyListingsPage;
