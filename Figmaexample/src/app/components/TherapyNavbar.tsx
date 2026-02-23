import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function TherapyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-teal-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-light text-teal-800">
              Dr. med. Sarah Weber
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-teal-700 transition-colors"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-teal-700 transition-colors"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="text-gray-700 hover:text-teal-700 transition-colors"
            >
              Therapieansatz
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-teal-700 transition-colors"
            >
              Kontakt
            </button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Phone className="w-4 h-4 mr-2" />
              Termin vereinbaren
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-teal-100">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-teal-700 transition-colors py-2"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-teal-700 transition-colors py-2"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("approach")}
              className="block w-full text-left text-gray-700 hover:text-teal-700 transition-colors py-2"
            >
              Therapieansatz
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-teal-700 transition-colors py-2"
            >
              Kontakt
            </button>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              <Phone className="w-4 h-4 mr-2" />
              Termin vereinbaren
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}