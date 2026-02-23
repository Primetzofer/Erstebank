import { Lightbulb, MessageCircle, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TherapyApproach() {
  const principles = [
    {
      icon: MessageCircle,
      title: "Vertrauensvolle Beziehung",
      description:
        "Eine sichere, wertschätzende therapeutische Beziehung bildet die Grundlage unserer Arbeit.",
    },
    {
      icon: Target,
      title: "Zielorientiert",
      description:
        "Wir arbeiten gemeinsam an konkreten Zielen, die Sie in Ihrem Leben erreichen möchten.",
    },
    {
      icon: Lightbulb,
      title: "Ressourcenaktivierung",
      description:
        "Wir entdecken und stärken Ihre inneren Ressourcen und Bewältigungsmöglichkeiten.",
    },
    {
      icon: TrendingUp,
      title: "Nachhaltiger Erfolg",
      description:
        "Sie erlernen Strategien, die Sie auch nach der Therapie selbstständig anwenden können.",
    },
  ];

  return (
    <section id="approach" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            Mein Therapieansatz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Individuelle, evidenzbasierte Behandlung mit ganzheitlichem Blick auf
            Ihre persönliche Situation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              In meiner therapeutischen Arbeit verbinde ich verschiedene
              wissenschaftlich fundierte Methoden – insbesondere
              tiefenpsychologisch fundierte Psychotherapie, Verhaltenstherapie
              und systemische Ansätze. Diese Vielfalt ermöglicht es mir, die
              Behandlung genau auf Ihre Bedürfnisse abzustimmen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mir ist es wichtig, dass Sie sich verstanden und sicher fühlen.
              Gemeinsam erforschen wir die Hintergründe Ihrer aktuellen
              Schwierigkeiten und entwickeln neue Perspektiven und
              Handlungsmöglichkeiten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Therapie ist ein aktiver Prozess, bei dem Sie im Mittelpunkt
              stehen. Ich begleite Sie dabei, Ihre eigenen Lösungen zu finden
              und Ihre persönliche Entwicklung voranzubringen.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMHBlYWNlZnVsJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzExNjI2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Achtsamkeit und Meditation"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <Card
                key={principle.title}
                className="text-center border-2 border-teal-100 hover:border-teal-300 transition-all"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-teal-700" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
