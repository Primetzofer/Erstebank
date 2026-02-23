import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TherapyContact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      info: "+49 89 123 456 78",
      detail: "Mo–Fr: 9:00–12:00 Uhr",
    },
    {
      icon: Mail,
      title: "E-Mail",
      info: "praxis@dr-weber.de",
      detail: "Antwort innerhalb von 24 Stunden",
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "Maximilianstraße 12",
      detail: "80539 München",
    },
    {
      icon: Clock,
      title: "Sprechzeiten",
      info: "Nach Vereinbarung",
      detail: "Auch Abendtermine möglich",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            Kontakt & Anfahrt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ich freue mich auf Ihre Kontaktaufnahme. Gemeinsam finden wir einen
            Termin für ein Erstgespräch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((contact) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={contact.title}
                  className="hover:shadow-lg transition-shadow border-2 border-white"
                >
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-gray-800 font-medium mb-1">
                      {contact.info}
                    </p>
                    <p className="text-sm text-gray-600">{contact.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-teal-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Erstgespräch vereinbaren
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Der erste Schritt ist oft der schwerste. Gerne können Sie mich
              telefonisch oder per E-Mail kontaktieren. In einem unverbindlichen
              Erstgespräch lernen wir uns kennen und besprechen, wie ich Sie
              unterstützen kann.
            </p>

            <div className="space-y-4">
              <Button className="w-full bg-teal-600 hover:bg-teal-700" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </Button>
              <Button
                variant="outline"
                className="w-full border-teal-600 text-teal-700 hover:bg-teal-50"
                size="lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                E-Mail senden
              </Button>
              <Button
                variant="outline"
                className="w-full border-teal-600 text-teal-700 hover:bg-teal-50"
                size="lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Online-Terminbuchung
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              Alle Anfragen werden selbstverständlich vertraulich behandelt und
              unterliegen der ärztlichen Schweigepflicht.
            </p>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="relative h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1653485609329-12dc6c265f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaW50ZXJpb3IlMjBwbGFudCUyMHdpbmRvd3xlbnwxfHx8fDE3NzExNjI2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Praxisräume"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Zentrale Lage in München
                </h3>
                <p className="text-white/90">
                  Gut erreichbar mit öffentlichen Verkehrsmitteln (U4/U5
                  Lehel) und Parkmöglichkeiten in der Nähe
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
