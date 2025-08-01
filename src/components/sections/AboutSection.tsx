import codingAnimation from '@/assets/coding-animation.gif';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            📌 About Me
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="card-gradient rounded-2xl p-8 md:p-12 card-shadow border border-border/50 relative">
          {/* Floating Animation */}
          <div className="absolute top-4 right-4 opacity-30">
            <img src={codingAnimation} alt="Coding Animation" className="w-16 h-16 rounded-lg" />
          </div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-center">
            <p className="animate-fade-in-up">
              Hello! I'm <span className="text-accent font-semibold">Divya Yelmakanne</span>, 
              a passionate and curious Bachelor of Engineering student with a strong interest in{' '}
              <span className="text-primary font-semibold">Artificial Intelligence</span>,{' '}
              <span className="text-primary font-semibold">Web Development</span>, and{' '}
              <span className="text-primary font-semibold">creative tech projects</span>.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              I love exploring new tools, building smart applications, and turning ideas into 
              real-world solutions. Whether it's designing a web interface or experimenting with 
              AI-powered features, I enjoy the full process of{' '}
              <span className="text-accent font-semibold">learning and creating</span>.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              I'm always eager to grow, collaborate, and take on exciting challenges in the tech world. 
              My goal is to contribute meaningfully to projects that make a difference and continue 
              pushing the boundaries of what's possible with technology.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-semibold text-lg mb-2 text-primary">AI Enthusiast</h3>
              <p className="text-sm text-muted-foreground">
                Passionate about artificial intelligence and machine learning applications
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/10">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-semibold text-lg mb-2 text-accent">Web Developer</h3>
              <p className="text-sm text-muted-foreground">
                Creating responsive and interactive web applications
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary-glow/5 border border-primary-glow/10">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-lg mb-2 text-primary-glow">Problem Solver</h3>
              <p className="text-sm text-muted-foreground">
                Turning innovative ideas into practical solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;