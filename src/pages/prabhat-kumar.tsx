import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  BookOpen, 
  ScrollText, 
  Globe, 
  ArrowLeft,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MeshBackground } from "@/components/MeshBackground";
import { useNavigate } from "react-router-dom";

const PrabhatProfile = () => {
  const navigate = useNavigate();

  // ==========================================
  // DATA CONSTANTS
  // ==========================================

  const PROFILE = {
    name: "Prabhat Kumar",
    role: "Assistant Professor",
    department: "Department of Mechanical and Aerospace Engineering",
    university: "Indian Institute of Technology Hyderabad",
    email: "prabhat@mae.iith.ac.in", 
    location: "IIT Hyderabad, Kandi, Sangareddy - 502284",
    image: "/Images/Team/prabhat-kumar.png", 
    
    // Bio split for readability
    bio: [
      "I am an Assistant Professor in the Department of Mechanical and Aerospace Engineering at the Indian Institute of Technology Hyderabad. I completed my Bachelor's and Ph.D. in Mechanical Engineering at NIT Warangal and IIT Kanpur respectively.",
      "I held post-doctoral positions at TU Delft with Prof. Matthijs Langelaar, at Denmark Technical University with Prof. Ole Sigmund, and at Technion-IIT Israel with Prof. Oded Amir and Prof. Gal Shmuel. And, I was a Ramanujan fellow faculty at Mechanical Engineering Dept, IISc, Bangalore."
    ],

    education: [
      { degree: "Ph.D. Mechanical Engineering", school: "IIT Kanpur" },
      { degree: "B.Tech Mechanical Engineering", school: "NIT Warangal" },
    ],

    interests: [
      "Topology Optimization",
      "Structural Optimization",
      "Compliant Mechanisms",
      "Inverse Design",
      "Soft Robotics",
      "Computational Mechanics",
      "Computer Methods in Applied Mechanics and Engineering",
      "Advanced Robotics Research",
      "Computational Contact Mechanics"
    ],

    awards: [
      { title: "Editorial Board Member, Scientific Reports", year: "April 2025-Present" },
      { title: "International Travel Grant, SERB, Govt. of India", year: "2023" },
      { title: "Ramanujan Fellowship, SERB, Govt. of India", year: "2020" },
      { title: "Young Delegates Program Fellowship, Asian MMS Conference", year: "2018" },
      { title: "International Travel Grant, SERB, Govt. of India", year: "2016" },
      { title: "Young Delegates Program Fellowship, MAMM Conference, Germany", year: "2016" },
      { title: "Honorable mentioned fast forward presentation award, IDETC, ASME", year: "2015" },
      { title: "Performance award, Kirloskar Oil Engine Ltd. Pune", year: "2011" },
      { title: "Merit awards, NIT Warangal", year: "2006, 2007" },
    ],

    journals: [
      "International Journal for Numerical Methods in Engineering",
      "Structural and Multidisciplinary Optimization Journal",
      "Computer Methods in Applied Mechanics and Engineering",
      "Engineering with Computers",
      "npj Artificial Intelligence - Nature",
      "Journal of The Royal Society Interface",
      "Journal of Mechanical Design",
      "Journal of Mechanisms and Robotics",
      "Finite Elements in Analysis & Design",
      "Mechanism and Machine Theory Journal",
      "Journal of Computational Design and Engineering",
      "Applied Mathematical Modelling Journal",
      "Journal of Manufacturing Science and Engineering",
      "Mechanics Based Design of Structures and Machines Journal",
      "Computer-Aided Design",
      "Optimization and Engineering Journal",
      "Advanced Intelligent Systems",
      "Engineering Optimization",
      "Scientific Reports",
      "Materials Today: Proceedings",
      "Micromachines",
      "Materials & Design",
      "Advanced Robotics Research"
    ]
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-orange-100 pb-20">
      
      {/* ==========================================
          HEADER / HERO
      ========================================== */}
      <div className="relative pt-24 pb-12 overflow-hidden border-b border-border/40">
        <MeshBackground />
        <div className="container mx-auto px-4 relative z-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)} // Go back history
            // UPDATED: Added hover:text-orange-600 and hover:bg-orange-50
            className="mb-8 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
          </Button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Image - Large and Clean */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-background shadow-xl shrink-0 bg-muted">
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Prabhat+Kumar&background=random"; 
                }}
              />
            </div>
            
            {/* Name and Title */}
            <div className="pt-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-2">
                {PROFILE.name}
              </h1>
              <div className="text-xl text-primary font-medium mb-1">
                {PROFILE.role}
              </div>
              <div className="text-muted-foreground text-lg mb-4">
                {PROFILE.department}, {PROFILE.university}
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  {PROFILE.email}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {PROFILE.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          MAIN CONTENT GRID
      ========================================== */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT SIDEBAR (Sticky on large screens) */}
          <div className="space-y-8 lg:sticky lg:top-24 h-fit">
            
            {/* Education Box */}
            <Card className="p-6 border-l-4 border-l-primary shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {PROFILE.education.map((edu, i) => (
                  <div key={i}>
                    <div className="font-semibold text-foreground">{edu.school}</div>
                    <div className="text-sm text-muted-foreground">{edu.degree}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Research Interests */}
            <div>
              <h3 className="flex items-center gap-2 font-bold text-lg mb-4 text-foreground">
                <BookOpen className="h-5 w-5 text-primary" />
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {PROFILE.interests.map((item, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    // UPDATED: Changed background to light orange and text to dark orange
                    className="px-3 py-1.5 text-sm font-medium bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors cursor-default border border-orange-100"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Global Experience Summary */}
            <Card className="p-6 bg-muted/30 border-dashed">
                <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
                    <Globe className="h-5 w-5 text-primary" />
                    Global Experience
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>• <strong className="text-foreground">TU Delft</strong> (Netherlands)</li>
                    <li>• <strong className="text-foreground">DTU</strong> (Denmark)</li>
                    <li>• <strong className="text-foreground">Technion</strong> (Israel)</li>
                    <li>• <strong className="text-foreground">IISc Bangalore</strong> (India)</li>
                </ul>
            </Card>

          </div>

          {/* RIGHT CONTENT (Bio, Awards, Service) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Biography */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Biography
              </h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed text-lg">
                {PROFILE.bio.map((paragraph, i) => (
                  <p key={i} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Awards & Recognitions */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Key Recognitions & Awards
              </h2>
              <div className="space-y-4">
                {PROFILE.awards.map((award, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/40 transition-colors">
                    <div className="font-mono text-primary font-bold whitespace-nowrap pt-0.5">
                      {award.year}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{award.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Service / Reviewer */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ScrollText className="h-6 w-6 text-primary" />
                Professional Service
              </h2>
              <Card className="p-8">
                <h3 className="font-semibold text-lg mb-6 text-muted-foreground">
                  Reviewer for International Journals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {PROFILE.journals.map((journal, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{journal}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrabhatProfile;
