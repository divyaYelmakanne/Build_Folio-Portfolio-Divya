import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold portfolio-gradient bg-clip-text text-transparent mb-3">
              Divya Yelmakanne
            </h3>
            <p className="text-muted-foreground">
              Computer Science Student passionate about AI and Web Development
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block mx-auto text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4 text-foreground">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <Button variant="outline" size="icon" asChild className="hover:border-primary hover:bg-primary/10">
                <a href="https://github.com/divyaYelmakanne" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:border-accent hover:bg-accent/10">
                <a href="https://www.linkedin.com/in/divya-yelmakanne/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="hover:border-primary-glow hover:bg-primary-glow/10">
                <a href="mailto:divyayelmakanne@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Divya Yelmakanne. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and passion for tech
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;