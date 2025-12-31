import { useState } from "react";
import { 
  Calendar, 
  ArrowRight, 
  Presentation, 
  FileText, 
  Mic, 
  Award, 
  Megaphone 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/MeshBackground";

// --- NEWS DATA ---
const NEWS_ITEMS = [
  {
    date: "Nov 2024",
    title: "GO-GAN: Geometry Optimization Generative Adversarial Network",
    description: 'Our paper "GO-GAN: Geometry Optimization Generative Adversarial Network for achieving optimized structures with targeted physical properties" is ACCEPTED for presentation in iNCMDAO, December 16-18, IISc Bangalore, India.',
    category: "Presentation",
    featured: true // Mark as headline
  },
  {
    date: "Nov 2024",
    title: "PyTOPress: Python Code for Topology Optimization",
    description: 'Our paper "PyTOPress: Python code for topology optimization of structures subjected to design-dependent pressure loads" is ACCEPTED for presentation in iNCMDAO, December 16-18, IISc Bangalore, India.',
    category: "Presentation"
  },
  {
    date: "Nov 2024",
    title: "Topology Optimization of Contact-Aided Compliant Mechanisms",
    description: 'Our paper "Topology optimization of contact-aided compliant mechanisms for tracing multi-kink paths" is ACCEPTED for presentation in iNCMDAO, December 16-18, IISc Bangalore, India.',
    category: "Presentation"
  },
  {
    date: "Nov 2024",
    title: "Efficient Support Structure Designs in Additive Manufacturing",
    description: 'Our paper "Topology optimization for efficient support structure designs in Additive Manufacturing" is ACCEPTED for presentation in iNCMDAO, December 16-18, IISc Bangalore, India.',
    category: "Presentation",
    wide: true // Spans 2 cols
  },
  {
    date: "Nov 2024",
    title: "Design of a Novel Laparoscopic Fan Retractor",
    description: 'Our paper "Design of a Novel Laparoscopic Fan Retractor for En-hanced Surgical Performance" is ACCEPTED for presentation in iNCMDAO, December 16-18, IISc Bangalore, India.',
    category: "Presentation"
  },
  {
    date: "Sep 2024",
    title: "TOPress3D Accepted in Optimization and Engineering",
    description: 'Our paper "TOPress3D: 3D topology optimization with design-dependent pressure loads in MATLAB" has been ACCEPTED for publication in Optimization and Engineering Journal.',
    category: "Publication"
  },
  {
    date: "Jan 2024",
    title: "Diversity-Based Topology Optimisation of Soft Robotic Grippers",
    description: 'Our paper "Diversity-based topology optimisation of soft robotic grippers" has been PUBLISHED in Advanced Intelligent Systems Journal.',
    category: "Publication",
    wide: true
  },
  {
    date: "Jan 2024",
    title: "3D Material Mask Overlay Approach Published",
    description: 'Our paper "Three-Dimensional Material Mask Overlay Topology Optimization Approach With Truncated Octahedron Elements" has been PUBLISHED in Journal of Mechanical Design Journal.',
    category: "Publication"
  },
  {
    date: "Dec 2023",
    title: "TOaCNN Presentation at NCMDAO",
    description: 'Khaish Singh Chadha from TOCoDE lab presented "TOaCNN: Adaptive Convolutional Neural Network for Multidisciplinary Topology Optimization" in NCMDAO conference, 2023 at IIT Guwahati.',
    category: "Presentation"
  },
  {
    date: "Dec 2023",
    title: "PyHexTop Presentation at NCMDAO",
    description: 'Aditi Agarwal from TOCoDE lab presented "PyHexTop: a compact Python code for topology optimization using hexagonal elements" in NCMDAO conference, 2023 at IIT Guwahati.',
    category: "Presentation"
  },
  {
    date: "Nov 2023",
    title: "SoRoTop: Hitchhiker's Guide Published",
    description: 'Our paper "SoRoTop: a hitchhiker’s guide to topology optimization MATLAB code for design-dependent pneumatic-driven soft robots" has been PUBLISHED in Optimization and Engineering Journal.',
    category: "Publication",
    wide: true
  },
  {
    date: "July 2023",
    title: "Short Course at BHEL Hyderabad",
    description: 'Prof. Prabhat gave a short course on Topology Optimization and Design for Additive Manufacturing at Bharat Heavy Electricals Limited, Hyderabad with Prof. Gopinath Muvvala.',
    category: "Talk"
  },
  {
    date: "July 2023",
    title: "International Travel Grant Award",
    description: 'Prof. Prabhat received International Travel Grant from the SERB, India to present "Topology Optimization of Fluidic Pressure-Driven Multi-Material Compliant Mechanisms" paper in ASME IDETC/CIE2023, Boston MA, USA.',
    category: "Award"
  },
  {
    date: "April 2023",
    title: "Paper Accepted for ASME IDETC/CIE2023",
    description: 'Our paper "Topology Optimization of Fluidic Pressure-Driven Multi-Material Compliant Mechanisms" is ACCEPTED for presentation in ASME IDETC/CIE2023, August 20-23, Boston Park Plaza, Boston MA, USA.',
    category: "Presentation"
  },
  {
    date: "April 2023",
    title: "TOPress Published",
    description: 'Our paper "TOPress: a MATLAB implementation for topology optimization of structures subjected to design-dependent pressure loads" has been PUBLISHED in Structural and Multidisciplinary Optimization Journal.',
    category: "Publication"
  },
  {
    date: "April 2023",
    title: "Automated Design of Pneumatic Soft Grippers",
    description: 'Our paper "Automated design of pneumatic soft grippers through design-dependent multi-material topology optimization" has been PUBLISHED in 6th IEEE-RAS International Conference on Soft Robotics (ROBOSOFT), 2023, Singapore.',
    category: "Publication"
  },
  {
    date: "Dec 2022",
    title: "Invited Talk at SICE 2022",
    description: 'Prof. Prabhat delivered an invited talk on "Topology optimization of pressure-loaded multimaterial structures" in SICE 2022 at IIT-Hyderabad.',
    category: "Talk"
  },
  {
    date: "Dec 2022",
    title: "Invited Talk at MAMM 2022",
    description: 'Prof. Prabhat delivered an invited talk on "Towards topology optimization of pressure-driven soft robots" in MAMM 2022 at IIT-Hyderabad.',
    category: "Talk"
  }
];

const News = () => {
  // Helper to determine styles based on category
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Publication": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Presentation": return "bg-purple-50 text-purple-700 border-purple-200";
      case "Talk": return "bg-green-50 text-green-700 border-green-200";
      case "Award": return "bg-amber-50 text-amber-700 border-amber-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Publication": return <FileText className="h-4 w-4" />;
      case "Presentation": return <Presentation className="h-4 w-4" />;
      case "Talk": return <Mic className="h-4 w-4" />;
      case "Award": return <Award className="h-4 w-4" />;
      default: return <Megaphone className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-background">
      <section className="relative py-12">
        <MeshBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          
          {/* --- NEWSPAPER HEADER --- */}
          <div className="text-center mb-16 border-b-2 border-primary/10 pb-8">
            <div className="inline-block mb-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground border border-border px-3 py-1 rounded-sm">
                    The Laboratory Chronicles
                </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground font-serif">
              TOCoDE <span className="text-primary">Times</span>
            </h1>
            <div className="mt-4 flex justify-center gap-4 text-sm text-muted-foreground font-medium">
                <span>Est. IIT Hyderabad</span>
                <span>•</span>
                <span>Latest Updates & Breakthroughs</span>
                <span>•</span>
                <span>{new Date().getFullYear()}</span>
            </div>
          </div>

          {/* --- NEWSPAPER GRID LAYOUT --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {NEWS_ITEMS.map((item, index) => {
              // Determine grid span based on item properties to create "shuffled" look
              const isFeatured = item.featured;
              const isWide = item.wide;
              
              // Dynamic Class Logic
              let gridClass = "col-span-1"; // Default
              if (isFeatured) gridClass = "md:col-span-2 lg:col-span-2 row-span-2"; // Headline Story
              else if (isWide) gridClass = "md:col-span-2"; // Wide Story

              return (
                <Card 
                  key={index}
                  className={`
                    ${gridClass} 
                    group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border/60 flex flex-col
                    ${isFeatured ? "bg-gradient-to-br from-white to-orange-50 border-orange-200" : "bg-white"}
                  `}
                >
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    
                    {/* Header: Date & Badge */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                        </div>
                        <Badge variant="outline" className={`${getCategoryStyle(item.category)} flex items-center gap-1`}>
                            {getIcon(item.category)}
                            {item.category}
                        </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h3 className={`font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors ${isFeatured ? "text-2xl md:text-4xl" : "text-xl"}`}>
                            {item.title}
                        </h3>
                        <p className={`text-muted-foreground leading-relaxed ${isFeatured ? "text-base md:text-lg" : "text-sm line-clamp-4"}`}>
                            {item.description}
                        </p>
                    </div>

                    {/* Footer / Read More */}
                    <div className="mt-6 pt-6 border-t border-border/50 flex justify-between items-center">
                        <span className="text-xs font-semibold text-muted-foreground">
                            ToCoDE Lab
                        </span>
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>

                    {/* Decorative Background Element for Featured Card */}
                    {isFeatured && (
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" className="rounded-full px-8">
                Load Archives
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default News;