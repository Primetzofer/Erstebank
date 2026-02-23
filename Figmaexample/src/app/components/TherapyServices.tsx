import { Brain, Users, Heart, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function TherapyServices() {
  const services = [
    {
      icon: Brain,
      title: "Depression & Angststörungen",
      description:
        "Behandlung von depressiven Episoden, Panikstörungen, generalisierten Angststörungen und Phobien",
      methods: ["Verhaltenstherapie", "Achtsamkeitsbasierte Ansätze"],
    },
    {
      icon: Shield,
      title: "Trauma & Belastungsstörungen",
      description:
        "EMDR und traumafokussierte Therapie bei posttraumatischen Belastungsstörungen und Anpassungsstörungen",
      methods: ["EMDR", "Traumatherapie"],
    },
    {
      icon: Heart,
      title: "Burnout & Stressbewältigung",
      description:
        "Unterstützung bei Erschöpfung, beruflicher Überlastung und der Entwicklung von Bewältigungsstrategien",
      methods: ["Stressmanagement", "Resilienztraining"],
    },
    {
      icon: Users,
      title: "Beziehungsprobleme & Krisen",
      description:
        "Begleitung bei Partnerschaftskonflikten, Trennungen und schwierigen Lebensphasen",
      methods: ["Systemische Therapie", "Paartherapie"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            Leistungsspektrum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle psychotherapeutische Behandlung für verschiedene
            Störungsbilder und Lebenssituationen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="hover:shadow-xl transition-shadow border-2 border-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.methods.map((method) => (
                      <span
                        key={method}
                        className="inline-block bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-teal-100">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Kostenübernahme
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als Fachärztin für Psychiatrie und Psychotherapie mit voller
            Kassenzulassung werden die Kosten für die Therapie von allen
            gesetzlichen Krankenkassen übernommen. Auch Privatpatienten und
            Selbstzahler sind herzlich willkommen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Das Erstgespräch dient dem gegenseitigen Kennenlernen und der
            Klärung, ob eine therapeutische Zusammenarbeit für Sie das Richtige
            ist. Dieses Gespräch ist für gesetzlich Versicherte kostenfrei.
          </p>
        </div>
      </div>
    </section>
  );
}
