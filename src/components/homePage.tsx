"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sparkles } from "lucide-react";

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
    //gets drawing surface
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create nodes
    const nodeCount = 50;
    //array of nodes
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        //position
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        //velocity
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        //size
        radius: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(9,9,11,1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      const maxDistance = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );
        gradient.addColorStop(0, "rgba(249,115,22,0.8)");
        gradient.addColorStop(0.5, "rgba(234,88,12,0.4)");
        gradient.addColorStop(1, "rgba(234,88,12,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(249,115,22,1)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    //prevents memory leaks
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4">
          <Input
            type="email"
            placeholder="Work Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 h-12 backdrop-blur-sm"
          ></Input>
          <Button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 h-12"
          >
            Schedule Demo
          </Button>
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
