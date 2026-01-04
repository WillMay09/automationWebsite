"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-app-dark border-b border-dark text-primary-dark">
      {/* Large box */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/*Logo*/}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-accent-strong rounded-lg flex items-center justify-center">
              <span className="font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold tracking-wider text-primary-dark">
              SIGNALSTACK
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-primary-dark">
            <Link
              href="/impact"
              className="hover-text-accent transition-colors"
            >
              Why AI
            </Link>
            <Link
              href="/#services"
              className="flex items-center gap-1 hover-text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="#Company"
              className="flex items-center gap-1 hover-text-accent transition-colors"
            >
              Company
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-1 hover-text-accent transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#roadmap"
              className="flex items-center gap-1 hover-text-accent transition-colors"
            >
              Roadmap
            </Link>
          </nav>

          {/*Custom button usage*/}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-lg bg-card-dark border border-dark text-primary-dark hover-border-accent transition-all font-medium">
              Schedule Demo
            </button>
            <button className="px-6 py-2.5 rounded-lg gradient-accent-strong text-primary-dark font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
