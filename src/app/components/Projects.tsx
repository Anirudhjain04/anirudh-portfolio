import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Anirudh Workbench",
      description:
        "Anirudh Workbench is my personal web development hub where I showcase projects, document my learning journey, and share technical journals.",
      image: "/Images/Anirudh_workbench.png",
      technologies: ["React.Js", "Tailwind", "Vite"],
      liveUrl: "https://anirudh-workbench.vercel.app/",
      githubUrl: "https://github.com/Anirudhjain04/Anirudh_workbench",
    },
    {
      title: "Crypto Price App",
      description:
        "The Crypto Price App is a React-based web application that provides real-time cryptocurrency prices using a public REST API.",
      image:
        "/Images/Crypto_Price_App.png",
      technologies: ["React.js", "JavaScript", "REST API", "CSS"],
      liveUrl: "https://crypto-price-app.vercel.app/",
      githubUrl: "https://github.com/Anirudhjain04/crypto-price-app",
    },
    {
      title: "Task Management Dashboard",
      description:
        "Real-time collaboration tool for teams with drag-and-drop functionality, live updates, and project analytics. Built with React and Firebase.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Developer Portfolio",
      description:
        "Modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected projects demonstrating my technical skills and
              problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* <div className="absolute top-4 right-4">
                    <Badge variant={project.type === 'Professional' ? 'default' : 'secondary'}>
                      {project.type}
                    </Badge>
                  </div> */}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
       <div className="flex justify-center mt-8">
        <Button asChild>
          <a
            href="https://anirudh-workbench.vercel.app/work"
            target="_blank"
            >
              View All Projects →  
          </a>
        </Button>
      </div> 
    </section>
  );
}
