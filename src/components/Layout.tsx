import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fr' | 'en'>('en');
  const location = useLocation();

  const navigation = [
    { name: language === 'fr' ? 'Accueil' : 'Home', href: '/' },
    { name: language === 'fr' ? 'Services' : 'Services', href: '/services' },
    { name: language === 'fr' ? 'Portfolio' : 'Portfolio', href: '/portfolio' },
    { name: language === 'fr' ? 'À propos' : 'About', href: '/about' },
    { name: language === 'fr' ? 'Contact' : 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/87c2d9d0-c576-412f-94ea-9000707424c4.png" 
                alt="TuniScaling Logo" 
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium">{language.toUpperCase()}</span>
              </Button>
              <Button variant="default" size="sm" asChild>
                <Link to="/contact">
                  {language === 'fr' ? 'Demander un devis' : 'Get Quote'}
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-accent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-medium">{language.toUpperCase()}</span>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/contact">
                    {language === 'fr' ? 'Demander un devis' : 'Get Quote'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/87c2d9d0-c576-412f-94ea-9000707424c4.png" 
                alt="TuniScaling Logo" 
                className="h-8 w-auto"
              />
              <p className="text-sm text-muted-foreground">
                {language === 'fr' 
                  ? 'Transformez votre entreprise avec nos solutions technologiques innovantes.'
                  : 'Transform your business with our innovative technology solutions.'
                }
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">
                {language === 'fr' ? 'Services' : 'Services'}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{language === 'fr' ? 'Développement Web' : 'Web Development'}</li>
                <li>{language === 'fr' ? 'Applications Mobiles' : 'Mobile Apps'}</li>
                <li>{language === 'fr' ? 'Solutions IA' : 'AI Solutions'}</li>
                <li>{language === 'fr' ? 'Transformation Digitale' : 'Digital Transformation'}</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@tuniscaling.com</li>
                <li>+216 XX XXX XXX</li>
                <li>Tunis, Tunisia</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">
                {language === 'fr' ? 'Légal' : 'Legal'}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/privacy" className="hover:text-accent transition-colors">
                    {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-accent transition-colors">
                    {language === 'fr' ? 'Conditions' : 'Terms of Service'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 TuniScaling. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  );
}