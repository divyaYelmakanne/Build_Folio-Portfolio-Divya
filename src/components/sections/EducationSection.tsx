import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "Gokaraju Lailavathi Engineering College",
      location: "Hyderabad",
      period: "2022 - 2026",
      icon: "🎓",
      status: "Pursuing"
    },
    {
      degree: "Intermediate",
      field: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Geetha Junior College",
      location: "Medak",
      period: "2020 - 2022",
      icon: "📚",
      status: "Completed"
    },
    {
      degree: "SSC",
      field: "Board of Telangana",
      institution: "Kakatiya High School",
      location: "Medak",
      period: "2020",
      icon: "🏫",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            🎓 Educational Qualification
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full portfolio-gradient rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 hidden md:block">
                  <div className="w-4 h-4 portfolio-gradient rounded-full border-4 border-background"></div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="card-gradient rounded-2xl p-6 md:p-8 card-shadow border border-border/50 animate-scale-in hover:scale-105 transition-smooth">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Pursuing' 
                              ? 'bg-accent/20 text-accent' 
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        
                        {edu.field && (
                          <p className="text-lg text-accent font-medium mb-3">
                            {edu.field}
                          </p>
                        )}
                        
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            <span>{edu.institution}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for reverse layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;