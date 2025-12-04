"use client";

import { useNodeGraphAnimation } from "../app/hooks/useNodeGraphAnimation";

import { useRef } from "react";

import { Brain } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeGraphAnimation(canvasRef);

  return (
    <>
      <section className="relative flex items-center justify-center text-white min-h-screen bg-[#2a2a2a] px-6 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 text-center max-w-3xl p-6">
          {/*Content*/}
          <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-orange-500" />
            <span className="text-zinc-300">
              The Future of Business is Intelligent
            </span>
          </div>
          <h1 className="mb-6 text-2xl font-bold">
            Why AI is No Longer Optional
          </h1>
          <p className="text-xl text-zinc-400 md:text-2xl mb-8 mx-auto max-w-2xl">
            In today&apos;s hyper-competitive landscape, AI isn&apos;t just an
            advantage—it&apos;s a necessity. Discover how artificial
            intelligence and custom software are reshaping industries and
            unlocking unprecedented growth opportunities.
          </p>
        </div>
      </section>
    </>
  );
}
