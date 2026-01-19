import { ArrowDown, Download, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10" />
      
      <div className="container-custom px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold animate-fade-in-up opacity-0 delay-100">
            Hi, I'm <span className="gradient-text">Steve Riju</span>
          </h1>

          {/* Title */}
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground animate-fade-in-up opacity-0 delay-200">
            Software Engineer
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-300">
            Building scalable backend systems with clean architecture and production-grade code
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-400">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="btn-glow group"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Steve_Riju_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-500">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://github.com/steve-riju"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href="https://linkedin.com/in/steve-riju"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.instagram.com/steve._.riju"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <a
                  href="mailto:steveriju2006@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}