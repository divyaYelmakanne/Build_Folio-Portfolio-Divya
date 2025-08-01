import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '/lovable-uploads/d8480f5a-891e-49a8-bc5f-a2b30713e87a.png';
import techAnimation from '@/assets/tech-animation.gif';

const HeroSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Divya_Yelmakanne_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient section-padding relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-10 right-10 opacity-20">
        <img src={techAnimation} alt="Tech Animation" className="w-32 h-32 rounded-lg" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-20">
        <img src={techAnimation} alt="Tech Animation" className="w-24 h-24 rounded-lg transform rotate-180" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Divya Yelmakanne"
                className="w-48 h-48 rounded-full object-cover border-4 border-primary/20 glow-shadow transition-smooth hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 transition-smooth"></div>
            </div>
          </div>

          {/* Introduction */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-muted-foreground">Hii</span>{' '}
            <span className="text-4xl md:text-6xl">👋</span>
            <br />
            <span className="text-muted-foreground">I'm</span>{' '}
            <span className="portfolio-gradient bg-clip-text text-transparent">
              Divya Yelmakanne
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate Computer Science student who loves solving real-world problems with{' '}
            <span className="text-accent font-semibold">AI</span>,{' '}
            <span className="text-accent font-semibold">Web Development</span>, and{' '}
            <span className="text-accent font-semibold">Creative Tech</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleResumeDownload}
              size="lg"
              className="portfolio-gradient hover:opacity-90 text-white glow-shadow transition-bounce hover:scale-105"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild className="hover:border-primary hover:bg-primary/10 transition-smooth">
                <a href="https://github.com/divyaYelmakanne" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:border-primary hover:bg-primary/10 transition-smooth">
                <a href="https://www.linkedin.com/in/divya-yelmakanne/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:border-primary hover:bg-primary/10 transition-smooth">
                <a href="mailto:divyayelmakanne@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;