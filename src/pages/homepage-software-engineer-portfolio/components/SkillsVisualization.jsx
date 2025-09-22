import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const SkillsVisualization = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  // Tech stack data
const techStack = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TailwindCSS", logo: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];


  return (
    <section id="skills" className="pt-20 pb-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4 soft-shadow">
            <Icon name="GraduationCap" size={16} className="mr-2" /> Skills & Learning
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4"> My Technical Skills </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently learning and developing skills in various technologies. Each day brings new knowledge and growth in my programming journey.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-primary mb-8">Tech Stack I Use</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-accent/5 border border-border/30 
                           hover:bg-accent/20 hover:shadow-md hover:scale-105 
                           transition-all duration-200 ease-in-out cursor-default"
              >
                <img src={tech.logo} alt={tech.name} className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium text-primary">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework & Learning */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-primary mb-8">Current Coursework & Self-Learning</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {[
              "Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering",
              "Computer Networks", "UI/UX Design", "Mobile Development", "Version Control",
              "Testing", "Responsive Design", "API Integration", "Problem Solving", "Code Review",
              "Debugging", "Project Management"
            ].map((course, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-accent/5 text-sm text-primary border border-border/30 
                          hover:bg-accent/20 hover:shadow-md hover:scale-105 
                          transition-all duration-200 ease-in-out cursor-default"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsVisualization;
