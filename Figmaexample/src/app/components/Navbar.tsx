import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FlowTask
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
            <Button onClick={() => scrollToSection("cta")}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
            >
              Pricing
            </button>
            <Button
              className="w-full"
              onClick={() => scrollToSection("cta")}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
