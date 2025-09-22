import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { 
  FaReact, FaJsSquare, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDocker, FaLinux 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiFirebase, SiCplusplus 
} from "react-icons/si";

const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    { language: 'HTML/CSS', code: `<div class="dream-project">\n  <h1>Hello World!</h1>\n</div>` },
    { language: 'JavaScript', code: `const myGoals = () => {\n  return "Building amazing things";\n};` },
    { language: 'React', code: `const StudentDeveloper = () => {\n  return <div>Learning & Growing</div>;\n};` },
    { language: 'Python', code: `def future_goals():\n    return "Full-stack developer"\n\nprint(future_goals())` },
  ];

  // Typing effect
  useEffect(() => {
    const typeWriter = () => {
      const fullText = codeSnippets[currentCodeIndex].code;
      if (isTyping) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
          setIsTyping(true);
        }
      }
    };
    const timer = setTimeout(typeWriter, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [displayedText, isTyping, currentCodeIndex, codeSnippets]);

  // Scroll to About Section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to Connect Section (last section in index.jsx)
  const scrollToConnect = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center overflow-visible">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-visible">

          {/* Left Content */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">

            {/* Circular Professional Photo */}
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-accent shadow-lg">
              <Image
                src="/assets/images/professional-photo.JPG" 
                alt="Sophia Tan"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-center lg:text-left">
              Sophia Tan
              <span className="block text-2xl lg:text-3xl text-accent/80 font-medium mt-2">
                Computer Science Student
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl text-center lg:text-left">
              Aspiring Computer Scientist passionate about building innovative technologies that solve problems and bring convenience to everyday life
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                iconName="User"
                iconPosition="left"
                className="text-base bg-accent text-white hover:bg-accent/90 soft-shadow"
                onClick={scrollToAbout}  
              >
                About Me
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Coffee"
                iconPosition="left"
                className="text-base border-accent/50 text-accent hover:bg-accent/10"
                onClick={scrollToConnect}   
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Right Content: Hero PNG + Floating Elements */}
          <div className="relative w-full flex flex-col items-center overflow-visible z-30 -translate-y-8">
            
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              {/* LEFT SIDE */}
              <FaReact className="absolute text-accent opacity-70 animate-float-drift top-12 left-8 text-5xl" />
              <FaPython className="absolute text-accent opacity-65 animate-float-drift top-32 left-12 text-4xl" />
              <FaNodeJs className="absolute text-accent opacity-55 animate-float-drift bottom-28 left-16 text-4xl" />
              <FaGitAlt className="absolute text-accent opacity-45 animate-float-drift top-1/2 left-24 text-3xl" />
              <FaLinux className="absolute text-accent opacity-35 animate-float-drift bottom-16 left-28 text-3xl" />
              <SiMongodb className="absolute text-accent opacity-45 animate-float-drift top-20 left-32 text-3xl" />
              <SiCplusplus className="absolute text-accent opacity-35 animate-float-drift top-1/3 left-40 text-3xl" />

              {/* RIGHT SIDE */}
              <FaJsSquare className="absolute text-accent opacity-70 animate-float-drift top-12 right-8 text-5xl" />
              <FaHtml5 className="absolute text-accent opacity-50 animate-float-drift top-32 right-12 text-4xl" />
              <FaCss3Alt className="absolute text-accent opacity-55 animate-float-drift bottom-28 right-16 text-4xl" />
              <SiTailwindcss className="absolute text-accent opacity-45 animate-float-drift top-1/2 right-24 text-3xl" />
              <SiTypescript className="absolute text-accent opacity-50 animate-float-drift bottom-16 right-28 text-3xl" />
              <FaDocker className="absolute text-accent opacity-50 animate-float-drift top-20 right-32 text-3xl" />
              <SiFirebase className="absolute text-accent opacity-70 animate-float-drift top-1/3 right-40 text-3xl" />
            </div>

            {/* Hero Image */}
            <div className="relative w-[320px] sm:w-[360px] md:w-[400px] z-20 -translate-y-4">
              <Image
                src="/assets/images/hero.png"
                alt="Hero Illustration"
                className="w-full h-auto object-cover rounded-none shadow-none"
              />
            </div>

            {/* Code Snippet */}
            <div className="mt-[-16px] bg-white border border-accent/20 rounded-2xl p-6 soft-shadow w-[320px] sm:w-[360px] md:w-[400px] z-40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-[10px] text-muted-foreground font-mono bg-accent/10 px-1.5 py-0.5 rounded">
                  {codeSnippets[currentCodeIndex].language}
                </div>
              </div>
              <div className="font-mono text-xs sm:text-sm text-gray-900 min-h-[70px]">
                <pre className="whitespace-pre-wrap">
                  {displayedText}
                  <span className="animate-pulse text-accent">|</span>
                </pre>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
