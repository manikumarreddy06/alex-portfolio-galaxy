
import { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  Palette, 
  Search, 
  Layers, 
  Smartphone, 
  Globe, 
  Monitor, 
  Loader, 
  Linkedin, 
  Twitter, 
  Dribbble 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/components/ProjectModal";

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Finance Mobile App Redesign",
    category: "Mobile App",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "A complete overhaul of a leading finance app with focus on simplicity and usability.",
    overview: "The finance app was struggling with user retention due to a complicated interface and confusing navigation. I led the redesign process to create a more intuitive and engaging experience.",
    goals: [
      "Simplify the user journey for common financial tasks",
      "Improve navigation and information architecture",
      "Create a more visually appealing interface",
      "Increase user engagement and retention"
    ],
    process: [
      {
        step: "User Research",
        description: "Conducted user interviews and analyzed app analytics to identify pain points and opportunities."
      },
      {
        step: "Information Architecture",
        description: "Restructured the app's navigation and content hierarchy for more intuitive access to key features."
      },
      {
        step: "Wireframing & Prototyping",
        description: "Created low and high-fidelity wireframes, followed by interactive prototypes for user testing."
      },
      {
        step: "Visual Design",
        description: "Developed a clean, modern visual language that aligns with the brand while improving usability."
      }
    ],
    tools: ["Figma", "Sketch", "Principle", "UsabilityHub"],
    results: [
      "Increased user retention by 30% within 3 months",
      "Reduced time to complete key tasks by 40%",
      "Improved App Store rating from 3.2 to 4.7",
      "Increased daily active users by 25%"
    ],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    category: "Web",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "A complete overhaul of an e-commerce platform with a focus on the checkout process.",
    overview: "The client was experiencing high cart abandonment rates due to a complicated checkout process. I redesigned the entire user flow to create a more streamlined and user-friendly experience.",
    goals: [
      "Simplify the checkout process",
      "Improve product discovery and categorization",
      "Enhance the overall visual appeal of the website",
      "Increase conversion rates and reduce cart abandonment"
    ],
    process: [
      {
        step: "Competitive Analysis",
        description: "Analyzed competitor websites to identify best practices and opportunities for improvement."
      },
      {
        step: "User Journey Mapping",
        description: "Created detailed user journey maps to understand the customer experience from discovery to purchase."
      },
      {
        step: "Wireframing & Prototyping",
        description: "Developed wireframes and interactive prototypes for key user flows, particularly the checkout process."
      },
      {
        step: "Usability Testing",
        description: "Conducted usability tests with real users to validate design decisions and identify issues."
      }
    ],
    tools: ["Figma", "Adobe XD", "InVision", "Optimal Workshop"],
    results: [
      "Reduced cart abandonment by 45%",
      "Increased conversion rate by 28%",
      "Decreased checkout completion time by 35%",
      "Improved customer satisfaction score by 30%"
    ],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Healthcare Patient Portal",
    category: "Web",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    description: "A user-centered patient portal for a healthcare provider, focusing on accessibility.",
    overview: "Designed a comprehensive patient portal that allows users to schedule appointments, view medical records, and communicate with healthcare providers in a secure environment.",
    goals: [
      "Create an intuitive interface that works for users of all ages and abilities",
      "Simplify complex medical information for better understanding",
      "Ensure the highest standards of privacy and security",
      "Improve patient engagement with their healthcare"
    ],
    process: [
      {
        step: "Stakeholder Interviews",
        description: "Gathered requirements from healthcare professionals and administrators to understand their needs."
      },
      {
        step: "User Research",
        description: "Conducted interviews with patients of various ages and technical abilities to understand their needs and challenges."
      },
      {
        step: "Information Architecture",
        description: "Created a logical structure for complex medical information and patient data."
      },
      {
        step: "Accessibility-Focused Design",
        description: "Implemented WCAG guidelines to ensure the portal was accessible to users with disabilities."
      }
    ],
    tools: ["Figma", "Axure RP", "Accessibility Insights", "UserZoom"],
    results: [
      "Achieved 99.8% WCAG 2.1 AA compliance",
      "Reduced call center volume by 35% within 6 months",
      "Increased patient portal adoption by 50%",
      "Improved patient satisfaction scores by 40%"
    ],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    category: "Mobile App",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "A fitness tracking application with personalized workout plans and progress visualization.",
    overview: "Created a comprehensive fitness app that helps users track workouts, set goals, and visualize progress over time with an emphasis on motivation and habit formation.",
    goals: [
      "Design an engaging and motivating user experience",
      "Create intuitive workout tracking interfaces",
      "Develop clear data visualizations for progress tracking",
      "Implement features to encourage habit formation"
    ],
    process: [
      {
        step: "Market Research",
        description: "Analyzed existing fitness apps to identify opportunities and gaps in the market."
      },
      {
        step: "User Personas",
        description: "Developed detailed user personas representing different fitness levels and goals."
      },
      {
        step: "Feature Prioritization",
        description: "Worked with stakeholders to prioritize features based on user needs and business goals."
      },
      {
        step: "Visual Design System",
        description: "Created a comprehensive design system to ensure consistency across the application."
      }
    ],
    tools: ["Figma", "Principle", "ProtoPie", "Maze"],
    results: [
      "Achieved 85% user retention after 3 months",
      "Users reported 40% higher workout consistency",
      "Featured in Apple's App Store 'Apps We Love'",
      "Positive feedback on data visualization features"
    ],
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  
  // Filter projects based on category
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Reset form submission status after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Preloader />
      <Navbar />
      <BackToTop />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient-shift"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] -top-20 -left-20"></div>
            <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px] -bottom-40 -right-20"></div>
          </div>
        </div>

        <div className="container px-6 py-10 mx-auto">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
              UI/UX Designer
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Crafting User-Centered Designs That Delight
            </h1>
            
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Hi, I'm Alex Carter. A passionate UI/UX designer with 5+ years of experience creating beautiful, functional interfaces that users love.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a href="#contact" className="button-primary">
                Hire Me
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#portfolio" className="button-secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                  alt="Alex Carter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl hidden md:block">
                <span className="text-sm font-medium text-primary">
                  Based in
                </span>
                <h3 className="text-xl font-display font-semibold">
                  San Francisco, CA
                </h3>
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-primary">About Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                Passionate about creating exceptional user experiences
              </h2>
              
              <p className="text-muted-foreground mb-6">
                I'm a UI/UX designer with a passion for creating beautiful, functional interfaces that solve real problems for users. With over 5 years of experience, I've worked with companies of all sizes, from startups to Fortune 500s, to deliver user-centered designs that drive business results.
              </p>
              
              <p className="text-muted-foreground mb-8">
                My approach combines user research, strategic thinking, and creative problem-solving to craft experiences that are not only visually stunning but also intuitive and accessible. I believe that good design should be invisible, guiding users naturally without getting in their way.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-lg bg-white shadow-sm text-center">
                  <AnimatedCounter end={10} suffix="+" />
                  <p className="text-muted-foreground text-sm mt-1">Projects Delivered</p>
                </div>
                <div className="p-4 rounded-lg bg-white shadow-sm text-center">
                  <AnimatedCounter end={5} suffix="+" />
                  <p className="text-muted-foreground text-sm mt-1">Years Experience</p>
                </div>
                <div className="p-4 rounded-lg bg-white shadow-sm text-center">
                  <AnimatedCounter end={100} suffix="%" />
                  <p className="text-muted-foreground text-sm mt-1">Client Satisfaction</p>
                </div>
              </div>

              <a href="#contact" className="button-primary">
                Get In Touch
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary">My Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              How I Can Help You
            </h2>
            <p className="text-muted-foreground">
              I offer a range of design services to help businesses create exceptional digital experiences that users love and that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UI Design Service */}
            <div className="group relative rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center text-primary">
                <Palette size={24} />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-2">UI Design</h3>
              
              <p className="text-muted-foreground mb-8">
                Creating visually stunning, consistent interfaces that align with your brand and delight your users.
              </p>
              
              <div className="absolute bottom-6 left-6 right-6 overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Design systems and component libraries</li>
                  <li>Web and mobile app interfaces</li>
                  <li>Responsive designs for all devices</li>
                  <li>Visual language development</li>
                </ul>
              </div>
            </div>

            {/* UX Research Service */}
            <div className="group relative rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center text-primary">
                <Search size={24} />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-2">UX Research</h3>
              
              <p className="text-muted-foreground mb-8">
                Understanding your users through research to inform design decisions and create intuitive experiences.
              </p>
              
              <div className="absolute bottom-6 left-6 right-6 overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>User interviews and surveys</li>
                  <li>Usability testing and heuristic evaluation</li>
                  <li>Competitive analysis</li>
                  <li>User personas and journey mapping</li>
                </ul>
              </div>
            </div>

            {/* Prototyping Service */}
            <div className="group relative rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center text-primary">
                <Layers size={24} />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-2">Prototyping</h3>
              
              <p className="text-muted-foreground mb-8">
                Creating interactive prototypes to validate ideas, test with users, and communicate design intent.
              </p>
              
              <div className="absolute bottom-6 left-6 right-6 overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Low and high-fidelity prototypes</li>
                  <li>Interactive user flows</li>
                  <li>Animation and micro-interactions</li>
                  <li>User testing preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">My Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
              Selected Projects
            </h2>
            <p className="text-muted-foreground">
              A showcase of my recent design work across various industries and platforms.
            </p>
          </div>

          {/* Portfolio Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["All", "Web", "Mobile App"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-muted-foreground hover:bg-secondary"
                }`}
              >
                {filter === "Web" && <Globe size={14} className="inline mr-1" />}
                {filter === "Mobile App" && <Smartphone size={14} className="inline mr-1" />}
                {filter === "All" && <Monitor size={14} className="inline mr-1" />}
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.category}
                    </span>
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                      className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                    className="text-primary text-sm font-medium inline-flex items-center transition-all hover:text-primary/80"
                  >
                    View Case Study
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-primary">Contact Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                Let's Work Together
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hello@alexcarter.design</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Dribbble"
                >
                  <Dribbble size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <div className="input-focus-animation">
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full bg-transparent px-0 py-2 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <div className="input-focus-animation">
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-transparent px-0 py-2 focus:outline-none"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <div className="input-focus-animation">
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full bg-transparent px-0 py-2 focus:outline-none resize-none"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={16} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-xl font-display font-semibold">
                Alex <span className="text-primary">Carter</span>
              </h1>
            </div>
            
            <div className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Alex Carter. All rights reserved.
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Index;

// Adding missing imports
function Mail(props: any) {
  return <lucide-react.Mail {...props} />;
}

function MapPin(props: any) {
  return <lucide-react.MapPin {...props} />;
}

function Check(props: any) {
  return <lucide-react.Check {...props} />;
}
