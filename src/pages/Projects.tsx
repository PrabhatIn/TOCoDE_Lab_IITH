import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/MeshBackground";
import { ArrowRight, Atom } from "lucide-react";

const Projects = () => {
  // ==========================================
  // 1. RESEARCH INTERESTS (Tags)
  // ==========================================
  const interests = [
    "Multi-disciplinary/-scale Topology Optimization",
    "Structural Optimization",
    "Soft Robotics",
    "Data(AI/ML)-Driven Design",
    "Compliant Mechanisms",
    "Inverse Design",
    "Computational Contact Mechanics",
    "Computational Mechanics"
  ];

  // ==========================================
  // 2. PROJECTS DATA
  // ==========================================
  const projectList = [
    {
      title: "AI-Powered Topology Optimization with Hexagonal Elements",
      subtitle: "using HoneyTOP90 MATLAB Code",
      description: "Integrating Artificial Intelligence with the efficient HoneyTOP90 framework to accelerate topology optimization processes using hexagonal tessellation.",
      tags: ["AI/ML", "MATLAB", "Hexagonal Elements"]
    },
    {
      title: "AI-Based Multiphysics Topology Optimization",
      subtitle: "for Adaptive Satellite Structures with smart material integration",
      description: "Developing intelligent adaptive structures for aerospace applications, utilizing smart materials and multiphysics optimization to respond to environmental changes.",
      tags: ["Aerospace", "Smart Materials", "Multiphysics"]
    },
    {
      title: "Advanced Optimization Frameworks",
      subtitle: "Topology / Structural / Multiphysics / Multiscale",
      description: "A comprehensive investigation into unifying various optimization scales and physical domains into a cohesive computational framework.",
      tags: ["Multiscale", "Structural Opt", "Multiphysics"]
    },
    {
      title: "AI/ML-Driven Design",
      subtitle: "Generative Engineering",
      description: "Leveraging machine learning algorithms to predict optimal topologies and accelerate the inverse design process for complex engineering problems.",
      tags: ["Generative Design", "Deep Learning", "Inverse Design"]
    },
    {
      title: "Soft Robotics",
      subtitle: "Design Optimization and Experimentation",
      description: "Designing compliant soft robotic actuators and grippers through topology optimization, validated via physical experimentation and prototyping.",
      tags: ["Soft Robotics", "Prototyping", "Compliant Mechanisms"]
    },
    {
      title: "Computational Contact Mechanics",
      subtitle: "with Topology Optimization",
      description: "Solving highly non-linear problems involving contact mechanics within the topology optimization loop for robust mechanism design.",
      tags: ["Contact Mechanics", "Non-linear FEM", "Algorithms"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background font-sans selection:bg-orange-100">
      <section className="relative py-20 overflow-hidden">
        <MeshBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          
          {/* ==========================================
              HEADER SECTION
          ========================================== */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block p-3 rounded-2xl bg-orange-50 mb-6 border border-orange-100">
                <Atom className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Research Fields</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the frontiers of computational mechanics through AI, optimization, and robotics.
            </p>
          </div>

          {/* ==========================================
              1. RESEARCH INTERESTS (Attractive Tags)
          ========================================== */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-8">
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                Core Research Interests
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {interests.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="text-sm px-4 py-2 rounded-full border-orange-200 bg-white/50 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-700 transition-all duration-300 cursor-default hover:scale-105 shadow-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* ==========================================
              2. PROJECTS GRID
          ========================================== */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-8 w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
                <h2 className="text-3xl font-bold text-foreground">Ongoing Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectList.map((project, index) => (
                <Card 
                  key={index}
                  className="group relative flex flex-col p-6 border-border/60 hover:border-orange-200 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                >
                  {/* Decorative Left Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-500" />

                  {/* Content */}
                  <div className="flex-1 space-y-3 mb-6 pl-2">
                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-orange-700 transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                        <p className="text-sm font-medium text-orange-600/90 italic">
                            {project.subtitle}
                        </p>
                    )}
                    <div className="h-px w-full bg-border/50 my-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer / Tags */}
                  <div className="mt-auto pt-4 pl-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((t, i) => (
                            <span key={i} className="text-[10px] font-semibold px-2 py-1 rounded bg-orange-50 text-orange-700 border border-orange-100">
                                {t}
                            </span>
                        ))}
                    </div>
                    <Button variant="ghost" className="w-full justify-between hover:bg-orange-50 hover:text-orange-700 group/btn px-0 hover:px-2 transition-all">
                        View Details 
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;