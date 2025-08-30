import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Bot, 
  TrendingUp, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const [language] = useState<'en' | 'fr'>('en');

  const mainServices = [
    {
      icon: Code,
      title: language === 'fr' ? 'Développement Web' : 'Web Development',
      description: language === 'fr' 
        ? 'Création de sites web modernes, applications web sur mesure et solutions e-commerce performantes'
        : 'Creating modern websites, custom web applications and high-performance e-commerce solutions',
      features: [
        language === 'fr' ? 'Sites web responsifs' : 'Responsive websites',
        language === 'fr' ? 'Applications web complexes' : 'Complex web applications',
        language === 'fr' ? 'E-commerce avancé' : 'Advanced e-commerce',
        language === 'fr' ? 'CMS personnalisés' : 'Custom CMS',
        language === 'fr' ? 'Optimisation SEO' : 'SEO optimization',
        language === 'fr' ? 'Performance optimisée' : 'Performance optimization'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      startingPrice: language === 'fr' ? 'À partir de 1500€' : 'Starting from €1500'
    },
    {
      icon: Smartphone,
      title: language === 'fr' ? 'Applications Mobiles' : 'Mobile Applications',
      description: language === 'fr'
        ? 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android'
        : 'Development of native and cross-platform mobile applications for iOS and Android',
      features: [
        language === 'fr' ? 'Applications natives iOS/Android' : 'Native iOS/Android apps',
        language === 'fr' ? 'Applications cross-platform' : 'Cross-platform apps',
        language === 'fr' ? 'Interface utilisateur intuitive' : 'Intuitive user interface',
        language === 'fr' ? 'Intégrations API' : 'API integrations',
        language === 'fr' ? 'Notifications push' : 'Push notifications',
        language === 'fr' ? 'Synchronisation cloud' : 'Cloud synchronization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'MongoDB'],
      startingPrice: language === 'fr' ? 'À partir de 3000€' : 'Starting from €3000'
    },
    {
      icon: Bot,
      title: language === 'fr' ? 'Solutions IA' : 'AI Solutions',
      description: language === 'fr'
        ? 'Intégration de solutions d\'intelligence artificielle pour automatiser et optimiser vos processus'
        : 'Integration of artificial intelligence solutions to automate and optimize your processes',
      features: [
        language === 'fr' ? 'Chatbots intelligents' : 'Intelligent chatbots',
        language === 'fr' ? 'Analyse de données' : 'Data analysis',
        language === 'fr' ? 'Automatisation de processus' : 'Process automation',
        language === 'fr' ? 'Vision par ordinateur' : 'Computer vision',
        language === 'fr' ? 'Traitement du langage naturel' : 'Natural language processing',
        language === 'fr' ? 'Machine Learning' : 'Machine Learning'
      ],
      technologies: ['OpenAI', 'TensorFlow', 'Python', 'Langchain', 'Hugging Face', 'Azure AI'],
      startingPrice: language === 'fr' ? 'À partir de 2500€' : 'Starting from €2500'
    },
    {
      icon: TrendingUp,
      title: language === 'fr' ? 'Transformation Digitale' : 'Digital Transformation',
      description: language === 'fr'
        ? 'Accompagnement complet dans la modernisation de vos processus métier et stratégies digitales'
        : 'Complete support in modernizing your business processes and digital strategies',
      features: [
        language === 'fr' ? 'Audit digital complet' : 'Complete digital audit',
        language === 'fr' ? 'Stratégie de digitalisation' : 'Digitalization strategy',
        language === 'fr' ? 'Migration cloud' : 'Cloud migration',
        language === 'fr' ? 'Intégration de systèmes' : 'System integration',
        language === 'fr' ? 'Formation équipes' : 'Team training',
        language === 'fr' ? 'Support continu' : 'Continuous support'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps', 'CI/CD'],
      startingPrice: language === 'fr' ? 'Sur devis' : 'On quote'
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: language === 'fr' ? 'Consulting Digital' : 'Digital Consulting',
      description: language === 'fr' 
        ? 'Conseils stratégiques pour votre transformation digitale'
        : 'Strategic advice for your digital transformation'
    },
    {
      icon: Database,
      title: language === 'fr' ? 'Architecture de Données' : 'Data Architecture',
      description: language === 'fr' 
        ? 'Conception et optimisation de vos bases de données'
        : 'Design and optimization of your databases'
    },
    {
      icon: Shield,
      title: language === 'fr' ? 'Sécurité & Conformité' : 'Security & Compliance',
      description: language === 'fr' 
        ? 'Sécurisation de vos applications et mise en conformité'
        : 'Securing your applications and compliance'
    },
    {
      icon: Zap,
      title: language === 'fr' ? 'Optimisation Performance' : 'Performance Optimization',
      description: language === 'fr' 
        ? 'Amélioration des performances de vos applications existantes'
        : 'Improving performance of your existing applications'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              {language === 'fr' ? '🛠️ Nos Services' : '🛠️ Our Services'}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              {language === 'fr' 
                ? 'Services sur mesure pour votre croissance digitale'
                : 'Tailored services for your digital growth'
              }
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'De la conception à la mise en production, nous transformons vos idées en solutions technologiques performantes'
                : 'From design to production, we transform your ideas into high-performance technological solutions'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Services Principaux' : 'Main Services'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Notre expertise à votre service'
                : 'Our expertise at your service'
              }
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-lg hover:shadow-brand transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-heading text-brand-navy mb-2">
                        {service.title}
                      </CardTitle>
                      <div className="text-sm font-medium text-accent">
                        {service.startingPrice}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-brand-navy mb-3">
                      {language === 'fr' ? 'Fonctionnalités incluses :' : 'Included features:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-navy mb-3">
                      {language === 'fr' ? 'Technologies utilisées :' : 'Technologies used:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-brand hover:opacity-90" asChild>
                    <Link to="/contact">
                      {language === 'fr' ? 'Demander un devis' : 'Get a Quote'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Services Complémentaires' : 'Additional Services'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Services d\'accompagnement'
                : 'Supporting services'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Des services complémentaires pour optimiser et sécuriser vos projets digitaux'
                : 'Complementary services to optimize and secure your digital projects'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-brand-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Notre Processus' : 'Our Process'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Comment nous travaillons'
                : 'How we work'
              }
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: language === 'fr' ? 'Analyse' : 'Analysis',
                description: language === 'fr' ? 'Compréhension de vos besoins et objectifs' : 'Understanding your needs and objectives'
              },
              {
                step: "02",
                title: language === 'fr' ? 'Conception' : 'Design',
                description: language === 'fr' ? 'Création des maquettes et architecture technique' : 'Creating mockups and technical architecture'
              },
              {
                step: "03",
                title: language === 'fr' ? 'Développement' : 'Development',
                description: language === 'fr' ? 'Développement et tests de votre solution' : 'Development and testing of your solution'
              },
              {
                step: "04",
                title: language === 'fr' ? 'Livraison' : 'Delivery',
                description: language === 'fr' ? 'Mise en production et accompagnement' : 'Production deployment and support'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold font-heading text-brand-navy mb-2">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </div>
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
                ? 'Prêt à démarrer votre projet ?'
                : 'Ready to start your project?'
              }
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé gratuit'
                : 'Contact us to discuss your needs and get a free personalized quote'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 font-semibold" asChild>
                <Link to="/contact">
                  {language === 'fr' ? 'Demander un devis' : 'Get a Quote'}
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
    </div>
  );
}