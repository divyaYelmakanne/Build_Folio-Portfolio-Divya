import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dataAnimation from '@/assets/data-animation.gif';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Rasoi-Connect-Hub",
      description: "Developed Rasoi Connect Hub as part of a Web Development Hackathon organized by Tutedude. The platform connects home chefs with local food lovers, enabling easy ordering of homemade meals. Built using HTML, CSS, JavaScript, and integrated responsive UI for a seamless user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/divyaYelmakanne/Web-Development-Hackathon-Tutedude---Rasoi-Connect-Hub",
      live: "https://web-development-hackathon-tutedude.vercel.app/",
      emoji: "🍽️"
    },
    {
      title: "SentinelCX",
      description: "Participated in an AI Agent Hackathon and built SentinelCX, a smart customer support assistant powered by AI. Designed to handle queries, provide instant responses, and enhance user experience with intelligent automation. Implemented using Python, LangChain, and OpenAI API, with seamless frontend integration for usability.",
      tech: ["Python", "LangChain", "OpenAI API", "AI"],
      github: "https://github.com/divyaYelmakanne/AI-Agent-Hackathon---SentinelCX",
      live: "https://ai-agent-hackathon-sentinel-cx.vercel.app/",
      emoji: "🤖"
    },
    {
      title: "NextGenEd",
      description: "Created NextGenEd, a modern education platform during the Hack-A-Tone hackathon aimed at reimagining digital learning. The platform features personalized learning paths, progress tracking, and an intuitive UI for students and educators. Built using HTML, CSS, JavaScript, with a focus on interactive design and user engagement.",
      tech: ["HTML", "CSS", "JavaScript", "Education Tech"],
      github: "https://github.com/divyaYelmakanne/Hack-A-Tone-NextGenEd",
      live: "https://hakathon-nine.vercel.app/",
      emoji: "📚"
    },
    {
      title: "Smart-Consent-Management-System",
      description: "Developed a Smart Consent Management System during the HACKGENESIS hackathon to securely manage user data permissions. The system ensures transparency and user control over data sharing using a centralized digital consent platform. Built with HTML, CSS, JavaScript, and integrated smart logic for real-time consent tracking and updates.",
      tech: ["HTML", "CSS", "JavaScript", "Data Privacy"],
      github: "https://github.com/divyaYelmakanne/HACKGENESIS-Smart-Consent-Management-System",
      live: "https://hackgenesis-smart-consent-managemen.vercel.app/",
      emoji: "🔒"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            💻 Projects
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative">
          {/* Floating Data Animation */}
          <div className="absolute -top-8 right-0 opacity-20">
            <img src={dataAnimation} alt="Data Animation" className="w-24 h-24" />
          </div>
          
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-gradient rounded-2xl p-6 md:p-8 card-shadow border border-border/50 animate-scale-in hover:scale-105 transition-smooth relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card hover animation */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-smooth">
                <img src={dataAnimation} alt="Data Animation" className="w-8 h-8" />
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{project.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="flex-1 hover:border-primary hover:bg-primary/10"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                
                <Button 
                  size="sm" 
                  asChild
                  className="flex-1 portfolio-gradient hover:opacity-90"
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <div className="card-gradient rounded-2xl p-8 card-shadow border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-accent">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button 
              size="lg" 
              asChild
              className="portfolio-gradient hover:opacity-90 text-white glow-shadow"
            >
              <a href="https://github.com/divyaYelmakanne" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;