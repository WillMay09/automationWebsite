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

import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup" + email);
    setEmail("");
  };

  return (
    <footer className="bg-app-dark border-t border-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/*Company info*/}
          <div>
            {/*Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-accent-strong rounded-lg flex items-center justify-center">
                <span className="text-primary-dark">AI</span>
              </div>
              <span className="text-primary-dark tracking-wider">SIGNALSTACK</span>
            </div>
            <p className="text-secondary-dark mb-6">
              Transforming businesses with cutting-edge AI solutions and
              intelligent automation
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-muted-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-dark" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card-dark hover-bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5 text-muted-dark" />
              </a>
            </div>
          </div>
          {/*Services */}
          <div>
            <h4 className="text-primary-dark mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  Process Automation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  Full Stack Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  Web Scraping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  AI/ML Integration
                </a>
              </li>
            </ul>
          </div>
          {/*Company*/}
          <div>
            <h4 className="text-primary-dark mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  Personal Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary-dark hover-text-accent transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/*Newsletter*/}
          <div>
            <p className="text-secondary-dark text-sm mb-3">
              Subscribe to our newsletter
            </p>
            <div>
              <button
                onClick={handleNewsletterSubmit}
                className="bg-accent hover-bg-accent text-primary-dark px-4 h-10 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}