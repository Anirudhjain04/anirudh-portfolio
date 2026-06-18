import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/Anirudhjain04/",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/anirudh-jain-aj/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:jainanirudh0402@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg mb-2">Anirudh Jain</h3>
              <p className="text-muted-foreground text-sm">Frontend Developer</p>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
            >
              Back to Top
            </Button>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Anirudh Jain. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}