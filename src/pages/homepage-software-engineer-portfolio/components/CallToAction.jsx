import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const contactMethods = [
    {
      icon: "Mail",
      title: "Email",
      description: "hello@codecraft.dev",
      action: "Send Email",
      primary: true
    },
    {
      icon: "Calendar",
      title: "Schedule Call",
      description: "Book a 30-min consultation",
      action: "Book Now",
      primary: false
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      description: "Available Mon-Fri, 9AM-6PM EST",
      action: "Start Chat",
      primary: false
    }
  ];

  const socialLinks = [
    { icon: "Github", label: "GitHub", url: "https://github.com" },
    { icon: "Linkedin", label: "LinkedIn", url: "https://linkedin.com" },
    { icon: "Twitter", label: "Twitter", url: "https://twitter.com" },
    { icon: "Globe", label: "Portfolio", url: "https://codecraft.dev" }
  ];

  const quickStats = [
    { number: "48h", label: "Response Time" },
    { number: "100%", label: "Project Success" },
    { number: "5★", label: "Client Rating" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <Icon name="Rocket" size={16} className="mr-2" />
              Ready to Start Your Project?
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Let's Build Something
              <span className="block gradient-text">Amazing Together</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your ideas into powerful digital solutions. I'm here to help you create 
              exceptional web experiences that drive results and exceed expectations.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="default"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                className="text-base px-8"
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="text-base px-8"
              >
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {quickStats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {stat?.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods?.map((method, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-brand-lg ${
                  method?.primary 
                    ? 'border-accent shadow-brand-md' 
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  method?.primary ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                }`}>
                  <Icon name={method?.icon} size={24} />
                </div>
                
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {method?.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {method?.description}
                </p>
                
                <Button
                  variant={method?.primary ? "default" : "outline"}
                  size="sm"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  {method?.action}
                </Button>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-12">
            <h3 className="text-lg font-semibold text-primary mb-6">
              Connect With Me
            </h3>
            
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 group"
                  aria-label={social?.label}
                >
                  <Icon 
                    name={social?.icon} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-accent transition-colors duration-200" 
                  />
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Icon name="MapPin" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Based in San Francisco, CA • Available Worldwide
                </span>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Typically responds within 2-4 hours during business days
                </span>
              </div>
            </div>
          </div>

          {/* Final Encouragement */}
          <div className="mt-12 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl">
            <p className="text-foreground font-medium">
              "Every great project starts with a conversation. Let's discuss how we can bring your vision to life."
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              — Ready to collaborate on your next big idea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;