
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  overview: string;
  goals: string[];
  process: {
    step: string;
    description: string;
  }[];
  tools: string[];
  results: string[];
  images: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Lock body scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen && isAnimating ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      <div
        className={`relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-background p-6 shadow-xl transition-all duration-300 ${
          isOpen && isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="mt-2 mb-6">
          <span className="text-sm font-medium text-primary">{project.category}</span>
          <h2 className="text-2xl font-display font-bold md:text-3xl">{project.title}</h2>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-8">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
              <p className="text-muted-foreground">{project.overview}</p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Project Goals</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-3">My Process</h3>
              <div className="space-y-4">
                {project.process.map((step, index) => (
                  <div key={index} className="rounded-lg border border-border p-4">
                    <h4 className="font-medium mb-1">{index + 1}. {step.step}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Results & Impact</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <div className="sticky top-6 space-y-6">
              <section>
                <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>

              <a
                href="#contact"
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="button-primary w-full"
              >
                Discuss a Similar Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
