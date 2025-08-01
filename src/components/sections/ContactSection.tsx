import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 portfolio-gradient bg-clip-text text-transparent">
            📞 Contact Me
          </h2>
          <div className="w-24 h-1 portfolio-gradient mx-auto rounded-full"></div>
        </div>

        <div className="card-gradient rounded-2xl p-8 md:p-12 card-shadow border border-border/50">
          <div className="text-center mb-8">
            {/* Profile Image */}
            <div className="mb-6 flex justify-center">
              <img 
                src="/lovable-uploads/34ae2017-a2ea-4400-85e5-658d260f52c6.png" 
                alt="Divya Yelmakanne"
                className="w-48 h-60 object-cover rounded-2xl border-4 border-primary/20 glow-shadow transition-smooth hover:scale-105"
              />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Let's Connect & Collaborate! 🚀
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, innovative projects, or just have a chat about technology and AI. Feel free to reach out!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Email */}
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-smooth group">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h4 className="font-semibold text-lg mb-2 text-primary">Email</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-muted-foreground hover:text-primary"
              >
                <a href="mailto:divyayelmakanne@gmail.com">
                  divyayelmakanne@gmail.com
                </a>
              </Button>
            </div>

            {/* LinkedIn */}
            <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20 hover:border-accent/40 transition-smooth group">
              <Linkedin className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h4 className="font-semibold text-lg mb-2 text-accent">LinkedIn</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-muted-foreground hover:text-accent"
              >
                <a href="https://www.linkedin.com/in/divya-yelmakanne/" target="_blank" rel="noopener noreferrer">
                  Professional Profile
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-6 rounded-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-smooth group">
              <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h4 className="font-semibold text-lg mb-2 text-green-500">WhatsApp</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-muted-foreground hover:text-green-500"
              >
                <a href="https://wa.me/916303373212" target="_blank" rel="noopener noreferrer">
                  Chat with me
                </a>
              </Button>
            </div>

            {/* GitHub */}
            <div className="text-center p-6 rounded-xl bg-primary-glow/5 border border-primary-glow/20 hover:border-primary-glow/40 transition-smooth group">
              <Github className="h-8 w-8 text-primary-glow mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <h4 className="font-semibold text-lg mb-2 text-primary-glow">GitHub</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className="text-muted-foreground hover:text-primary-glow"
              >
                <a href="https://github.com/divyaYelmakanne" target="_blank" rel="noopener noreferrer">
                  View Projects
                </a>
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="portfolio-gradient hover:opacity-90 text-white glow-shadow"
            >
              <a href="mailto:divyayelmakanne@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="hover:border-primary hover:bg-primary/10"
            >
              <a href="https://www.linkedin.com/in/divya-yelmakanne/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Open to opportunities in{' '}
            <span className="text-primary font-semibold">AI</span>,{' '}
            <span className="text-accent font-semibold">Web Development</span>,{' '}
            and <span className="text-primary-glow font-semibold">Tech Innovation</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;