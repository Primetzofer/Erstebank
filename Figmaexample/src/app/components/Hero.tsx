import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-in fade-in duration-700">
          <h1 className="mb-4">
            <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Full Stack Developer & Designer
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Crafting beautiful, functional digital experiences that make a difference
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:alex@example.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}
