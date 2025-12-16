"use client";

import { useNodeGraphAnimation } from "../app/hooks/useNodeGraphAnimation";

import { useRef } from "react";

import { Brain } from "lucide-react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useNodeGraphAnimation(canvasRef);

  return (
    <>
      <section className="relative flex items-center justify-center text-primary-dark min-h-screen bg-card-dark px-6 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 text-center max-w-3xl p-6">
          {/*Content*/}
          <div className="inline-flex items-center gap-2 bg-card-dark/50 border border-dark rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-muted-dark">
              The Future of Business is Intelligent
            </span>
          </div>
          <h1 className="mb-6 text-2xl font-bold">
            Why AI is No Longer Optional
          </h1>
          <p className="text-xl text-secondary-dark md:text-2xl mb-8 mx-auto max-w-2xl">
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
