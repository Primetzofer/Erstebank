import { Code2, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern technologies",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating intuitive interfaces that users love with attention to detail",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time with agile methodologies",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with 5+ years of experience building web
            applications. I love turning ideas into reality through clean code
            and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I started my journey in web development during college, building
            small projects and experimenting with different technologies. What
            began as a hobby quickly became my passion and career.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, I work with cutting-edge technologies to build applications
            that solve real problems. I believe in continuous learning and
            staying updated with the latest trends in tech.
          </p>
        </div>
      </div>
    </section>
  );
}
