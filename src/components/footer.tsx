"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import { Button } from "./ui/button";
//import { Input } from "./ui/input";

import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup" + email);
    setEmail("");
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/*Company info*/}
          <div>
            {/*Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white">AI</span>
              </div>
              <span className="text-white tracking-wider">AIAGENCY</span>
            </div>
            <p className="text-zinc-400 mb-6">
              Transforming businesses with cutting-edge AI solutions and
              intelligent automation
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-zinc-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-zinc-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-zinc-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-zinc-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-zinc-300" />
              </a>
            </div>
          </div>
          {/*Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Process Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Full Stack Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Web Scraping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  AI/ML Integration
                </a>
              </li>
            </ul>
          </div>
          {/*Company*/}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Personal Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-orange-500 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/*Newsletter*/}
          <div>
            <p className="text-zinc-400 text-sm mb-3">
              Subscribe to our newsletter
            </p>
            <form>
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 h-10"
              >
                Subcribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
