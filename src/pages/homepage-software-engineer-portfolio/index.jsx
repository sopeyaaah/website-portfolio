import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AboutSection from "./components/AboutSection";
import FeaturedProjects from './components/FeaturedProjects';
import Certifications from './components/Certifications';
import SkillsVisualization from './components/SkillsVisualization';
// import LatestInsights from './components/LatestInsights';
// import CallToAction from './components/CallToAction';

const HomepageSoftwareEngineerPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Home Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-12">
          <AboutSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <FeaturedProjects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <SkillsVisualization />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12">
          <Certifications />
        </section>
      </main>

      {/* ✅ Connect Section (footer wrapped with id) */}
      <section id="connect">
        <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm font-mono">ST</span>
                  </div>
                  <span className="text-xl font-bold">Sophia Tan</span>
                </div>
                <p className="text-primary-foreground/80 mb-4 max-w-md">
                  Aspiring Computer Scientist passionate about building innovative technologies that solve problems and bring convenience to everyday life
                </p>
                <p className="text-sm text-primary-foreground/60">
                  © {new Date()?.getFullYear()} 
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                  <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
                  <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
                  <li><a href="#certifications" className="hover:text-accent transition-colors">Certifications</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Let's Connect</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>
                    <a 
                      href="mailto:sopeyaaahtan@gmail.com" 
                      className="hover:text-accent transition-colors"
                    >
                      📧 Gmail
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.linkedin.com/in/sophiaaatan/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-accent transition-colors"
                    >
                      💼 LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default HomepageSoftwareEngineerPortfolio;
