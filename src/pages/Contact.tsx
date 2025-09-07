import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Globe,
  Calendar,
  User,
  Building
} from "lucide-react";

export default function Contact() {
  const [language] = useState<'en' | 'fr'>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
  });
  const { toast } = useToast();

  const services = [
    { value: 'web', label: language === 'fr' ? 'Développement Web' : 'Web Development' },
    { value: 'mobile', label: language === 'fr' ? 'Applications Mobiles' : 'Mobile Applications' },
    { value: 'ai', label: language === 'fr' ? 'Solutions IA' : 'AI Solutions' },
    { value: 'transformation', label: language === 'fr' ? 'Transformation Digitale' : 'Digital Transformation' },
    { value: 'consulting', label: language === 'fr' ? 'Consulting' : 'Consulting' },
    { value: 'maintenance', label: language === 'fr' ? 'Maintenance & Support' : 'Maintenance & Support' }
  ];

  const budgetRanges = [
    { value: '300dt-500dt', label: '300dt - 500dt' },
    { value: '500dt-750dt', label: '500dt - 750dt' },
    { value: '750dt-1000dt', label: '750dt - 1000dt' },
    { value: '1000dt+', label: language === 'fr' ? '1000dt+' : '1000dt+' },
    { value: 'discuss', label: language === 'fr' ? 'À discuter' : 'To be discussed' }
  ];

  const timelines = [
    { value: 'urgent', label: language === 'fr' ? 'Urgent (< 1 mois)' : 'Urgent (< 1 month)' },
    { value: '1-3months', label: language === 'fr' ? '1-3 mois' : '1-3 months' },
    { value: '3-6months', label: language === 'fr' ? '3-6 mois' : '3-6 months' },
    { value: '6months+', label: language === 'fr' ? '6+ mois' : '6+ months' },
    { value: 'flexible', label: language === 'fr' ? 'Flexible' : 'Flexible' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_f1yrzi2",   // replace with your EmailJS service ID
      "template_gah245f",  // replace with your template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        preferredContact: formData.preferredContact,
      },
      "vR3OXrv5uKSrktakG"    // replace with your EmailJS public key
    );

    toast({
      title: language === 'fr' ? "Message envoyé !" : "Message sent!",
      description: language === 'fr' 
        ? "Nous vous répondrons dans les plus brefs délais."
        : "We will get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      preferredContact: 'email'
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast({
      title: language === 'fr' ? "Erreur" : "Error",
      description: language === 'fr' 
        ? "Une erreur s'est produite. Veuillez réessayer."
        : "An error occurred. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
  const contactInfo = [
    {
      icon: Mail,
      title: language === 'fr' ? 'Email' : 'Email',
      value: 'contact@tuniscaling.com',
      description: language === 'fr' ? 'Pour toute demande générale' : 'For general inquiries',
      link: 'mailto:contact@tuniscaling.com'
    },
    {
      icon: Phone,
      title: language === 'fr' ? 'Téléphone' : 'Phone',
      value: '+216 25 021 538',
      description: language === 'fr' ? 'Lun-Ven, 9h-18h' : 'Mon-Fri, 9AM-6PM',
      link: 'tel:+21625021538'
    },
    {
      icon: MapPin,
      title: language === 'fr' ? 'Adresse' : 'Address',
      value: 'Tunis, Tunisia',
      description: language === 'fr' ? 'Centre-ville de Tunis' : 'Downtown Tunis',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: language === 'fr' ? 'Horaires' : 'Hours',
      value: language === 'fr' ? 'Lun-Ven: 9h-18h' : 'Mon-Fri: 9AM-6PM',
      description: language === 'fr' ? 'Support 24/7 disponible' : '24/7 support available',
      link: null
    }
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: language === 'fr' ? 'Réponse rapide' : 'Quick Response',
      description: language === 'fr' ? 'Réponse sous 24h garantie' : '24h response guaranteed'
    },
    {
      icon: User,
      title: language === 'fr' ? 'Conseil personnalisé' : 'Personalized Advice',
      description: language === 'fr' ? 'Solution adaptée à vos besoins' : 'Solution tailored to your needs'
    },
    {
      icon: Calendar,
      title: language === 'fr' ? 'Consultation gratuite' : 'Free Consultation',
      description: language === 'fr' ? 'Premier échange sans engagement' : 'First exchange without commitment'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              {language === 'fr' ? '💬 Contactez-nous' : '💬 Contact Us'}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              {language === 'fr' 
                ? 'Transformons ensemble votre vision en réalité'
                : 'Let\'s transform your vision into reality together'
              }
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Prêt à démarrer votre projet ? Contactez notre équipe d\'experts pour une consultation gratuite et personnalisée'
                : 'Ready to start your project? Contact our team of experts for a free and personalized consultation'
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-brand-navy hover:bg-white/90 font-semibold" asChild>
                <a href="#contact-form">
                  {language === 'fr' ? 'Demander un devis' : 'Get a Quote'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="mailto:contact@tuniscaling.com">
                  {language === 'fr' ? 'Envoyer un email' : 'Send Email'}
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Informations de Contact' : 'Contact Information'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Plusieurs façons de nous joindre'
                : 'Multiple ways to reach us'
              }
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-brand transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-brand-navy mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-accent mb-2">
                    {info.value}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {info.description}
                  </p>
                  {info.link && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {language === 'fr' ? 'Contacter' : 'Contact'}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-heading text-brand-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {language === 'fr' ? 'Formulaire de Contact' : 'Contact Form'}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
                {language === 'fr' 
                  ? 'Parlez-nous de votre projet'
                  : 'Tell us about your project'
                }
              </h2>
              <p className="text-xl text-muted-foreground">
                {language === 'fr'
                  ? 'Plus vous nous en direz, mieux nous pourrons vous aider'
                  : 'The more you tell us, the better we can help you'
                }
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-heading text-brand-navy flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-accent" />
                  {language === 'fr' ? 'Demande de devis personnalisé' : 'Personalized quote request'}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        {language === 'fr' ? 'Prénom *' : 'First Name *'}
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        placeholder={language === 'fr' ? 'Votre prénom' : 'Your first name'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        {language === 'fr' ? 'Nom *' : 'Last Name *'}
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        placeholder={language === 'fr' ? 'Votre nom' : 'Your last name'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {language === 'fr' ? 'Email *' : 'Email *'}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {language === 'fr' ? 'Téléphone' : 'Phone'}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      {language === 'fr' ? 'Entreprise' : 'Company'}
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder={language === 'fr' ? 'Nom de votre entreprise' : 'Your company name'}
                    />
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">
                        {language === 'fr' ? 'Service souhaité *' : 'Desired Service *'}
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'fr' ? 'Sélectionnez un service' : 'Select a service'} />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">
                        {language === 'fr' ? 'Budget estimé' : 'Estimated Budget'}
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder={language === 'fr' ? 'Sélectionnez votre budget' : 'Select your budget'} />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget.value} value={budget.value}>
                              {budget.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">
                      {language === 'fr' ? 'Délais souhaités' : 'Desired Timeline'}
                    </Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'fr' ? 'Quand souhaitez-vous commencer ?' : 'When would you like to start?'} />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline) => (
                          <SelectItem key={timeline.value} value={timeline.value}>
                            {timeline.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {language === 'fr' ? 'Décrivez votre projet *' : 'Describe your project *'}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      placeholder={language === 'fr' 
                        ? 'Décrivez en détail votre projet, vos objectifs, vos contraintes, etc.'
                        : 'Describe in detail your project, objectives, constraints, etc.'
                      }
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-brand hover:opacity-90 font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {language === 'fr' ? 'Envoyer ma demande' : 'Send My Request'}
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    {language === 'fr' 
                      ? 'En soumettant ce formulaire, vous acceptez d\'être contacté par notre équipe concernant votre projet.'
                      : 'By submitting this form, you agree to be contacted by our team regarding your project.'
                    }
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">
              {language === 'fr' 
                ? 'Réponses à vos questions'
                : 'Answers to your questions'
              }
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: language === 'fr' ? 'Quel est le délai moyen pour un projet ?' : 'What is the average timeline for a project?',
                answer: language === 'fr' 
                  ? 'Cela dépend de la complexité. Un site web simple : 2-4 semaines. Une application complexe : 2-6 mois.'
                  : 'It depends on complexity. A simple website: 2-4 weeks. A complex application: 2-6 months.'
              },
              {
                question: language === 'fr' ? 'Proposez-vous un support après livraison ?' : 'Do you offer support after delivery?',
                answer: language === 'fr'
                  ? 'Oui, nous offrons un support technique et de la maintenance continue pour tous nos projets.'
                  : 'Yes, we offer technical support and ongoing maintenance for all our projects.'
              },
              {
                question: language === 'fr' ? 'Travaillez-vous avec des clients internationaux ?' : 'Do you work with international clients?',
                answer: language === 'fr'
                  ? 'Absolument ! Nous collaborons avec des clients en Europe, Afrique et au Moyen-Orient.'
                  : 'Absolutely! We collaborate with clients in Europe, Africa and the Middle East.'
              },
              {
                question: language === 'fr' ? 'Comment se déroule le processus de développement ?' : 'How does the development process work?',
                answer: language === 'fr'
                  ? 'Analyse → Conception → Développement → Tests → Livraison → Support continu.'
                  : 'Analysis → Design → Development → Testing → Delivery → Ongoing Support.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold font-heading text-brand-navy mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}