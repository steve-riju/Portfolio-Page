import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const skillCategories = [
    {
      title: 'Backend & Core',
      skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Microservices'],
    },
    {
      title: 'Database',
      skills: ['MySQL', 'Oracle'],
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['AEM', 'DigitalOcean', 'Cloudflare', 'Git'],
    },
    {
      title: 'Currently Learning',
      skills: ['Spring AI', 'Advanced Angular'],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
            }`}
          >
            Technologies and tools I work with to build robust solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className={`p-6 card-hover ${
                isVisible
                  ? `animate-fade-in-up delay-${(idx + 2) * 100}`
                  : 'opacity-0'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}