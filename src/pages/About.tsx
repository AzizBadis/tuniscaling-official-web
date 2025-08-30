import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  ArrowRight,
  MapPin,
  Calendar,
  Linkedin,
  Github,
  Twitter
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [language] = useState<'en' | 'fr'>('en');

  const values = [
    {
      icon: Lightbulb,
      title: language === 'fr' ? 'Innovation' : 'Innovation',
      description: language === 'fr' 
        ? 'Nous restons à la pointe des technologies pour offrir des solutions avant-gardistes'
        : 'We stay at the forefront of technology to deliver cutting-edge solutions'
    },
    {
      icon: Heart,
      title: language === 'fr' ? 'Qualité' : 'Quality',
      description: language === 'fr'
        ? 'Chaque projet est traité avec le plus grand soin et les plus hauts standards'
        : 'Every project is handled with the utmost care and highest standards'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Collaboration' : 'Collaboration',
      description: language === 'fr'
        ? 'Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs'
        : 'We work closely with our clients to achieve their goals'
    },
    {
      icon: Target,
      title: language === 'fr' ? 'Résultats' : 'Results',
      description: language === 'fr'
        ? 'Notre focus sur les résultats mesurables garantit le succès de vos projets'
        : 'Our focus on measurable results ensures the success of your projects'
    }
  ];

  const team = [
    {
      name: "Ahmed Ben Salem",
      role: language === 'fr' ? 'CEO & Fondateur' : 'CEO & Founder',
      bio: language === 'fr' 
        ? 'Expert en transformation digitale avec plus de 8 ans d\'expérience dans le développement de solutions technologiques innovantes.'
        : 'Digital transformation expert with over 8 years of experience in developing innovative technology solutions.',
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/ahmed-ben-salem",
      github: "https://github.com/ahmed-ben-salem",
      twitter: "https://twitter.com/ahmed_bs"
    },
    {
      name: "Leila Trabelsi", 
      role: language === 'fr' ? 'Directrice Technique' : 'Technical Director',
      bio: language === 'fr'
        ? 'Spécialiste en architecture logicielle et intelligence artificielle. Lead technique sur nos projets les plus complexes.'
        : 'Software architecture and artificial intelligence specialist. Technical lead on our most complex projects.',
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/leila-trabelsi",
      github: "https://github.com/leila-trabelsi"
    },
    {
      name: "Mohamed Khaled",
      role: language === 'fr' ? 'Lead Développeur Mobile' : 'Lead Mobile Developer', 
      bio: language === 'fr'
        ? 'Expert en développement mobile avec une passion pour les interfaces utilisateur exceptionnelles et les performances optimales.'
        : 'Mobile development expert with a passion for exceptional user interfaces and optimal performance.',
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/mohamed-khaled",
      github: "https://github.com/mohamed-khaled"
    },
    {
      name: "Fatma Bouali",
      role: language === 'fr' ? 'Experte IA & Data Science' : 'AI & Data Science Expert',
      bio: language === 'fr'
        ? 'Docteure en Intelligence Artificielle, spécialisée dans le machine learning et l\'analyse de données complexes.'
        : 'PhD in Artificial Intelligence, specialized in machine learning and complex data analysis.',
      image: "/api/placeholder/300/300",
      linkedin: "https://linkedin.com/in/fatma-bouali",
      github: "https://github.com/fatma-bouali"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: language === 'fr' ? 'Création de TuniScaling' : 'TuniScaling Founded',
      description: language === 'fr' 
        ? 'Lancement de notre agence avec une vision claire : démocratiser l\'accès aux technologies avancées'
        : 'Launch of our agency with a clear vision: democratize access to advanced technologies'
    },
    {
      year: "2021", 
      title: language === 'fr' ? 'Premiers succès' : 'First Successes',
      description: language === 'fr'
        ? '25 projets livrés avec succès et établissement de partenariats stratégiques durables'
        : '25 successfully delivered projects and establishment of lasting strategic partnerships'
    },
    {
      year: "2022",
      title: language === 'fr' ? 'Expansion des services' : 'Service Expansion',
      description: language === 'fr'
        ? 'Intégration de l\'intelligence artificielle et des solutions d\'automatisation à notre offre'
        : 'Integration of artificial intelligence and automation solutions into our offering'
    },
    {
      year: "2023",
      title: language === 'fr' ? 'Reconnaissance internationale' : 'International Recognition',
      description: language === 'fr'
        ? 'Expansion vers les marchés européens et reconnaissance comme leader technologique régional'
        : 'Expansion to European markets and recognition as a regional technology leader'
    },
    {
      year: "2024",
      title: language === 'fr' ? 'Innovation continue' : 'Continuous Innovation',
      description: language === 'fr'
        ? '100+ projets livrés, équipe de 15+ experts et lancement de nouvelles solutions IA'
        : '100+ delivered projects, team of 15+ experts and launch of new AI solutions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              {language === 'fr' ? '👥 Notre Histoire' : '👥 Our Story'}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              {language === 'fr' 
                ? 'L\'équipe qui transforme vos idées en succès'
                : 'The team that transforms your ideas into success'
              }
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Découvrez l\'histoire de TuniScaling, notre mission et l\'équipe passionnée qui donne vie à vos projets digitaux'
                : 'Discover the story of TuniScaling, our mission and the passionate team that brings your digital projects to life'
              }
            </p>

            <div className="flex items-center justify-center space-x-6 text-white/80">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Tunis, Tunisia</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{language === 'fr' ? 'Fondée en 2020' : 'Founded in 2020'}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>15+ {language === 'fr' ? 'Experts' : 'Experts'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <Card className="border-0 shadow-lg hover:shadow-brand transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-brand-navy mb-4">
                  {language === 'fr' ? 'Notre Mission' : 'Our Mission'}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {language === 'fr'
                    ? 'Accompagner les entreprises dans leur transformation digitale en créant des solutions technologiques innovantes qui génèrent une croissance durable et un avantage concurrentiel réel.'
                    : 'Support companies in their digital transformation by creating innovative technological solutions that generate sustainable growth and real competitive advantage.'
                  }
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg hover:shadow-brand transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-brand-navy mb-4">
                  {language === 'fr' ? 'Notre Vision' : 'Our Vision'}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {language === 'fr'
                    ? 'Devenir le partenaire technologique de référence en Afrique du Nord, reconnu pour l\'excellence de nos solutions et notre capacité à anticiper les besoins futurs du marché.'
                    : 'Become the leading technology partner in North Africa, recognized for the excellence of our solutions and our ability to anticipate future market needs.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Les principes qui nous guident'
                : 'The principles that guide us'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Ces valeurs fondamentales façonnent notre approche et garantissent la qualité de nos services'
                : 'These core values shape our approach and guarantee the quality of our services'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover-lift transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-brand-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Notre Parcours' : 'Our Journey'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'L\'évolution de TuniScaling'
                : 'The evolution of TuniScaling'
              }
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-brand"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-brand transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold font-heading text-accent mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold font-heading text-brand-navy mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Notre Équipe' : 'Our Team'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Les experts qui concrétisent vos projets'
                : 'The experts who bring your projects to life'
              }
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Une équipe multidisciplinaire de passionnés, chacun expert dans son domaine'
                : 'A multidisciplinary team of passionate experts, each expert in their field'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-brand transition-all duration-300 overflow-hidden">
                {/* Member Image */}
                <div className="aspect-square bg-gradient-brand/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-brand/20 flex items-center justify-center">
                    <Users className="h-20 w-20 text-brand-navy/40" />
                  </div>
                </div>

                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold font-heading text-brand-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.twitter && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4" />
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
                ? 'Prêt à rejoindre l\'aventure TuniScaling ?'
                : 'Ready to join the TuniScaling adventure?'
              }
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Découvrez comment notre équipe peut transformer votre vision en réalité technologique'
                : 'Discover how our team can transform your vision into technological reality'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 font-semibold" asChild>
                <Link to="/contact">
                  {language === 'fr' ? 'Parlons de votre projet' : 'Let\'s Talk About Your Project'}
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