import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Award, 
  BookOpen, 
  ScrollText, 
  Globe, 
  ArrowLeft,
  Briefcase,
  Users,
  Github // Imported Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MeshBackground } from "@/components/MeshBackground";
import { useNavigate } from "react-router-dom";

// Simple SVG Icons for academic platforms
const ResearchGateIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.91-1.215 1.606-.12.32-.17.638-.167 1.25.006.918 0 1.956 0 1.956l-3.32-1.996c-1.465-.92-2.31-1.222-3.562-1.222-2.22 0-3.928 1.14-4.82 3.125-.43.955-.562 1.836-.39 2.628.18.82 1.767 4.09 1.767 4.09l-1.63 1.03c-.933.585-1.393 1.09-1.393 1.92 0 .895.535 1.543 1.573 2.213 1.298.835 2.553 1.26 3.996 1.26 1.432 0 2.59-.446 3.32-1.127.76-.713 1.137-1.666 1.137-2.85 0-1.12-.497-2.196-1.336-3.11l-.22-.224c-.23-.235-.11-.325.28-.59.73-.497 2.21-1.21 2.38-1.25.13-.03.3-.06.51-.06.9 0 1.55.285 2.03.882.35.435.53.99.53 1.67 0 .58-.2 1.353-.615 2.12-.4.743-1.076 1.56-1.925 2.443-.13.136-.2.27-.2.4 0 .15.08.31.24.475.29.3.82.72 1.18.915.22.12.63.185.92.185.73 0 1.52-.375 2.22-1.03 1.27-1.18 2.39-3.23 2.92-5.46.25-1.03.37-2.07.37-3.07 0-2.35-.93-4.22-2.61-5.35C21.43.37 20.59 0 19.585 0zM7.7 6.36c.6.005 1.08.15 1.47.46.43.34.72.82.83 1.42.06.33.02.82-.1 1.28-.2.72-1.28 2.5-1.64 2.65-.11.045-.25.07-.41.07-.63 0-1.15-.17-1.53-.51-.43-.38-.68-.89-.72-1.52-.03-.43.07-.93.28-1.39.38-.85 1.13-1.4 1.82-1.46z"/></svg>
);

const OrcidIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.948.948 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.306v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/></svg>
);

const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
);

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
    email: "pkumar@mae.iith.ac.in", 
    location: "IIT Hyderabad, Kandi, Sangareddy - 502284",
    image: "/Images/Team/prabhat-kumar.png",
    
    // Add your links here
    socials: {
      researchGate: "https://www.researchgate.net/profile/Prabhat-Kumar-34", 
      orcid: "https://orcid.org/0000-0001-6812-9861",
      github: "https://github.com/PrabhatIn",
      googleScholar: "https://scholar.google.co.in/citations?user=sMc1rB0AAAAJ&hl=en"
    },
    
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
      "Multi-disciplinary/-scale Topology Optimization",
      "Structural Optimization",
      "Soft Robotics",
      "Data (AI/ML)-Driven Design", 
      "Compliant Mechanisms",
      "Inverse Design",
      "Computational Contact Mechanics",
      "Computational Mechanics"
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

    leadership: [
      { role: "Faculty-in-charge, Public relation", org: "IIT Hyderabad", year: "2024-27" },
      { role: "Conference Chair, iNaCoMM 2025", org: "IIT Hyderabad", year: "2024-25" },
      { role: "Member, Program Committee, Advances in Robotics (AIR)", org: "IIT Jodhpur", year: "2025" },
      { role: "Member, Technical Committee, ICRAME 2025", org: "IIT Jodhpur, LNMIIT, MNIT", year: "2024-25" },
      { role: "Member, Technical Committee, INCMDAO 2024", org: "IISc-Bengaluru", year: "2024" },
      { role: "Member, Technical Committee, NCMDAO 2023", org: "IIT Guwahati", year: "2022" },
      { role: "Faculty-in-charge, EV Technology online M. Tech Program", org: "IIT Hyderabad", year: "2023-Present" },
      { role: "Faculty-in-charge, Aeolus Racing team", org: "IIT Hyderabad", year: "2023-Present" },
      { role: "Faculty-in-charge, MAE Dept. Alumni", org: "IIT Hyderabad", year: "2022-Present" },
      { role: "Member, Organizing & Technical Committees, SICE 2022", org: "IIT Hyderabad", year: "2022" },
      { role: "Member, Organizing & Technical Committees, MAMM 2022", org: "IIT Hyderabad", year: "2022" },
      { role: "Member, Technical Committees, NFEST 2019", org: "NIT Kurukshetra", year: "2019" },
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
            className="mb-8 hover:bg-orange-50 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
          </Button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* LEFT COLUMN: Image + Socials */}
            <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                {/* Profile Image */}
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-background shadow-xl bg-muted">
                  <img 
                    src={PROFILE.image} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Prabhat+Kumar&background=random"; 
                    }}
                  />
                </div>

                {/* Social Media Logos Row */}
                <div className="flex gap-3 justify-center w-full">
                    {/* ResearchGate */}
                    <a href={PROFILE.socials.researchGate} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white border border-gray-200 text-[#00CCBB] hover:scale-110 transition-transform shadow-sm hover:shadow-md" title="ResearchGate">
                        <ResearchGateIcon className="h-5 w-5" />
                    </a>
                    {/* ORCID */}
                    <a href={PROFILE.socials.orcid} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white border border-gray-200 text-[#A6CE39] hover:scale-110 transition-transform shadow-sm hover:shadow-md" title="ORCID">
                        <OrcidIcon className="h-5 w-5" />
                    </a>
                    {/* GitHub */}
                    <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white border border-gray-200 text-gray-800 hover:scale-110 transition-transform shadow-sm hover:shadow-md" title="GitHub">
                        <Github className="h-5 w-5" />
                    </a>
                    {/* Google Scholar */}
                    <a href={PROFILE.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white border border-gray-200 text-[#4285F4] hover:scale-110 transition-transform shadow-sm hover:shadow-md" title="Google Scholar">
                        <GoogleScholarIcon className="h-5 w-5" />
                    </a>
                </div>
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

          {/* RIGHT CONTENT (Bio, Awards, Leadership, Service) */}
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

            {/* NEW: Leadership & Administrative Roles */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Leadership (Academic & Administrative)
              </h2>
              <div className="grid gap-4">
                {PROFILE.leadership.map((role, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-card border border-border/50 hover:border-primary/40 transition-colors">
                    <div className="mb-2 sm:mb-0">
                      <div className="font-semibold text-foreground">{role.role}</div>
                      <div className="text-sm text-muted-foreground">{role.org}</div>
                    </div>
                    <Badge variant="outline" className="w-fit bg-primary/5 text-primary border-primary/20">
                      {role.year}
                    </Badge>
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