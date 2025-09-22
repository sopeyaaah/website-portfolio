import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO",
      company: "TechFlow Solutions",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: `Working with this developer was transformative for our platform. They delivered a complete system overhaul that improved our performance by 300% and reduced our infrastructure costs by 40%. Their attention to detail and proactive communication made the entire process seamless.`,
      project: "E-Commerce Platform Redesign",
      rating: 5,
      metrics: {
        performance: "+300%",
        cost_reduction: "-40%",
        timeline: "On Time"
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Product Manager",
      company: "DataViz Analytics",
      companyLogo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: `The real-time analytics dashboard they built for us processes over 1 million data points daily with sub-100ms response times. The intuitive interface and powerful visualizations have revolutionized how our team makes data-driven decisions. Exceptional work!`,
      project: "Real-Time Analytics Dashboard",
      rating: 5,
      metrics: {
        data_points: "1M+/day",
        response_time: "<100ms",
        user_adoption: "95%"
      }
    },
    {
      id: 3,
      name: "Emily Watson",
      position: "Founder & CEO",
      company: "InnovateLab",
      companyLogo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: `Their AI-powered task management system increased our team productivity by 60%. The machine learning algorithms for priority suggestions are incredibly accurate, and the automated scheduling has saved us countless hours. A true game-changer for our workflow.`,
      project: "AI-Powered Task Management",
      rating: 5,
      metrics: {
        productivity: "+60%",
        accuracy: "94%",
        time_saved: "20hrs/week"
      }
    },
    {
      id: 4,
      name: "David Park",
      position: "Technical Director",
      company: "SecureVote Systems",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: `The blockchain voting system they developed for us is a masterpiece of security and transparency. With over 50,000 votes processed without a single security incident, they've proven their expertise in both blockchain technology and secure system architecture.`,
      project: "Blockchain Voting System",
      rating: 5,
      metrics: {
        votes_processed: "50K+",
        security_incidents: "0",
        transparency: "100%"
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who have experienced the impact of exceptional software development
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-brand-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* Quote */}
              <div className="mb-8">
                <Icon name="Quote" size={48} className="text-accent/20 mb-4" />
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                  "{testimonials?.[currentTestimonial]?.content}"
                </blockquote>
              </div>

              {/* Client Info */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonials?.[currentTestimonial]?.avatar}
                    alt={testimonials?.[currentTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-primary text-lg">
                      {testimonials?.[currentTestimonial]?.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials?.[currentTestimonial]?.position}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Image
                        src={testimonials?.[currentTestimonial]?.companyLogo}
                        alt={testimonials?.[currentTestimonial]?.company}
                        className="w-6 h-6 rounded object-cover"
                      />
                      <span className="text-sm text-muted-foreground">
                        {testimonials?.[currentTestimonial]?.company}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex justify-end mb-2">
                    {renderStars(testimonials?.[currentTestimonial]?.rating)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Project: {testimonials?.[currentTestimonial]?.project}
                  </p>
                </div>
              </div>

              {/* Project Metrics */}
              <div className="mt-8 pt-8 border-t border-border">
                <h5 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                  Project Impact
                </h5>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(testimonials?.[currentTestimonial]?.metrics)?.map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl lg:text-2xl font-bold text-accent">
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key?.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">
            Trusted by innovative companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={testimonial?.companyLogo}
                  alt={testimonial?.company}
                  className="w-8 h-8 rounded object-cover"
                />
                <span className="text-sm font-medium text-foreground">
                  {testimonial?.company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;