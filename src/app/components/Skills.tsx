import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Skills() {
  const coreSkills = [
    { name: "React.js" },
    { name: "JavaScript (ES6+)" },
    { name: "Tailwind CSS" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "REST APIs" }
  ];

  const technologies = [
    "React", "JavaScript", "TypeScript", "HTML", "CSS3", "Bootstrap", "REST APIs",
    "Tailwind CSS", "Git", "GitHub", "Responsive Design", "WordPress",
    "Technical SEO", "Core Web Vitals", "Google Analytics", "Google Search Console", "VS Code"
  ];

  const experience = [
    {
      title: "Freelance Web Developer & SEO Consultant",
      period: "Jan 2026 - Present",
      description: "Built and optimized websites for multiple clients while improving website performance, responsiveness, and technical SEO."
    },
    {
      title: "Senior SEO Executive",
      company: "Deviation Infocom",
      period: "2021 - Dec 2025",
      description: "Managed website optimization, technical SEO, Core Web Vitals, and user experience improvements across multiple business websites."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Skills & Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Frontend technologies and web expertise
            </p>
          </div>

          {/* Core Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {coreSkills.map((skill, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl mb-2">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 text-center">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle>{job.title}</CardTitle>
                      <Badge variant="outline">{job.period}</Badge>
                    </div>
                    <p className="text-primary">{job.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Technologies */}
          <div className="text-center">
            <h3 className="text-2xl mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}