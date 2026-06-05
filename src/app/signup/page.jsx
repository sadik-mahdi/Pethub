'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {

  const onSubmit = async(e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    
    const {data , error} = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      image:user.image,
      password:user.password
    });
    
    if(data){
      redirect('/');
    }
    if(error){
      alert('error');
    }
  };

  const handleGoogleSignIn = async() => {
      await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto border border-orange-600 p-10 rounded-2xl bg-orange-500 flex flex-col items-center justify-center shadow-xl relative z-10">
        <div className="text-3xl font-black text-center mb-10 text-white tracking-tight">
          Create Account
        </div>
        <Card className="p-6 bg-white/90 backdrop-blur-md rounded-2xl">
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            
            <TextField
              isRequired
              type="text"
              name="name"
            >
              <Label className="text-[#0F172A] font-bold text-sm">Name</Label>
              <Input 
                placeholder="Enter Your name"
                className="bg-white text-black rounded-xl"
              />
              <FieldError className="text-red-800 font-medium text-xs mt-0.5" />
            </TextField>

            <TextField
              isRequired
              type="email"
              name="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-[#0F172A] font-bold text-sm">Email</Label>
              <Input 
                placeholder="john@example.com"
                className="bg-white text-black rounded-xl"
              />
              <FieldError className="text-red-800 font-medium text-xs mt-0.5" />
            </TextField>
            
            <TextField
              type="url"
              name="image"
            >
              <Label className="text-[#0F172A] font-bold text-sm">Image Url</Label>
              <Input 
                placeholder="Image URL"
                className="bg-white text-black rounded-xl"
              />
              <FieldError className="text-red-800 font-medium text-xs mt-0.5" />
            </TextField>

            <TextField
              isRequired
              minLength={6}
              type="password"
              name="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                return null;
              }}
            >
              <Label className="text-[#0F172A] font-bold text-sm">Password</Label>
              <Input
                placeholder="Enter your password"
                className="bg-white text-black rounded-xl"
              />
              <Description className="text-slate-500 text-[11px] mt-0.5">
                Must be at least 6 characters with 1 uppercase letter and 1 lowercase letter
              </Description>
              <FieldError className="text-red-800 font-medium text-xs mt-0.5" />
            </TextField>

            <p className="text-sm text-[#0F172A] font-medium mt-1">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange-600 font-bold hover:underline decoration-orange-600 decoration-2"
              >
                Log in here
              </Link>
            </p>

            <div className="flex gap-2 mt-2 w-full">
              <Button
                type="submit"
                className="bg-[#0F172A] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#1E293B] transition shadow-md flex-1"
              >
                <Check size={18} />
                Create Account
              </Button>
            </div>

            <div className="flex items-center my-2 w-full">
              <div className="flex-1 border-t border-slate-300"></div>
              <span className="px-3 text-xs font-bold uppercase text-slate-500 tracking-wider">OR</span>
              <div className="flex-1 border-t border-slate-300"></div>
            </div>

            <Button 
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-slate-700 font-bold border border-slate-300 px-6 py-2 rounded-xl hover:bg-slate-50 transition shadow-sm flex items-center justify-center gap-3"
            >
              <FcGoogle />Sign Up with Google
            </Button>

            <p className="text-sm text-[#0F172A] font-medium mt-1 text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange-600 font-bold hover:underline decoration-orange-600 decoration-2"
              >
                Log in here
              </Link>
            </p>

          </Form>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;