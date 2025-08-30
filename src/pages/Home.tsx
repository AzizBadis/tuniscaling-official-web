import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Smartphone, Bot, TrendingUp, CheckCircle, Star, Users, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [language] = useState<'en' | 'fr'>('en');

  const services = [
    {
      icon: Code,
      title: language === 'fr' ? 'Développement Web' : 'Web Development',
      description: language === 'fr' 
        ? 'Sites web modernes, applications web sur mesure et e-commerce performants'
        : 'Modern websites, custom web applications and high-performance e-commerce',
      features: language === 'fr' 
        ? ['React/Next.js', 'Responsive Design', 'SEO Optimized'] 
        : ['React/Next.js', 'Responsive Design', 'SEO Optimized']
    },
    {
      icon: Smartphone,
      title: language === 'fr' ? 'Applications Mobiles' : 'Mobile Applications',
      description: language === 'fr'
        ? 'Applications iOS et Android natives et cross-platform avec React Native'
        : 'Native and cross-platform iOS and Android apps with React Native',
      features: language === 'fr'
        ? ['iOS & Android', 'React Native', 'UI/UX Excellence']
        : ['iOS & Android', 'React Native', 'UI/UX Excellence']
    },
    {
      icon: Bot,
      title: language === 'fr' ? 'Solutions IA' : 'AI Solutions',
      description: language === 'fr'
        ? 'Chatbots intelligents, automatisation et analyse de données avancée'
        : 'Intelligent chatbots, automation and advanced data analysis',
      features: language === 'fr'
        ? ['Chatbots IA', 'Automatisation', 'Analyse de données']
        : ['AI Chatbots', 'Automation', 'Data Analysis']
    },
    {
      icon: TrendingUp,
      title: language === 'fr' ? 'Transformation Digitale' : 'Digital Transformation',
      description: language === 'fr'
        ? 'Modernisation des processus métier et stratégies digitales innovantes'
        : 'Business process modernization and innovative digital strategies',
      features: language === 'fr'
        ? ['Stratégie digitale', 'Optimisation', 'Intégration']
        : ['Digital Strategy', 'Optimization', 'Integration']
    }
  ];

  const stats = [
    { 
      icon: Users, 
      number: "50+", 
      label: language === 'fr' ? 'Clients Satisfaits' : 'Happy Clients' 
    },
    { 
      icon: Award, 
      number: "100+", 
      label: language === 'fr' ? 'Projets Réalisés' : 'Projects Completed' 
    },
    { 
      icon: Star, 
      number: "5.0", 
      label: language === 'fr' ? 'Note Moyenne' : 'Average Rating' 
    },
    { 
      icon: Zap, 
      number: "24/7", 
      label: language === 'fr' ? 'Support Client' : 'Customer Support' 
    }
  ];

  const technologies = [
    'React', 'React Native', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 
    'PostgreSQL', 'AWS', 'Docker', 'TensorFlow', 'OpenAI', 'Firebase'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              {language === 'fr' ? '🚀 Solutions Technologiques Innovantes' : '🚀 Innovative Technology Solutions'}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 animate-fade-in">
              {language === 'fr' ? (
                <>Transformez votre <span className="text-gradient">entreprise</span> avec TuniScaling</>
              ) : (
                <>Transform your <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text">business</span> with TuniScaling</>
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {language === 'fr'
                ? 'Spécialistes en développement web, applications mobiles et solutions IA pour propulser votre croissance digitale'
                : 'Specialists in web development, mobile applications and AI solutions to accelerate your digital growth'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 font-semibold" asChild>
                <Link to="/contact">
                  {language === 'fr' ? 'Demander un devis gratuit' : 'Get Free Quote'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/portfolio">
                  {language === 'fr' ? 'Voir nos réalisations' : 'View Our Work'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold font-heading text-brand-navy mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Nos Services' : 'Our Services'}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Solutions complètes pour votre succès digital'
                : 'Complete solutions for your digital success'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? 'De la conception à la mise en production, nous accompagnons vos projets avec expertise et innovation'
                : 'From design to production, we support your projects with expertise and innovation'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-md hover:shadow-brand transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-3 text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Technologies' : 'Technologies'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Technologies de pointe que nous maîtrisons'
                : 'Cutting-edge technologies we master'
              }
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-accent/10 transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              {language === 'fr' 
                ? 'Prêt à transformer votre vision en réalité ?'
                : 'Ready to transform your vision into reality?'
              }
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Contactez-nous dès maintenant pour discuter de votre projet et obtenir un devis personnalisé gratuit'
                : 'Contact us now to discuss your project and get a free personalized quote'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 font-semibold" asChild>
                <Link to="/contact">
                  {language === 'fr' ? 'Commencer mon projet' : 'Start My Project'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/about">
                  {language === 'fr' ? 'Découvrir notre équipe' : 'Meet Our Team'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}