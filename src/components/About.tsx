import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

export default function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            className={`${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <Card className="overflow-hidden border-2 border-primary/20">
              <img
              src="/steve-image.png"

                alt="Steve Riju - Software Engineer"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* About Content */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a software engineer specializing in backend development with{' '}
                <span className="text-foreground font-semibold">Java</span> and{' '}
                <span className="text-foreground font-semibold">Spring Boot</span>. 
                My focus is on building scalable, maintainable systems that solve 
                real-world problems. I have hands-on experience developing full-stack 
                applications, from database design to REST APIs to frontend integration.
              </p>

              <p>
                My work spans college administration systems, church management tools, 
                and healthcare platforms—each requiring clean architecture, role-based 
                access control, and production-ready code. I'm passionate about writing 
                code that's not just functional, but elegant and maintainable.
              </p>

              <p>
                Currently expanding my skills in{' '}
                <span className="text-foreground font-semibold">Angular</span> and{' '}
                <span className="text-foreground font-semibold">Spring AI</span> to 
                build even more powerful solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-4 text-center card-hover">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects Deployed
                </div>
              </Card>
              <Card className="p-4 text-center card-hover">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Production Ready
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}