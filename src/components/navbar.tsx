"use client";
import Link from "next/link";

import { useState } from "react";

//import { Search, ChevronDown } from "lucide-react"; //for mobile icon
import { Button } from "./ui/button";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur-sm border-b border-zinc-800 text-white">
      {/* Large box */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/*Logo*/}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#fe6036] to red-600 flex items-center justify-center">
              <span>AI</span>
            </div>
            <span className="text-xl font-bold tracking-wider">
              SIGNALSTACK
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-white">
            <Link
              href="/impact"
              className="hover:text-[#fe6036] transition-colors"
            >
              Why AI
            </Link>
            <Link
              href="#Services"
              className="flex items-center gap-1 hover:text-[#fe6036] transition-colors"
            >
              Services
            </Link>
            <Link
              href="#Company"
              className="flex items-center gap-1 hover:text-[#fe6036] transition-colors"
            >
              Company
            </Link>
            <Link
              href="#Pricing"
              className="flex items-center gap-1 hover:text-[#fe6036] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#Roadmap"
              className="flex items-center gap-1 hover:text-[#fe6036] transition-colors"
            >
              Roadmap
            </Link>
          </nav>

          {/* Actions */}

          {/* <div className="hidden md:flex items-center space-x-4">
            <Link href="" className="bg-[#4a4a4a] border-2 border-white">
              Have a Question
            </Link>
            <Link href="" className="bg-[#fe6036] border-2 border-[#fe6036]">
              Schedule a Demo
            </Link>
          </div> */}
          {/*Custom button usage*/}
          <div className="flex items-center gap-4">
            <Button className="bg-zinc-700 hover:bg-zinc-600 text-white">
              Schedule Demo
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
