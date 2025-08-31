import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  Bot, 
  Code,
  TrendingUp,
  Calendar,
  Users,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [language] = useState<'en' | 'fr'>('en');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: language === 'fr' ? 'Tous les projets' : 'All Projects' },
    { id: 'web', name: language === 'fr' ? 'Développement Web' : 'Web Development' },
    { id: 'mobile', name: language === 'fr' ? 'Applications Mobiles' : 'Mobile Apps' },
    { id: 'ai', name: language === 'fr' ? 'Solutions IA' : 'AI Solutions' },
    { id: 'transformation', name: language === 'fr' ? 'Transformation Digitale' : 'Digital Transformation' }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform ModernShop",
      titleFr: "Plateforme E-commerce ModernShop",
      category: 'web',
      client: "RetailTech Solutions",
      year: "2024",
      duration: language === 'fr' ? "3 mois" : "3 months",
      description: language === 'fr' 
        ? "Développement d'une plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et interface administrateur avancée."
        : "Development of a complete e-commerce platform with inventory management, secure payments and advanced admin interface.",
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: language === 'fr' 
        ? ['Interface utilisateur moderne', 'Paiements sécurisés', 'Gestion des stocks', 'Analytics avancées', 'SEO optimisé']
        : ['Modern user interface', 'Secure payments', 'Inventory management', 'Advanced analytics', 'SEO optimized'],
      results: language === 'fr'
        ? ['Augmentation de 45% des ventes', 'Temps de chargement réduit de 60%', 'Taux de conversion +30%']
        : ['45% increase in sales', '60% faster loading time', '+30% conversion rate'],
      image: "/api/placeholder/600/400",
      link: "https://modernshop.demo",
      github: "https://github.com/tuniscaling/modernshop"
    },
    {
      id: 2,
      title: "FitTracker Mobile App",
      titleFr: "Application Mobile FitTracker",
      category: 'mobile',
      client: "HealthTech Innovations",
      year: "2024",
      duration: language === 'fr' ? "4 mois" : "4 months",
      description: language === 'fr'
        ? "Application mobile de fitness avec suivi d'activités, plans d'entraînement personnalisés et intégration avec appareils connectés."
        : "Fitness mobile application with activity tracking, personalized workout plans and connected device integration.",
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit'],
      features: language === 'fr'
        ? ['Suivi GPS', 'Plans personnalisés', 'Synchronisation appareils', 'Communauté sociale', 'Notifications push']
        : ['GPS tracking', 'Personalized plans', 'Device sync', 'Social community', 'Push notifications'],
      results: language === 'fr'
        ? ['50k+ téléchargements', 'Note 4.8/5 sur les stores', 'Engagement utilisateur +85%']
        : ['50k+ downloads', '4.8/5 store rating', '+85% user engagement'],
      image: "/api/placeholder/600/400",
      link: "https://fittracker.demo",
      github: "https://github.com/tuniscaling/fittracker"
    },
    {
      id: 3,
      title: "AI Customer Support Chatbot",
      titleFr: "Chatbot IA Support Client",
      category: 'ai',
      client: "ServiceFirst Corp",
      year: "2024",
      duration: language === 'fr' ? "2 mois" : "2 months",
      description: language === 'fr'
        ? "Chatbot intelligent avec traitement du langage naturel pour automatiser le support client et réduire les temps de réponse."
        : "Intelligent chatbot with natural language processing to automate customer support and reduce response times.",
      technologies: ['OpenAI GPT-4', 'Python', 'FastAPI', 'Vector DB', 'React'],
      features: language === 'fr'
        ? ['Compréhension contextuelle', 'Réponses multilingues', 'Intégration CRM', 'Analytics conversationnelles', 'Escalade humaine']
        : ['Contextual understanding', 'Multilingual responses', 'CRM integration', 'Conversation analytics', 'Human escalation'],
      results: language === 'fr'
        ? ['Temps de réponse réduit de 80%', 'Satisfaction client +40%', 'Coûts support -50%']
        : ['80% faster response time', '+40% customer satisfaction', '-50% support costs'],
      image: "/api/placeholder/600/400",
      link: "https://chatbot.demo",
      github: "https://github.com/tuniscaling/ai-chatbot"
    },
    {
      id: 4,
      title: "Digital Banking Transformation",
      titleFr: "Transformation Bancaire Digitale",
      category: 'transformation',
      client: "BankTech Solutions",
      year: "2023",
      duration: language === 'fr' ? "6 mois" : "6 months",
      description: language === 'fr'
        ? "Modernisation complète des systèmes bancaires avec migration cloud, nouvelles interfaces et intégration API."
        : "Complete modernization of banking systems with cloud migration, new interfaces and API integration.",
      technologies: ['Microservices', 'Kubernetes', 'Azure', 'React', 'API Gateway'],
      features: language === 'fr'
        ? ['Architecture microservices', 'Sécurité renforcée', 'APIs RESTful', 'Interface moderne', 'Monitoring avancé']
        : ['Microservices architecture', 'Enhanced security', 'RESTful APIs', 'Modern interface', 'Advanced monitoring'],
      results: language === 'fr'
        ? ['Performance +200%', 'Sécurité améliorée', 'Coûts infrastructure -40%']
        : ['+200% performance', 'Improved security', '-40% infrastructure costs'],
      image: "/api/placeholder/600/400",
      link: "https://banktech.demo"
    },
    {
      id: 5,
      title: "Smart Home IoT Platform",
      titleFr: "Plateforme IoT Maison Intelligente",
      category: 'web',
      client: "SmartTech Innovations",
      year: "2024",
      duration: language === 'fr' ? "5 mois" : "5 months",
      description: language === 'fr'
        ? "Plateforme de gestion d'objets connectés pour maisons intelligentes avec contrôle à distance et automatisation."
        : "Connected device management platform for smart homes with remote control and automation.",
      technologies: ['Vue.js', 'Node.js', 'MQTT', 'InfluxDB', 'Docker'],
      features: language === 'fr'
        ? ['Contrôle à distance', 'Automatisation', 'Analytics énergie', 'Sécurité avancée', 'Interface intuitive']
        : ['Remote control', 'Automation', 'Energy analytics', 'Advanced security', 'Intuitive interface'],
      results: language === 'fr'
        ? ['Économies énergie 30%', 'Adoption utilisateur 95%', 'Incidents sécurité 0']
        : ['30% energy savings', '95% user adoption', '0 security incidents'],
      image: "/api/placeholder/600/400",
      link: "https://smarthome.demo"
    },
    {
      id: 6,
      title: "AI-Powered Analytics Dashboard",
      titleFr: "Dashboard Analytics IA",
      category: 'ai',
      client: "DataInsights Pro",
      year: "2024",
      duration: language === 'fr' ? "3 mois" : "3 months",
      description: language === 'fr'
        ? "Dashboard d'analytics avancé avec intelligence artificielle pour l'analyse prédictive et visualisation de données complexes."
        : "Advanced analytics dashboard with artificial intelligence for predictive analysis and complex data visualization.",
      technologies: ['Python', 'TensorFlow', 'D3.js', 'PostgreSQL', 'Redis'],
      features: language === 'fr'
        ? ['Analyse prédictive', 'Visualisations interactives', 'Alertes intelligentes', 'Export automatique', 'API temps réel']
        : ['Predictive analysis', 'Interactive visualizations', 'Smart alerts', 'Automated exports', 'Real-time API'],
      results: language === 'fr'
        ? ['Précision prédiction 92%', 'Temps analyse -70%', 'Décisions data-driven +85%']
        : ['92% prediction accuracy', '-70% analysis time', '+85% data-driven decisions'],
      image: "/api/placeholder/600/400",
      link: "https://analytics.demo"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              {language === 'fr' ? '🚀 Notre Portfolio' : '🚀 Our Portfolio'}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              {language === 'fr' 
                ? 'Nos réalisations qui transforment les entreprises'
                : 'Our achievements that transform businesses'
              }
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Découvrez nos projets les plus récents et les résultats exceptionnels obtenus pour nos clients'
                : 'Discover our latest projects and the exceptional results achieved for our clients'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 font-semibold" asChild>
                <Link to="/contact">
                  {language === 'fr' ? 'Discuter de votre projet' : 'Discuss Your Project'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold font-heading text-brand-navy mb-2">100+</div>
              <div className="text-muted-foreground">{language === 'fr' ? 'Projets Livrés' : 'Projects Delivered'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-heading text-brand-navy mb-2">50+</div>
              <div className="text-muted-foreground">{language === 'fr' ? 'Clients Satisfaits' : 'Happy Clients'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-heading text-brand-navy mb-2">95%</div>
              <div className="text-muted-foreground">{language === 'fr' ? 'Taux de Satisfaction' : 'Satisfaction Rate'}</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-heading text-brand-navy mb-2">24/7</div>
              <div className="text-muted-foreground">{language === 'fr' ? 'Support Technique' : 'Technical Support'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Nos Projets' : 'Our Projects'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-8">
              {language === 'fr' 
                ? 'Explorez nos réalisations par catégorie'
                : 'Explore our achievements by category'
              }
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-gradient-brand" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group hover-lift border-0 shadow-lg hover:shadow-brand transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-brand/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-brand/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      {project.category === 'web' && <Code className="h-16 w-16 mx-auto mb-4 opacity-80" />}
                      {project.category === 'mobile' && <Smartphone className="h-16 w-16 mx-auto mb-4 opacity-80" />}
                      {project.category === 'ai' && <Bot className="h-16 w-16 mx-auto mb-4 opacity-80" />}
                      {project.category === 'transformation' && <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-80" />}
                      <p className="text-lg font-semibold">{language === 'fr' ? project.titleFr : project.title}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold font-heading text-brand-navy mb-1">
                        {language === 'fr' ? project.titleFr : project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {project.client}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.year}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.duration}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2 text-sm">
                      {language === 'fr' ? 'Technologies :' : 'Technologies:'}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2 text-sm">
                      {language === 'fr' ? 'Fonctionnalités clés :' : 'Key Features:'}
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-2 text-sm">
                      {language === 'fr' ? 'Résultats :' : 'Results:'}
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-accent">
                          <TrendingUp className="h-3 w-3 mr-2" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-border">
                    {project.link && (
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 mr-2" />
                          {language === 'fr' ? 'Voir le site' : 'View Site'}
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              {language === 'fr' 
                ? 'Votre projet sera le prochain succès ?'
                : 'Will your project be the next success?'
              }
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Rejoignez nos clients satisfaits et transformez votre vision en réalité'
                : 'Join our satisfied clients and transform your vision into reality'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 font-semibold" asChild>
                <Link to="/contact">
                  {language === 'fr' ? 'Démarrer mon projet' : 'Start My Project'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/services">
                  {language === 'fr' ? 'Voir nos services' : 'View Our Services'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}