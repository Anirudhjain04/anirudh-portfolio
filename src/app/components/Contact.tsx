import { Button } from "./ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jainanirudh0402@gmail.com",
      href: "mailto:jainanirudh0402@gmail.com"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/Anirudhjain04",
      href: "https://github.com/Anirudhjain04/"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/anirudh-jain-aj",
      href: "https://www.linkedin.com/in/anirudh-jain-aj/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Looking for a frontend developer? Let's discuss your project and see how I can help bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactLinks.map((contact, index) => (
              <div key={index} className="text-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-auto flex-col gap-3 py-6"
                  asChild
                >
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    {contact.icon}
                    <div>
                      <p className="text-sm opacity-70">{contact.label}</p>
                      <p className="text-sm">{contact.value}</p>
                    </div>
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button size="lg" asChild>
              <a href="mailto:jainanirudh0402@gmail.com">
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}