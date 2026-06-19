import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl mb-4">Hi, I'm Anirudh Jain</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Frontend Developer
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
  Frontend Developer with 4+ years of experience in web technologies, SEO, and website performance optimization.
Passionate about building fast, responsive, and user-friendly web applications using React and modern frontend technologies.
</p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button onClick={scrollToProjects} size="lg">
              View Projects
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="/public/Anirudh_Jain_Frontend_Developer_Resume.pdf" download>
              Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/Anirudhjain04" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/anirudh-jain-aj" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:jainanirudh0402@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}