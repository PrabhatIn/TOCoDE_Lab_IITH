import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Lightbulb, 
  MousePointer2, 
  ChevronDown, 
  Bell, 
  Calendar,
  Activity,
  FileText,
  ChevronLeft,
  ChevronRight,
  Download,
  BookOpen,
  Atom 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ==========================================
// 1. TYPE DEFINITIONS
// ==========================================

interface NewsItem {
  date: string;
  category: string;
  title: string;
  description: string;
}

interface SoftwareItem {
  title: string;
  link: string;
  citation: string;
}

interface PaperLink {
  name: string;
  link: string;
}

interface HeroSlideData {
  id: string;
  title: string;
  papers: PaperLink[]; 
  video: string; 
}

// ==========================================
// 2. DATA CONSTANTS
// ==========================================

const RESEARCH_DATA: HeroSlideData[] = [
  { 
    id: "1",
    title: "Topology optimization of fluidic pressure-actuated compliant mechanisms", 
    papers: [
      { name: "3D MATLAB code paper", link: "https://link.springer.com/article/10.1007/s11081-024-09931-2" },
      { name: "3D pressure-driven CMs paper", link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/nme.6618" },
      { name: "2D pressure-driven CMs paper", link: "https://link.springer.com/article/10.1007/s11081-023-09865-1" },
      { name: "2D MATLAB code paper", link: "https://link.springer.com/article/10.1007/s00158-019-02442-0" },
      { name: "2D pressure-driven CMs paper", link: "https://www.sciencedirect.com/science/article/pii/S0094114X22001367" }
    ],
    video: "/Images/research1.mp4" 
  },
  { 
    id: "2",
    title: "Topology optimization of fluidic pressure-loaded structures", 
    papers: [
      { name: "3D pressure-loaded structures paper", link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/nme.6618" },
      { name: "2D pressure-loaded structure paper", link: "https://link.springer.com/article/10.1007/s00158-023-03533-9" },
      { name: "3D MATLAB code paper", link: "https://link.springer.com/article/10.1007/s11081-024-09931-2" }
    ],
    video: "/Images/research_2.mp4"
  },
  { 
    id: "3",
    title: "Topology optimization of structures subjected to self-weight", 
    papers: [
      { name: "TO Self-weight Code Paper", link: "https://link.springer.com/article/10.1007/s00158-022-03232-x" }
    ],
    video: "/Images/research_3.mp4"
  },
  { 
    id: "4",
    title: "Topology optimization of contact-aided compliant mechanisms (CCMs)", 
    papers: [
      { name: "Self & Mutual Contact CCMs Paper", link: "https://asmedigitalcollection.asme.org/mechanicaldesign/article/141/1/012302/367792/Computational-Synthesis-of-Large-Deformation" },
      { name: "Shape morphing CCMs paper", link: "https://asmedigitalcollection.asme.org/mechanicaldesign/article/138/6/062301/472583/Synthesis-of-C0-Path-Generating-Contact-Aided" },
      { name: "External Contact paper", link: "https://www.sciencedirect.com/science/article/pii/S0094114X20303529" }
    ],
    video: "/Images/research_4.mp4"
  },
  { 
    id: "5",
    title: "Compliant mechanisms for straining biological tissues using topology optimization", 
    papers: [
      { name: "Download Paper", link: "https://link.springer.com/article/10.1007/s00158-020-02764-4" }
    ],
    video: "/Images/research_5.mp4"
  },
  { 
    id: "6",
    title: "Topology optimization of compliant fluidic control structures", 
    papers: [
      { name: "Download paper", link: "https://www.sciencedirect.com/science/article/pii/S0045794918315232" }
    ],
    video: "/Images/research_6.mp4"
  },
  { 
    id: "7",
    title: "Boundary resolution and smoothing in topology optimization", 
    papers: [
      { name: "Download Paper", link: "https://link.springer.com/article/10.1007/s00158-015-1272-6" }
    ],
    video: "/Images/research_7.mp4"
  },
];

const SOFTWARE_ITEMS: SoftwareItem[] = [
  {
    title: "HoneyTop90",
    link: "https://github.com/PrabhatIn/HoneyTop90",
    citation: "P. Kumar (2023): HoneyTop90: A 90-line MATLAB code for topology optimization using honeycomb tessellation, Optimization and Engineering 24 (2), 1433-1460"
  },
  {
    title: "TOPress",
    link: "https://github.com/PrabhatIn/TOPress",
    citation: "P. Kumar (2023): TOPress: a MATLAB implementation for topology optimization of structures subjected to design-dependent pressure loads, Structural and Multidisciplinary Optimization volume 66, Article number: 97 (2023)"
  },
  {
    title: "SoRoTop",
    link: "https://github.com/PrabhatIn/SoRoTop",
    citation: "P. Kumar (2024): SoRoTop: a hitchhiker's guide to topology optimization MATLAB code for design-dependent pneumatic-driven soft robots, Optimization and Engineering 25 (4), 2473–2507"
  },
  {
    title: "TOPress3D",
    link: "https://github.com/PrabhatIn/TOPress3D",
    citation: "P. Kumar (2025): TOPress3D: 3D topology optimization with design-dependent pressure loads in MATLAB, Optimization and Engineering 26(3), 1113-1141"
  },
  {
    title: "PyHexTop",
    link: "https://github.com/PrabhatIn/PyHexTop",
    citation: "A. Agarwal, A. Saxena, P. Kumar (2023): PyHexTop: a compact Python code for topology optimization using hexagonal elements, Advances in Multidisciplinary Design, Analysis and Optimization"
  },
  {
    title: "PyTOPress",
    link: "mailto:pkumar@mae.iith.ac.in",
    citation: "S. Saxena, SI Sarkar, P. Kumar (2024): PyTOPress: Python code for topology optimization with design-dependent pressure loads"
  }
];

const RESEARCH_AREAS = [
  {
    icon: Cpu,
    title: "Topology Optimization",
    description: "Advanced algorithms for structural optimization and material distribution",
  },
  {
    icon: Code,
    title: "Computational Design",
    description: "Novel methodologies for design automation and generative engineering",
  },
  {
    icon: Lightbulb,
    title: "Experimentation",
    description: "Validation through physical prototyping and experimental verification",
  },
];

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "Dec 18, 2025",
    category: "Funding",
    title: "Design and Development of Composite Structure for High-Velocity Impact Energy Absorption and Dissipation using Multiscale Topology Optimization",
    description: "We are excited to announce that Prof. Prabhat and Prof. Chandra have been awarded ARG funding for above-mentioned project from Anusandhan National Research Foundation, New Delhi, India"
  },
  {
    date: "Nov 28, 2025",
    category: "Publication",
    title: "New paper accepted in Journal of Mechanical Design",
    description: "Our work on 'Multiphysics Topology Optimization' has been accepted for publication."
  },
  {
    date: "Nov 15, 2025",
    category: "Event",
    title: "Workshop on AI & LLMs completed successfully",
    description: "Conducted a hands-on workshop at IIT Hyderabad connecting brilliant minds in engineering."
  },
  {
    date: "Oct 01, 2025",
    category: "Talk",
    title: "Keynote at International Mechanics Conference",
    description: "Professor presented our latest findings on compliant mechanisms."
  }
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

const Home = () => {
  const [researchIndex, setResearchIndex] = useState(0);

  // --- NAVIGATION ---
  const nextResearch = () => setResearchIndex((prev) => (prev + 1) % RESEARCH_DATA.length);
  const prevResearch = () => setResearchIndex((prev) => (prev - 1 + RESEARCH_DATA.length) % RESEARCH_DATA.length);

  // --- TIMERS ---
  useEffect(() => {
    const timer = setInterval(nextResearch, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-orange-100 font-sans">

      {/* ==================================================================
          SECTION 1: HERO - CENTERED LAYOUT
          ================================================================== */}
      <section className="relative min-h-screen flex flex-col items-center pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 -z-10" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          
          {/* 1. TOP CENTER: LOGO & ONE-LINE TITLE */}
          <div className="max-w-6xl w-full text-center animate-fade-in-up mb-2">
            
            {/* Logo Centered */}
            <div className="flex justify-center mb-1 transform hover:scale-105 transition-transform duration-500">
              <div className="font-extrabold text-3xl md:text-5xl tracking-tighter flex items-end leading-none select-none">
                  <span className="text-amber-600">T</span>
                  <span className="relative text-amber-600 mx-1">
                      0
                      <span className="absolute -top-4 right-1/4 text-lg md:text-xl font-bold">1</span>
                  </span>
                  <span className="text-red-600 tracking-tight">Co</span>
                  <span className="text-orange-600">D</span>
                  <span className="text-amber-600">E</span>
              </div>
            </div>
            
            {/* Title Centered */}
            <h1 className="text-lg md:text-2xl font-bold leading-tight text-foreground/90 whitespace-nowrap overflow-hidden text-ellipsis mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-red-600 to-orange-600 mr-2">
                Topology Optimization
              </span>
              Computational Design & Experimentation Lab
            </h1>

            {/* MOVED: Research Areas Grid */}
            <div className="flex flex-wrap justify-center gap-3 mb-6 max-w-4xl mx-auto">
                {[
                  "Multi-disciplinary/-physics/-scale topology optimization",
                  "Soft robotics",
                  "Data (AI/ML)-driven Design",
                  "Compliant mechanisms",
                  "Inverse design problems",
                  "Computational contact mechanics",
                  "Computational mechanics"
                ].map((area, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-full text-orange-700 text-xs md:text-sm font-medium shadow-sm hover:shadow-md hover:border-orange-300 transition-all cursor-default">
                    {area}
                  </span>
                ))}
            </div>
          </div>

          {/* --- PHYSICS DESIGN BOUNDARY LINE --- */}
          <div className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 mb-4 opacity-80">
             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
             <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] shrink-0"></div>
             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

          {/* 2. MAIN HERO CONTENT: VIDEO SLIDER */}
          <div className="w-full max-w-7xl relative mb-8 group mt-0">
             {/* Aspect Ratio Container */}
             <div className="relative aspect-video w-full bg-transparent overflow-hidden rounded-xl">
                
                {/* Navigation Arrows */}
                <button onClick={prevResearch} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 text-red-600/50 hover:text-red-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-125">
                    <ChevronLeft className="w-10 h-10" />
                </button>
                <button onClick={nextResearch} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 text-red-600/50 hover:text-red-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-125">
                    <ChevronRight className="w-10 h-10" />
                </button>

                {/* Slider Content */}
                <div className="relative w-full h-full">
                    {RESEARCH_DATA.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
                                researchIndex === index ? "opacity-100 z-10" : "opacity-0 -z-10"
                            }`}
                        >
                            {/* Slide Title */}
                            <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center pt-2 pointer-events-none">
                                <h4 className="text-sm md:text-lg font-bold text-green-700 text-center mb-1 drop-shadow-sm px-4">
                                    {slide.title}
                                </h4>
                                <div className="flex flex-wrap justify-center gap-2 pointer-events-auto scale-90 origin-top">
                                    {slide.papers.map((paper, pIdx) => (
                                        <a 
                                          key={pIdx} 
                                          href={paper.link} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="bg-[#a0400b] text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded shadow hover:bg-[#803308] cursor-pointer transition-colors flex items-center gap-1 no-underline"
                                        >
                                            <FileText className="w-2.5 h-2.5" />
                                            {paper.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Video */}
                            <div className="w-full h-full pt-10 pb-2 px-2">
                                <video 
                                  className="w-full h-full object-contain" 
                                  autoPlay 
                                  loop 
                                  muted 
                                  playsInline
                                  src={slide.video}
                                >
                                  Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Progress Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {RESEARCH_DATA.map((_, idx) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === researchIndex ? 'bg-red-600 w-8' : 'bg-gray-300 w-2'}`} />
                    ))}
                </div>
             </div>
          </div>
          
          {/* 3. WELCOME TEXT SECTION (Modified) */}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50 hidden md:block">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* ==================================================================
          SECTION 2: UPDATES & SOFTWARE (Split 50/50)
          ================================================================== */}
      <section className="py-16 bg-muted/20 border-b border-border/50">
        <style>{`
          @keyframes vertical-scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-vertical-scroll {
            animation: vertical-scroll 30s linear infinite;
          }
          .animate-vertical-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-red-100 rounded-lg">
                    <Activity className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">Updates & Resources</h2>
            </div>

            {/* SPLIT LAYOUT: LEFT = NEWS, RIGHT = SOFTWARE */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[500px]">
                
                {/* --- LEFT: LATEST NEWS --- */}
                <div className="h-[500px] bg-card border border-border rounded-2xl shadow-lg flex flex-col overflow-hidden relative">
                    <div className="p-5 border-b border-border bg-card z-10 flex justify-between items-center shadow-sm">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                            <Bell className="h-5 w-5 text-red-600" />
                            Latest News
                        </h3>
                        <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50">Live</Badge>
                    </div>

                    <div className="flex-1 overflow-hidden relative bg-gradient-to-b from-background to-muted/20">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />

                        <div className="animate-vertical-scroll p-4 space-y-4">
                            {[...NEWS_ITEMS, ...NEWS_ITEMS, ...NEWS_ITEMS].map((news, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white border border-border/50 hover:border-red-400 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="text-xs font-normal">{news.category}</Badge>
                                        <span className="text-xs text-muted-foreground flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {news.date}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-sm text-foreground group-hover:text-red-600 transition-colors line-clamp-2">
                                            {news.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                            {news.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- RIGHT: EDUCATIONAL SOFTWARE (Same style as News) --- */}
                <div className="h-[500px] bg-card border border-border rounded-2xl shadow-lg flex flex-col overflow-hidden relative">
                    <div className="p-5 border-b border-border bg-card z-10 flex justify-between items-center shadow-sm">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                            <Code className="h-5 w-5 text-blue-600" />
                            Educational Software
                        </h3>
                        <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">Open Source</Badge>
                    </div>

                    <div className="flex-1 overflow-hidden relative bg-gradient-to-b from-background to-muted/20">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />

                        {/* Duplicated array for seamless scrolling loop */}
                        <div className="animate-vertical-scroll p-4 space-y-4">
                            {[...SOFTWARE_ITEMS, ...SOFTWARE_ITEMS].map((soft, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white border border-border/50 hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-sm text-foreground group-hover:text-blue-600 transition-colors">
                                            {soft.title}
                                        </h4>
                                        <a href={soft.link} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center text-blue-600 hover:underline">
                                            <Download className="h-3 w-3 mr-1" />
                                            Download
                                        </a>
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-2 flex gap-2">
                                        <BookOpen className="h-4 w-4 shrink-0 mt-0.5" />
                                        <p className="italic leading-relaxed">
                                            "{soft.citation}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* ==================================================================
          SECTION 3: ABOUT OUR LAB
          ================================================================== */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Core Research Areas</h2>
              <div className="h-1 w-12 bg-red-600 rounded-full mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our lab focuses on the intersection of computational mechanics, optimization algorithms, and automated design frameworks to solve complex engineering problems.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESEARCH_AREAS.map((area, index) => (
              <div key={index} className="group relative bg-card hover:bg-white p-8 rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-6xl font-black text-muted-foreground/10 select-none mb-6 block group-hover:text-red-500/10 transition-colors duration-300">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-red-600 transition-colors">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                  <div className="pt-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="h-5 w-5 text-red-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          SECTION 4: CTA / FOOTER
          ================================================================== */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-amber-500/10 relative overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Join Our Research</h2>
            <p className="text-lg text-muted-foreground">We're always looking for talented researchers and students passionate about computational design and optimization.</p>
            <div className="pt-4">
              <Button variant="outline" className="rounded-full px-8 h-12 bg-background/50 backdrop-blur-sm">
                Contact Lab <MousePointer2 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
