import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Categories', href: '#categories' },
    { label: 'Favorites', href: '#' },
    { label: 'Submit', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <img src={logo} alt="PromptVault" className="h-9 w-9 rounded-lg" />
          <span className="text-xl font-bold tracking-tight">PromptVault</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Auth Button */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 transition-colors hover:bg-accent md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="animate-fade-in border-t border-border/40 bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border/40 pt-4">
              <Button variant="ghost" className="justify-start text-muted-foreground">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
