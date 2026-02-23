import { Heart, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TherapyHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">
                Einfühlsame Begleitung auf Ihrem Weg
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight text-gray-900">
              Ein sicherer Raum für{" "}
              <span className="text-teal-700 font-normal">
                Ihre persönliche Entwicklung
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Willkommen in meiner psychotherapeutischen Praxis. Ich begleite Sie
              professionell und empathisch auf Ihrem Weg zu mehr Lebensqualität
              und innerem Wohlbefinden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-teal-600 hover:bg-teal-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Erstgespräch vereinbaren
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-teal-600 text-teal-700 hover:bg-teal-50"
              >
                Mehr erfahren
              </Button>
            </div>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Kassenzulassung für alle gesetzlichen Krankenkassen
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Vertraulich und in geschütztem Rahmen
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Über 15 Jahre Berufserfahrung
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760479099679-25c78cd9cd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcGVhY2VmdWwlMjBuYXR1cmUlMjB0aGVyYXB5fGVufDF8fHx8MTc3MTE2MjY4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ruhige Naturszene"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-teal-400 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}