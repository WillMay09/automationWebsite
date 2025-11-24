"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sparkles } from "lucide-react";
import { stringify } from "querystring";
import { useEmailSignup } from "@/src/app/hooks/useEmailSignup";
import { useNodeGraphAnimation } from "../app/hooks/useNodeGraphAnimation";

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeGraphAnimation(canvasRef);
  const { email, setEmail, submitEmail, status } = useEmailSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    //Handle email submission
    submitEmail();
  };
  return (
    <section className="relative flex items-center text-white justify-center min-h-screen bg-[#2a2a2a] px-6 overflow-hidden ">
      {/*Neural Network Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/*Content*/}
      <div className="relative z-10 text-center max-w-3xl p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Automation, AI Driven Solutions,Custom Software
        </h1>
        <p className="text-lg md:text-xl mb-8 mx-auto max-w-2xl">
          Building Robust and Scalable AI Integrated Solutions taloired to your
          bussiness needs
        </p>
        {/* Schedule a meet*/}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4"
        >
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-12 backdrop-blur-sm"
          ></Input>
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 h-12"
          >
            {status === "loading" ? "Sending..." : "Schedule Demo"}
          </Button>
        </form>
        {status === "success" && <p>Thanks! We will be in touch shortly</p>}
        {status === "error" && (
          <p className="text-red-500 text-center">
            Something went wrong. Try again
          </p>
        )}
      </div>
    </section>
  );
  {
    /* <form>
            <input
              type="email"
              placeholder="enter email"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></input>
            <button className="inline-block px-6 py-3 m-6 rounded-2xl bg-orange-500 text-white font-medium shadow-md hover:bg-blue-700 transition-colors">
              Schedule a Meeting
            </button>
          </form> 
          */
  }
}
