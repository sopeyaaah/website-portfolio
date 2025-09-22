import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const projects = [
    {
      title: "Portfolio Website",
      type: "web",
      description:
        "A responsive personal portfolio built with React and TailwindCSS to showcase projects, skills, and certifications with smooth animations and a modern UI.",
      technologies: ["React", "TailwindCSS", "JavaScript", "Framer Motion"],
      status: "Completed",
      started: "Jan 2024",
      completed: "Feb 2024",
      //githubUrl: "https://github.com/",
      //liveUrl: "https://portfolio.com",
      screenshots: [
        "assets/images/portfolio/1.png",
        "assets/images/portfolio/2.png",
        "assets/images/portfolio/3.png",
        "assets/images/portfolio/4.png",
        "assets/images/portfolio/5.png",
      ],
    },
    {
      title: "ABaKaDa+",
      type: "mobile",
      description:
        "An interactive learning app that uses handwriting and voice recognition to help young learners read and write in Tagalog through gamified activities.",
      technologies: ["Flutter", "Dart", "Firebase", "Google ML Kit"],
      status: "In Progress",
      started: "Mar 2024",
      //githubUrl: "https://github.com/",
      screenshots: [
        "assets/images/abakada/1.png",
        "assets/images/abakada/2.png",
        "assets/images/abakada/3.png",
        "assets/images/abakada/4.png",
        "assets/images/abakada/5.png",
        "assets/images/abakada/6.png",
        "assets/images/abakada/7.png",
        
      ],
    },
    {
      title: "Code Lounge Cyber Cafe",
      type: "web",
      description:
        "A simple cyber cafe management system with secure login, role-based access, session tracking, billing, and responsive design for a smooth user experience.",
      technologies: ["React", "TailwindCSS", "JavaScript", "Framer Motion"],
      status: "Completed",
      started: "Jan 2024",
      completed: "Feb 2024",
      githubUrl: "https://github.com/",
      screenshots: [
        "assets/images/codelounge/1.png",
        "assets/images/codelounge/2.png",
        "assets/images/codelounge/3.png",
        "assets/images/codelounge/4.png",
        "assets/images/codelounge/5.png",
        "assets/images/codelounge/6.png",
        "assets/images/codelounge/7.png",
        "assets/images/codelounge/8.png",
        "assets/images/codelounge/9.png",


      ],
    },
  ];

  const nextScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot(
        (prev) => (prev + 1) % selectedProject.screenshots.length
      );
    }
  };

  const prevScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshot(
        (prev) =>
          (prev - 1 + selectedProject.screenshots.length) %
          selectedProject.screenshots.length
      );
    }
  };

  const getProjectType = (project) => {
    switch (project.type) {
      case "web":
        return "Web Application";
      case "mobile":
        return "Mobile Application";
      case "desktop":
        return "Desktop Application";
      default:
        return "Project";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* ✅ Light Pink Icon Label */}
          <div className="flex justify-center mb-4">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium shadow-sm">
              <Icon name="Folder" size={16} />
              Featured Projects
            </span>
          </div>

          {/* ✅ Big Bold Title */}
          <h2 className="text-3xl font-bold text-foreground">
            Featured Projects
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A curated selection of projects that demonstrate my expertise in web
            and mobile development, with detailed case studies and
            implementation insights.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentScreenshot(0);
              }}
            >
              {/* Project Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.screenshots[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Project Type */}
                <div className="flex items-center gap-2 text-sm text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                  <Icon name="Folder" size={16} />
                  {getProjectType(project)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl max-w-7xl w-full h-[90vh] flex overflow-hidden soft-shadow">
            {/* Left Side - Screenshots */}
            <div className="flex-1 bg-white relative">
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="w-full h-full max-w-4xl max-h-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={selectedProject.screenshots[currentScreenshot]}
                    alt={`${selectedProject.title} screenshot ${
                      currentScreenshot + 1
                    }`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Screenshot Navigation */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevScreenshot}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition z-10"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextScreenshot}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition z-10"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </>
                )}

                {/* Screenshot Counter */}
                {selectedProject.screenshots.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
                    {currentScreenshot + 1} /{" "}
                    {selectedProject.screenshots.length}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Project Details */}
            <div className="w-96 bg-background p-6 overflow-y-auto relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition"
              >
                <Icon name="X" size={28} />
              </button>

              <h3 className="text-2xl font-bold text-primary mb-2">
                {selectedProject.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-accent bg-accent/10 px-2 py-1 rounded-full mb-4">
                <Icon name="Monitor" size={16} />
                {getProjectType(selectedProject)}
              </div>

              <div className="flex gap-3 mb-6">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition text-sm"
                  >
                    <Icon name="Github" size={16} />
                    GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition text-sm"
                  >
                    <Icon name="ExternalLink" size={16} />
                    View Live
                  </a>
                )}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border border-accent/40 bg-accent/5 text-primary rounded-lg text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
