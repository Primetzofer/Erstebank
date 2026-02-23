import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Contact() {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:alex@example.com",
      label: "alex@example.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      label: "github.com/alexjohnson",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "linkedin.com/in/alexjohnson",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      label: "@alexjohnson",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Card key={link.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <a
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{link.name}</p>
                      <p className="text-sm text-gray-600">{link.label}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="pt-6">
              <p className="mb-4 text-lg">Let's work together!</p>
              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <a href="mailto:alex@example.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
