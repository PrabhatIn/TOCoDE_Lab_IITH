import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { MeshBackground } from "@/components/MeshBackground";
import { useNavigate } from "react-router-dom"; 
import { 
  Mail, 
  GraduationCap, 
  User, 
  School, 
  MapPin,
  ArrowRight,
  ExternalLink,
  Briefcase,
  Linkedin,
  Award
} from "lucide-react";

// Helper function to safely resolve public asset paths with GitHub Pages base URL
const getAssetUrl = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

const Team = () => {
  const navigate = useNavigate(); 
  const [activeTab, setActiveTab] = useState("All Members");

  // PRINCIPAL INVESTIGATOR DATA
  const pi = {
    name: "Prabhat Kumar",
    role: "Assistant Professor",
    department: "Mechanical & Aerospace Engineering",
    phd: "IIT Kanpur",
    email: "pkumar@mae.iith.ac.in", 
    image: getAssetUrl("Images/Team/prabhat-kumar.png"), 
    bio: "Leading the research group in topology optimization and computational mechanics.",
    interests: [
      "Topology Optimization",
      "Structural Optimization",
      "Soft Robotics",
      "Data (AI/ML)-Driven Design",
      "Compliant Mechanisms",
      "Inverse Design",
      "Computational Mechanics",
      "Computational Contact Mechanics"
    ],
    address: [
      "Room: C-610, Academic Block C",
      "IIT Hyderabad",
      "Kandi-502284, Sangareddy",
    ]
  };

  // POSTDOC RESEARCHERS
  const postdocs = [
    { name: "Rama Reddy", role: "Postdoctoral Researcher", image: getAssetUrl("Images/Team/RamaReddy.jpg") },
  ];

  // PHD SCHOLARS
  const phdStudents = [
    { name: "Swagatam Islam Sarkar", role: "PhD Scholar", image: getAssetUrl("Images/Team/Swagatam.jpg"), linkedin: "https://www.linkedin.com/in/swagatam-islam-sarkar-0b7832107" },
    { name: "Raghvendra K", role: "PhD Scholar", image: getAssetUrl("Images/Team/Raghvendra.jpg") },
    { name: "Sukka Siddhardha", role: "PhD Scholar", image: getAssetUrl("Images/Team/sukka.jpg") },
    { name: "Aman", role: "PhD Scholar", image: getAssetUrl("Images/Team/Aman.jpg") },
    { name: "Bhargav Kumar", role: "PhD Scholar", image: getAssetUrl("Images/Team/Bhargav.jpg") },
  ];

  // M.TECH STUDENTS
  const mtechStudents = [
    { name: "Arundhati Sonawane", role: "M.Tech Student", image: getAssetUrl("Images/Team/Aru.png") }, 
    { name: "Aryuemaan Kumar Chowdhury", role: "M.Tech Student", image: getAssetUrl("Images/Team/Ary.jpg"), linkedin: "https://www.linkedin.com/in/aryuemaanchowdhury/" },
    { name: "Ninad Joshi", role: "M.Tech Student", image: getAssetUrl("Images/Team/Ninad.jpg") },
    { name: "Prashanth M", role: "M.Tech Student", image: getAssetUrl("Images/Team/Prashanth.jpg") },
  ];

  // B.TECH STUDENTS
  const btechStudents: { name: string; role: string; image: string; linkedin?: string }[] = [];

  // FORMER MEMBERS
  const formerMembers = [
    { name: "Duru Bhargav Kumar", role: "M.Tech", company: "-" },
    { name: "Aishwarya Desai", role: "M.Tech", company: "-" },
    { name: "Amal Shaji", role: "M.Tech", company: "-" },
    { name: "Shriram Hari", role: "B.Tech", company: "-" },
    { name: "Gunna Trishna", role: "B.Tech", company: "-" },
    { name: "Khaish Singh Chadha", role: "M.Tech student, IIT-H", company: "-" },
    { name: "Dehlia Menge", role: "MSc student, TU Delft", company: "-" },
    { name: "Shawn Dmello", role: "MSc student, TU Delft", company: "-" },
    { name: "Aditi Agarwal", role: "B.Tech student, IIT-H", company: "-" },
    { name: "A. Padmaprabhan", role: "B.Tech", company: "-" },
    { name: "Joel J Nellikkunnel", role: "B.Tech", company: "-" },
    { name: "Pardu", role: "B.Tech", company: "-" },
    { name: "Chinmay Kishor Shrirame", role: "M.Tech", company: "-" },
    { name: "Gopaljit Raj", role: "M.Tech", company: "-" },
    { name: "Avinash Yadav", role: "M.Tech", company: "-" },
    { name: "Mukki Prasanth Raju", role: "M.Tech", company: "-" },
    { name: "Nikhil Vijay Chavan", role: "M.Tech", company: "-" },
  ];

  const handlePIClick = () => {
    navigate("/prabhat-kumar"); 
  };

  const FILTER_TABS = ["All Members", "Postdoc", "PhDs", "M.Tech Students", "B.Tech Students"];

  return (
    <div className="min-h-screen pt-20 bg-background font-sans selection:bg-primary/10">
      <section className="relative py-16 overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 border-b border-border/40 pb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Our Team
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              The minds behind the innovation at ToCoDE Lab.
            </p>
          </div>

          {/* 1. PRINCIPAL INVESTIGATOR SECTION */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h2 className="text-xl font-bold text-foreground uppercase tracking-widest">Principal Investigator</h2>
            </div>
            
            <div 
              onClick={handlePIClick}
              className="group cursor-pointer relative bg-card border border-border hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative overflow-hidden bg-muted min-h-[300px]">
                  <img 
                    src={pi.image} 
                    alt={pi.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(pi.name)}&background=random`; 
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">{pi.name}</h3>
                        <p className="text-lg text-muted-foreground font-medium mt-1">{pi.role}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <div className="mt-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {pi.bio}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {pi.interests.map((interest, index) => (
                          <span 
                            key={index}
                            className="px-2.5 py-1 rounded border border-border text-xs font-medium text-muted-foreground bg-muted/20"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      {pi.email}
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span>{pi.address[0]}, {pi.address[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. CURRENT MEMBERS SECTION WITH TABS */}
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-border/50 pb-6">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeTab === tab 
                      ? "bg-primary text-white border-primary shadow-md" 
                      : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Rendered Groups based on Active Tab */}
            <div className="space-y-16">
              {(activeTab === "All Members" || activeTab === "Postdoc") && postdocs.length > 0 && (
                <StudentGroup title="Postdoctoral Researcher" icon={Award} students={postdocs} />
              )}

              {(activeTab === "All Members" || activeTab === "PhDs") && phdStudents.length > 0 && (
                <StudentGroup title="PhD Scholars" icon={School} students={phdStudents} />
              )}
              
              {(activeTab === "All Members" || activeTab === "M.Tech Students") && mtechStudents.length > 0 && (
                <StudentGroup title="M.Tech Students" icon={GraduationCap} students={mtechStudents} />
              )}
              
              {(activeTab === "All Members" || activeTab === "B.Tech Students") && btechStudents.length > 0 && (
                <StudentGroup title="B.Tech Students" icon={User} students={btechStudents} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMER MEMBERS SECTION */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Briefcase className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">Former Members</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formerMembers.map((student, index) => (
                        <div key={index} className="flex flex-col p-6 bg-background border border-border rounded-xl hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                            <h3 className="font-bold text-lg text-foreground mb-1">{student.name}</h3>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                                    {student.role}
                                </span>
                            </div>
                            <div className="mt-auto pt-4 border-t border-border/50">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Current Role</p>
                                <p className="font-medium text-primary flex items-center gap-2">
                                    <Briefcase className="h-3 w-3" />
                                    {student.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

// Member Group Container
const StudentGroup = ({ title, icon: Icon, students }: { title: string, icon: any, students: any[] }) => (
  <div className="animate-in fade-in duration-500">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  </div>
);

// Individual Member Card
const StudentCard = ({ student }: { student: { name: string; role: string; image: string; linkedin?: string } }) => (
  <div className="group relative flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-md">
    <div className="aspect-[4/5] w-full bg-muted overflow-hidden relative">
      <img 
        src={student.image} 
        alt={student.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random&color=fff`; 
        }}
      />
    </div>
    <div className="p-4 bg-card z-10 border-t border-border flex justify-between items-center">
      <div className="flex-1 pr-2">
        <h3 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1" title={student.name}>
          {student.name}
        </h3>
        <p className="text-xs font-medium text-muted-foreground mt-1 uppercase tracking-wide">
          {student.role}
        </p>
      </div>
      {student.linkedin && (
        <a 
          href={student.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-[#0a66c2] transition-colors"
          title={`LinkedIn - ${student.name}`}
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
    </div>
  </div>
);

export default Team;