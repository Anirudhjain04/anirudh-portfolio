import { Card, CardContent } from "./ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using React.js, JavaScript, Tailwind CSS, and modern frontend development practices.",
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Responsive UI Design",
      description:
        "Creating clean, mobile-friendly, and user-focused interfaces that deliver seamless experiences across all devices and screen sizes.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "SEO & Performance",
      description:
        "Optimizing website speed, Core Web Vitals, and technical SEO to improve user experience, search visibility, and overall performance.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
            <p className="text-lg font-semibold text-muted-foreground max-w-2xl mx-auto">
              SEO → Websites → Freelancing → Frontend Development
            </p>
            <br />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I started my journey in the digital world through SEO and website
              optimization, spending 4+ years improving website performance,
              user experience, and search visibility. Today, I build responsive
              and user-friendly web applications using React.js, JavaScript, and
              modern frontend technologies while combining my expertise in web
              performance and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 border">
            <h3 className="text-3xl font-semibold mb-2">My Story</h3>
            <p className="text-primary font-medium mb-8">
  From SEO to Frontend Development
</p>
            <div className="space-y-6 text-muted-foreground text-lg leading-8 max-w-4xl">
              <p>
                My journey into web development started through SEO and website
                optimization. For over 4 years, I worked on improving website
                performance, Core Web Vitals, user experience, and search
                visibility for businesses across different industries.
              </p>
              <p>
                While working on websites, I became increasingly curious about
                how modern web applications are built. That curiosity led me to
                learn JavaScript, React.js, Tailwind CSS, and modern frontend
                development practices. What started as a desire to understand
                websites better soon became a passion for building them.
              </p>
              <p>
                After leaving my full-time role, I began working as a freelance
                web developer, helping clients build and optimize websites while
                continuing to strengthen my frontend development skills through
                personal projects and continuous learning.
              </p>
              <p>
                Today, I focus on creating responsive, performant, and
                user-friendly web applications using React.js and modern web
                technologies. I'm currently expanding my expertise in
                TypeScript, MERN Stack, and Generative AI while actively
                pursuing opportunities as a Frontend Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
