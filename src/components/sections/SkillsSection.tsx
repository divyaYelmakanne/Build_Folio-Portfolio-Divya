import circuitAnimation from '@/assets/circuit-animation.gif';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Java", "Python", "HTML", "CSS", "JavaScript", "PHP"],
      color: "primary"
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Tailwind CSS"],
      color: "accent"
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Python", "Node.js", "Express.js", "PHP", "MySQL"],
      color: "primary-glow"
    },
    {
      title: "Database & Storage",
      icon: "🗄️",
      skills: ["MySQL", "JSON", "CSV file storage"],
      color: "accent"
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["React.js", "Node.js", "Flask", "Tailwind CSS"],
      color: "primary"
    },
    {
      title: "Dev Tools & Platforms",
      icon: "🛠️",
      skills: ["Git & GitHub", "VS Code", "Render", "Vercel"],
      color: "primary-glow"
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Project Management", "Teamwork", "Time Management", "Self-Learning", "Communication"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/5 border-primary/20 hover:border-primary/40";
      case "accent":
        return "bg-accent/5 border-accent/20 hover:border-accent/40";
      case "primary-glow":
        return "bg-primary-glow/5 border-primary-glow/20 hover:border-primary-glow/40";
      default:
        return "bg-muted/5 border-border hover:border-border/60";
    }
  };

  const getTextColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "accent":
        return "text-accent";
      case "primary-glow":
        return "text-primary-glow";
      default:
        return "text-foreground";
    }
  };

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            🛠️ Skills
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Background Circuit Animation */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <img src={circuitAnimation} alt="Circuit Animation" className="w-40 h-40" />
          </div>
          
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`card-gradient rounded-2xl p-6 card-shadow border transition-smooth hover:scale-105 animate-fade-in-up ${getColorClasses(category.color)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className={`text-xl font-bold ${getTextColorClass(category.color)}`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-smooth hover:scale-105 ${
                      category.color === "primary" 
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : category.color === "accent"
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "bg-primary-glow/10 text-primary-glow border border-primary-glow/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills highlight section */}
        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 card-shadow border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-accent">What I Love Working With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["React.js", "Node.js", "Python", "AI Tools", "Tailwind CSS", "Git"].map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 portfolio-gradient rounded-full text-white font-medium hover:scale-110 transition-bounce cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;