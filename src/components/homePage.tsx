"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sparkles } from "lucide-react";
import { stringify } from "querystring";
import { useEmailSignup } from "@/src/app/hooks/useEmailSignup";
import { useNodeGraphAnimation } from "../app/hooks/useNodeGraphAnimation";
import Link from "next/link";
export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeGraphAnimation(canvasRef);
  const { email, setEmail, submitEmail, status } = useEmailSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    submitEmail();
  };

  return (
    <section className="relative flex items-center text-primary-dark justify-center min-h-screen bg-card-dark px-6 overflow-hidden">
      {/*Neural Network Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/*Content*/}
      <div className="relative z-10 text-center max-w-3xl p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Automation, AI Driven Solutions, Custom Software
        </h1>
        <p className="text-lg md:text-xl mb-8 mx-auto max-w-2xl text-secondary-dark">
          Building Robust and Scalable AI Integrated Solutions tailored to your
          business needs
        </p>
        
        {/* Schedule a demo*/}
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-card-dark/50 border border-dark text-primary-dark placeholder:text-secondary-dark h-12 backdrop-blur-sm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))] focus-border-accent transition-all"
          />
          <Link href="/calendar">
          <button
            disabled={status === "loading"}
            className="gradient-accent-strong text-primary-dark px-8 h-12 rounded-lg font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Schedule Demo"}
          </button>
          </Link>
        </div>
        
        {status === "success" && (
          <p className="text-primary-dark">Thanks! We will be in touch shortly</p>
        )}
        {status === "error" && (
          <p className="text-accent-strong text-center">
            Something went wrong. Try again
          </p>
        )}
      </div>
    </section>
  );
}