import { Zap, Users, BarChart3, Shield, Smartphone, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built for speed with instant updates and real-time collaboration across your entire team.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with comments, mentions, and shared workspaces.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Track progress with detailed insights and customizable reports for better decisions.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Enterprise-grade security with end-to-end encryption and compliance certifications.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Stay productive on the go with native iOS and Android apps that sync perfectly.",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description:
        "Built-in time tracking helps you understand where your time goes and optimize workflows.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features that help teams stay organized, focused, and productive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-2 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
