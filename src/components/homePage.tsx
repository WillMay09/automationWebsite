"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
//import {Input} from './ui/input';
import { Sparkles } from "lucide-react";
import { M_PLUS_1 } from "next/font/google";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function HomePage() {
  const [email, setEmail] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    //Handle email submission
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    //Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    //Create nodes
    const nodeCount = 50;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    //Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(9,9,11,1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //Update and draw nodes
      nodes.forEach((node) => {
        //Update position
        node.x += node.vx;
        node.y += node.vy;

        //Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        //Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });
    };

    //Draw connections
    const maxDistance = 150;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].x - nodes[j].x;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.5;
          ctx.strokeStyle = "rgba(249, 115, 22, ${opacity})"; //orange-500
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    //Drawing nodes
  });

  return (
    <section className="flex items-center text-white justify-center min-h-screen bg-[#2a2a2a] px-4 ">
      <div className="text-center max-w-3xl p-6 border-4 border-amber-500 rounded-sm">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Automation, AI Driven Solutions,Custom Software
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Building Robust and Scalable AI Integrated Solutions taloired to your
          bussiness needs
        </p>
        {/* Schedule a meet*/}
        <form className="flex items-center justify-center">
          <div className="flex w-full shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="enter email"
              className="flex-1 px-4 py-3 bg-[#4a4a4a] focus:outline-non"
              required
            ></input>
            <button className="px-5 bg-[#fe6036] text-white font-medium shadow-md hover:bg-blue-700 transition-colors">
              Schedule a Meeting
            </button>
          </div>
        </form>
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
