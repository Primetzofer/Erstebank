import { Award, BookOpen, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
// import profileImage from "../public/images/Anita.jpg"; 


export function TherapyAbout() {
  const qualifications = [
    {
      icon: Award,
      title: "Approbation & Qualifikation",
      description:
        "Fachärztin für Psychiatrie und Psychotherapie mit Zusatzausbildung in Traumatherapie",
    },
    {
      icon: BookOpen,
      title: "Kontinuierliche Weiterbildung",
      description:
        "Regelmäßige Fortbildungen und Supervision garantieren aktuelle therapeutische Methoden",
    },
    {
      icon: Heart,
      title: "Menschenzentrierter Ansatz",
      description:
        "Ihre individuellen Bedürfnisse stehen im Mittelpunkt meiner therapeutischen Arbeit",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                // src="C:\Users\alexa\AppData\Local\Webdesign\Figmaexample\src\public\images\Anita.jpg"
                         
                src="../images/Anita.jpg"
                alt="Mag. Anita Kouba"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Über mich
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Seit über 15 Jahren begleite ich Menschen in herausfordernden
                Lebenssituationen. Meine Leidenschaft ist es, gemeinsam mit
                Ihnen Wege zu mehr Lebensqualität und emotionalem Wohlbefinden
                zu entwickeln.
              </p>
              <p>
                Nach meinem Medizinstudium an der Universität München und meiner
                Facharztausbildung habe ich mich auf tiefenpsychologisch
                fundierte Psychotherapie und Verhaltenstherapie spezialisiert.
                Zusätzlich verfüge ich über Zusatzqualifikationen in
                Traumatherapie (EMDR) und systemischer Therapie.
              </p>
              <p>
                In meiner Arbeit ist mir eine wertschätzende, vertrauensvolle
                Atmosphäre besonders wichtig. Jeder Mensch ist einzigartig –
                deshalb passe ich meine therapeutischen Methoden individuell an
                Ihre Bedürfnisse an.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {qualifications.map((qual) => {
            const Icon = qual.icon;
            return (
              <Card
                key={qual.title}
                className="border-2 border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {qual.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {qual.description}
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