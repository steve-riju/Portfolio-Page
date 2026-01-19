import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, AlertCircle } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Madurai Bible College',
      description:
        'Comprehensive digital platform that modernizes college administration and internal communication, streamlining student enrollments, assignment management, and academic workflows.',
      techStack: ['Java', 'Spring Boot', 'Angular', 'DigitalOcean', 'Cloudflare R2'],
      features: [
        'Student enrollment system',
        'Assignment view & validation',
        'Role-based access control',
        'Admin administration panel',
        'Teacher course & academic management',
        'Student learning & course access',
      ],
      images: [
        'https://mgx-backend-cdn.metadl.com/generate/images/913273/2026-01-16/c9a876ec-7d55-490f-bf48-3ce7e034c9e9.png',
        'https://mgx-backend-cdn.metadl.com/generate/images/913273/2026-01-16/883b4f08-2587-4bd1-b3fe-4ba403b08cf6.png',
      ],
      liveUrl: 'https://landing.campusmbc.org/',
      appUrl: 'https://campusmbc.org/',
      githubUrl: 'https://github.com/steve-riju/Madurai-Bible-College',
    },
    {
      title: 'Song Portal',
      description:
        'Digital hymn management system built for Christian Brethren Assembly, Valakom. Replaces manual PowerPoint creation with an automated solution for displaying church songs during worship services.',
      techStack: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Song addition & correction',
        'Auto-scroll functionality',
        'Automatic verse switching',
        'Presentation mode for projection',
        'Read mode for personal use',
      ],
      images: [
        'https://mgx-backend-cdn.metadl.com/generate/images/913273/2026-01-16/38161c1d-eb50-4fd4-9de3-605d20d193f5.png',
        'https://mgx-backend-cdn.metadl.com/generate/images/913273/2026-01-16/424b2b5e-490d-474b-8ba1-0c7ff552b691.png',
      ],
      liveUrl: 'https://song-portal.onrender.com/index.html',
      githubUrl: 'https://github.com/steve-riju/Song-Portal',
      note: 'Hosted on free tier - server may sleep after inactivity',
    },
    {
      title: 'HealthLink Alliance',
      description:
        'Hospital management system developed during training period to validate backend architecture and system design skills. Demonstrates comprehensive healthcare workflow management.',
      techStack: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Patient admission management',
        'Doctor–nurse–patient communication',
        'Doctor appointment booking system',
        'Medical records management',
      ],
      images: [
        'https://mgx-backend-cdn.metadl.com/generate/images/913273/2026-01-16/8c3cad81-d78f-4fe6-8ffd-3f3cacd695aa.png',
      ],
      githubUrl: 'https://github.com/steve-riju/HealthLink-Alliance',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
            }`}
          >
            Real-world applications built with clean architecture and production-ready code
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <Card
              key={project.title}
              className={`overflow-hidden card-hover ${
                isVisible
                  ? `animate-fade-in-up delay-${(idx + 2) * 100}`
                  : 'opacity-0'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Project Images */}
                <div className="space-y-4">
                  {project.images.map((image, imgIdx) => (
                    <div key={imgIdx} className="image-zoom rounded-lg overflow-hidden border border-border">
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${imgIdx + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">
                      Key Features
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note if exists */}
                  {project.note && (
                    <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                      <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{project.note}</p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <Button asChild size="sm">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.appUrl && (
                      <Button asChild size="sm" variant="secondary">
                        <a
                          href={project.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          App
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}