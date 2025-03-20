"use client";
// src/components/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center px-4 py-4">
      <div className="max-w-6xl w-full bg-white text-black rounded-xl overflow-hidden shadow-md">
        {/* Main navigation */}
        <div className="flex justify-between items-center px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <div className="w-12 h-12 relative">
                {/* Replace with your actual logo */}
                <div className="absolute inset-0 bg-black mask-triangle"></div>
              </div>
            </div>
            <span className="text-2xl font-bold">Lighthouse</span>
            <span className="text-sm ml-1">Credit Union</span>
          </Link>
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center">
                Checking & Savings
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center">
                Credit Cards
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center">
                Loans
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center">
                Financial Planning
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center">
                Business
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Log In
            </Button>
            <Button
              className={cn("bg-purple-500 hover:bg-purple-600 text-white")}
            >
              Open an Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
