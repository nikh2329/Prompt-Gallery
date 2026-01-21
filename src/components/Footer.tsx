import { Github, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="mb-4 flex items-center gap-2">
              <img src={logo} alt="PromptVault" className="h-9 w-9 rounded-lg" />
              <span className="text-xl font-bold text-foreground">PromptVault</span>
            </a>
            <p className="mb-6 max-w-sm text-sm text-muted-foreground">
              Discover and share the best AI prompts for image generation. Curated prompts for Midjourney, DALL·E, Stable Diffusion, and more.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="glow-border flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="glow-border flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Prompt Guide
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PromptVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
