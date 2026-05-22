"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Check } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

const LogInPage = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log({ data, error });

    if (data) {
      router.push("/");
    }

    if (error) {
      alert("Error");
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto border border-orange-600 p-10 rounded-2xl bg-orange-500 flex flex-col items-center justify-center shadow-xl relative z-10">
        <div className="text-3xl font-black text-center mb-10 text-white tracking-tight">
          Log In
        </div>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-[#0F172A] font-bold text-sm">Email</Label>
            <Input name="email"
              placeholder="john@example.com"
              className="bg-white text-black rounded-xl"
            />
            <FieldError className="text-red-800 font-medium text-xs mt-0.5" />
          </TextField>

          <TextField
            isRequired
            type="password"
            value={password}
            onValueChange={setPassword}
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
              name="password"
              placeholder="Enter your password"
              className="bg-white text-black rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Description className="text-orange-100 text-[11px] mt-0.5">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-red-800 font-medium text-xs mt-0.5" />
          </TextField>

          <p className="text-sm text-[#0F172A] font-medium mt-1">
            Dont have an account?{" "}
            <Link
              href="/signup"
              className="text-white font-bold hover:underline decoration-white decoration-2"
            >
              Register here
            </Link>
          </p>

          <div className="flex gap-2 mt-2 w-full">
            <Button
              type="submit"
              className="bg-[#0F172A] text-white font-bold px-6 py-2 rounded-xl hover:bg-[#1E293B] transition shadow-md flex-1"
            >
              <Check size={18} />
              Log In
            </Button>
            <Button
              type="reset"
              variant="secondary"
              className="bg-[#E2E8F0]/20 text-[#0F172A] font-bold border border-[#0F172A]/10 px-6 py-2 rounded-xl hover:bg-white/20 transition"
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LogInPage;
