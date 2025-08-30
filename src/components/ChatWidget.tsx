import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const predefinedQuestions = {
  en: [
    { id: 1, question: "What services do you provide?", answer: "We specialize in web development, mobile applications, AI solutions (chatbots, automation, data analysis), and digital transformation services to help businesses scale effectively." },
    { id: 2, question: "How can I get a quote?", answer: "You can get a quote by contacting us through our contact form, sending an email to contact@tuniscaling.com, or calling us directly. We'll discuss your project requirements and provide a detailed proposal." },
    { id: 3, question: "Do you also build mobile apps?", answer: "Yes! We develop native and cross-platform mobile applications for iOS and Android. Our mobile solutions are designed to provide excellent user experience and seamless performance." },
    { id: 4, question: "Can you integrate AI chatbots?", answer: "Absolutely! We specialize in AI integration including chatbots, automation systems, and data analysis tools. Our AI solutions can help streamline your business processes and improve customer engagement." },
    { id: 5, question: "What technologies do you use?", answer: "We work with modern technologies including React, React Native, Node.js, Python, AI/ML frameworks, and cloud platforms. We choose the best tech stack based on your project requirements." },
    { id: 6, question: "How long does a project typically take?", answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation." }
  ],
  fr: [
    { id: 1, question: "Quels services proposez-vous ?", answer: "Nous nous spécialisons dans le développement web, les applications mobiles, les solutions IA (chatbots, automatisation, analyse de données), et la transformation digitale pour aider les entreprises à se développer efficacement." },
    { id: 2, question: "Comment puis-je obtenir un devis ?", answer: "Vous pouvez obtenir un devis en nous contactant via notre formulaire de contact, en envoyant un email à contact@tuniscaling.com, ou en nous appelant directement. Nous discuterons de vos besoins et fournirons une proposition détaillée." },
    { id: 3, question: "Développez-vous aussi des applications mobiles ?", answer: "Oui ! Nous développons des applications mobiles natives et multiplateformes pour iOS et Android. Nos solutions mobiles sont conçues pour offrir une excellente expérience utilisateur et des performances optimales." },
    { id: 4, question: "Pouvez-vous intégrer des chatbots IA ?", answer: "Absolument ! Nous nous spécialisons dans l'intégration IA incluant les chatbots, systèmes d'automatisation, et outils d'analyse de données. Nos solutions IA peuvent optimiser vos processus et améliorer l'engagement client." },
    { id: 5, question: "Quelles technologies utilisez-vous ?", answer: "Nous travaillons avec des technologies modernes incluant React, React Native, Node.js, Python, frameworks IA/ML, et plateformes cloud. Nous choisissons la meilleure stack selon vos besoins." },
    { id: 6, question: "Combien de temps prend un projet typique ?", answer: "Les délais varient selon la complexité. Un site simple peut prendre 2-4 semaines, tandis que les applications complexes peuvent prendre 2-6 mois. Nous fournissons des délais détaillés lors de notre consultation initiale." }
  ]
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 0,
        text: language === 'fr' 
          ? "Bonjour ! Comment puis-je vous aider aujourd'hui ? Choisissez une question ci-dessous ou posez la vôtre."
          : "Hello! How can I help you today? Choose a question below or ask your own.",
        isUser: false
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  const handleQuestionClick = (questionData: { question: string; answer: string }) => {
    const userMessage: Message = {
      id: Date.now(),
      text: questionData.question,
      isUser: true
    };

    const botMessage: Message = {
      id: Date.now() + 1,
      text: questionData.answer,
      isUser: false
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const clearChat = () => {
    setMessages([]);
    const welcomeMessage: Message = {
      id: 0,
      text: language === 'fr' 
        ? "Bonjour ! Comment puis-je vous aider aujourd'hui ? Choisissez une question ci-dessous ou posez la vôtre."
        : "Hello! How can I help you today? Choose a question below or ask your own.",
      isUser: false
    };
    setMessages([welcomeMessage]);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    clearChat();
  };

  const currentQuestions = predefinedQuestions[language];

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40",
          "bg-gradient-brand hover:scale-110",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Widget */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-card border border-border rounded-lg shadow-xl transition-all duration-300 z-50",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-brand rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium text-white">
              {language === 'fr' ? 'Assistant TuniScaling' : 'TuniScaling Assistant'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white hover:bg-white/20 text-xs"
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 h-[300px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.isUser ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] p-3 rounded-lg text-sm",
                  message.isUser
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="p-4 border-t border-border bg-surface">
          <div className="text-xs text-muted-foreground mb-2">
            {language === 'fr' ? 'Questions fréquentes :' : 'Quick questions:'}
          </div>
          <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
            {currentQuestions.slice(0, 3).map((q) => (
              <Button
                key={q.id}
                variant="outline"
                size="sm"
                onClick={() => handleQuestionClick(q)}
                className="text-left justify-start h-auto py-2 px-3 text-xs hover:bg-accent/10"
              >
                {q.question}
              </Button>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">
              {language === 'fr' 
                ? 'Besoin d\'aide personnalisée ?' 
                : 'Need personalized help?'
              }
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-accent hover:opacity-90"
              onClick={() => window.location.href = '/contact'}
            >
              <Send className="h-3 w-3 mr-1" />
              {language === 'fr' ? 'Nous contacter' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}