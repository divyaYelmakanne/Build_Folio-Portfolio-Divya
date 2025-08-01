import { ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Open Source Hackathon",
      organization: "Unstop",
      type: "Participation",
      link: "https://unstop.com/certificate-preview/a0cfa229-07d7-4c77-b712-893715ff3b9f",
      emoji: "🏆"
    },
    {
      title: "Coding Round Challenge",
      organization: "Unstop",
      type: "Participation", 
      link: "https://unstop.com/certificate-preview/7eab0954-02a5-4fee-8a88-cc95622adbce",
      emoji: "💻"
    },
    {
      title: "Product Management Quiz",
      organization: "Tough Tongue AI",
      type: "Assessment",
      link: "https://unstop.com/certificate-preview/f978ab92-69a2-430c-b505-446c6140e1e6",
      emoji: "🧠"
    },
    {
      title: "Call2Code",
      organization: "Unstop",
      type: "Participation",
      link: "https://unstop.com/certificate-preview/f4685834-d752-494e-a865-4c9525303c6f",
      emoji: "📞"
    },
    {
      title: "CodeStorm 2025",
      organization: "Unstop",
      type: "Participation",
      link: "https://unstop.com/certificate-preview/5be36a33-c4a5-4d91-a48c-7c611e0bf5cc",
      emoji: "⛈️"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            📜 Certifications
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-6 card-shadow border border-border/50 animate-scale-in hover:scale-105 transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-3">{cert.emoji}</div>
                <div className="mb-2">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                    {cert.type}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 text-center group-hover:text-primary transition-smooth">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground text-center mb-4">
                {cert.organization}
              </p>

              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="w-full hover:border-primary hover:bg-primary/10"
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <Award className="h-4 w-4 mr-2" />
                  View Certificate
                </a>
              </Button>
            </div>
          ))}

          {/* More certificates CTA card */}
          <div className="card-gradient rounded-2xl p-6 card-shadow border border-border/50 animate-scale-in hover:scale-105 transition-smooth flex flex-col justify-center items-center">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-bold text-center mb-2 text-accent">More Certificates</h3>
            <p className="text-muted-foreground text-center mb-4 text-sm">
              View my complete certification portfolio
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="w-full hover:border-accent hover:bg-accent/10"
            >
              <a href="https://www.linkedin.com/in/divya-yelmakanne/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 card-gradient rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground">Certifications</p>
          </div>
          
          <div className="text-center p-6 card-gradient rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">4+</div>
            <p className="text-muted-foreground">Hackathons</p>
          </div>
          
          <div className="text-center p-6 card-gradient rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary-glow mb-2">Multiple</div>
            <p className="text-muted-foreground">Competitions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;