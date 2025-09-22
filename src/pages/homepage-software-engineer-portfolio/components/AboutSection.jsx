import React from "react";
import Icon from '../../../components/AppIcon';

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
      
      {/* Icon Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium soft-shadow justify-center mx-auto">
          <Icon name="User" size={16} className="mr-2" />
          About Me
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

      {/* Intro with Image Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* LEFT: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/images/about.png"
            alt="Sophia Tan"
            className="w-64 md:w-72 lg:w-80 object-contain drop-shadow-lg"
          />
        </div>

        {/* RIGHT: Intro Text */}
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
            Hi, I’m <span className="font-semibold">Sophia Tan</span>, a
            passionate Computer Science student who loves creating and providing
            tech-driven services and solutions. 
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            Aside from software and web development, I am also open to
            explore other areas of innovation such as networking and other emerging
            technologies. My goal is to stay flexible with my skills, adapt to
            different challenges, and contribute effectively in the industry.
          </p>
        </div>
      </div>

      {/* Info Section: Personal Details + Education + Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT Column */}
        <div className="p-6 bg-white shadow rounded-xl">
          {/* Personal Details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium">Name:</span> Sophia Tan
              </li>
              <li>
                <span className="font-medium">Email:</span> sopeyaaahtan@gmail.com
              </li>
              <li>
                <span className="font-medium">Location:</span> Philippines
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="text-muted-foreground space-y-4">
              
              <div>
                <p className="font-medium">Bachelor of Science in Computer Science</p>
                <p>FEU Institute of Technology</p>
                <p className="text-sm">2022 – Present</p>
              </div>

              <div>
                <p className="font-medium">Senior High School - STEM</p>
                <p>Technological Institute of the Philippines</p>
                <p className="text-sm">2020 – 2022</p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT Column - Experience Timeline */}
        <div className="p-6 bg-white shadow rounded-xl relative">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full border-l-2 border-muted-foreground/20"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Experience Item 1 */}
              <div className="relative flex items-start">
                <div className="w-4 h-4 rounded-full bg-primary border-2 border-white absolute left-0 top-1.5"></div>
                <div className="ml-6">
                  <h4 className="font-medium">Personal Project – Portfolio Website</h4>
                  <span className="text-sm text-muted-foreground">2025</span>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed text-justify">
                    Designed and developed a personal portfolio website to showcase projects, skills, 
                    and experiences. Focused on creating a responsive, user-friendly, and visually 
                    appealing platform using modern web technologies such as React and Tailwind CSS.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative flex items-start">
                <div className="w-4 h-4 rounded-full bg-primary border-2 border-white absolute left-0 top-1.5"></div>
                <div className="ml-6">
                  <h4 className="font-medium">Academic Work – Thesis (ABaKaDa+)</h4>
                  <span className="text-sm text-muted-foreground">2024 – 2025</span>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed text-justify">
                    Developed ABaKaDa+, a Tagalog language learning mobile application 
                    aimed at improving Filipino reading and pronunciation skills. 
                    Integrated Dynamic Time Warping and Convolutional Neural Network for speech and handwriting recognition respectively and applied
                    gamified features to provide an interactive and accessible 
                    educational tool for teachers and students.
                  </p>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative flex items-start">
                <div className="w-4 h-4 rounded-full bg-primary border-2 border-white absolute left-0 top-1.5"></div>
                <div className="ml-6">
                  <h4 className="font-medium">Academic Work – Code Lounge</h4>
                  <span className="text-sm text-muted-foreground">2022 – 2023</span>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed text-justify">
                    Designed and developed a Cyber Café Management System to 
                    streamline daily operations for small internet cafés. The system 
                    included features for user management, session tracking, 
                    billing automation, and resource optimization, 
                    built with HTML, CSS, PHP, and MySQL.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
