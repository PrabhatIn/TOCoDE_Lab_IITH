import { Card } from "@/components/ui/card";
import { MeshBackground } from "@/components/MeshBackground";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { 
  Mail, 
  GraduationCap, 
  User, 
  School, 
  MapPin,
  ArrowRight,
  ExternalLink,
  Briefcase
} from "lucide-react";

const Team = () => {
  const navigate = useNavigate(); // Hook for navigation

  // PRINCIPAL INVESTIGATOR DATA
  const pi = {
    name: "Prabhat Kumar",
    role: "Assistant Professor",
    department: "Mechanical & Aerospace Engineering",
    phd: "IIT Kanpur",
    email: "pkumar@mae.iith.ac.in", 
    image: "/Images/Team/prabhat-kumar.png", 
    bio: "Leading the research group in topology optimization and computational mechanics.",
    interests: [
      "Topology Optimization",
      "Structural Optimization",
      "Compliant Mechanisms",
      "Inverse Problems",
      "Computational Contact Mechanics",
      "AI/ML",
    ],
    address: [
      "Room: C-610, Academic Block C",
      "IIT Hyderabad",
      "Kandi-502284, Sangareddy",
    ]
  };

  // CURRENT MEMBERS DATA
  const phdStudents = [
    { name: "Swagatam Islam Sarkar", role: "PhD Scholar", image: "/Images/Team/Swagatam.jpg" },
    { name: "Sukka Siddhardha", role: "PhD Scholar", image: "/Images/Team/sukka.jpg" },
  ];

  const mtechStudents = [
    { name: "Aryuemaan Kumar Chowdhury", role: "M.Tech Student", image: "/Images/Team/Ary.jpg" },
    { name: "Supantha Chaudhuri", role: "M.Tech Student", image: "/Images/Team/Supantha.png" },
    { name: "Chinmay Kishor Shrirame", role: "M.Tech Student", image: "/Images/Team/Chinmay.jpg" },
    { name: "Gopaljit Raj", role: "M.Tech Student", image: "/Images/Team/Gopaljit.png" },
    { name: "Nikhil Vijay Chavan", role: "M.Tech Student", image: "/Images/Team/Nikhil.jpg" },
  ];

  // UPDATED: A. Padmaprabhan moved here as B.Tech
  const btechStudents = [
     { name: "A. Padmaprabhan", role: "B.Tech Student", image: "/Images/Team/Padmaprabhan.png" },
  ];

  // ALUMNI DATA (Previous Alumni)
  const alumni = [
    { name: "Khaish Singh Chadha", desc: "M. Tech student, IIT-H" },
    { name: "Dehlia Menge", desc: "MSc student, TU Delft" },
    { name: "Shawn Dmello", desc: "MSc student, TU Delft" },
    { name: "Aditi Agarwal", desc: "B. Tech student, IIT-H" },
  ];

  // PASSED OUT STUDENTS
  const passedOutStudents = [
    // M.Tech
    { name: "Duru Bhargav Kumar", role: "M.Tech", company: "Aerospace Dynamics Ltd." },
    { name: "Aishwarya Desai", role: "M.Tech", company: "Skyroot Aerospace" },
    { name: "Amal Shaji", role: "M.Tech", company: "Boeing India" },
    
    // B.Tech
    { name: "Shriram Hari", role: "B.Tech", company: "-" },
    { name: "Gunna Trishna", role: "B.Tech", company: "-" },
  ];

  // Handler for clicking the PI Card
  const handlePIClick = () => {
    navigate("/prabhat-kumar"); 
  };

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
            
            {/* CLICKABLE CARD WRAPPER */}
            <div 
              onClick={handlePIClick}
              className="group cursor-pointer relative bg-card border border-border hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                
                {/* Image Section */}
                <div className="md:w-1/3 relative overflow-hidden bg-muted">
                  <img 
                    src={pi.image} 
                    alt={pi.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Prabhat+Kumar&background=random"; 
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
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

          {/* 2. CURRENT MEMBERS SECTION */}
          <div className="max-w-6xl mx-auto space-y-20">
            
            <StudentGroup title="PhD Scholars" icon={School} students={phdStudents} />
            <StudentGroup title="M.Tech Students" icon={GraduationCap} students={mtechStudents} />
            
            {/* Updated B.Tech Section with A. Padmaprabhan */}
            {btechStudents.length > 0 && (
                <StudentGroup title="B.Tech Students" icon={User} students={btechStudents} />
            )}

          </div>
        </div>
      </section>

      {/* 3. PASSED OUT STUDENTS SECTION */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Briefcase className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">Passed Out Students</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {passedOutStudents.map((student, index) => (
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

      {/* 4. ALUMNI SECTION */}
      <section className="py-20 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <span className="h-1 w-8 bg-muted-foreground/50 rounded-full"></span>
              Alumni Network
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alumni.map((alum, index) => (
                <div key={index} className="group flex items-center justify-between p-5 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{alum.name}</h3>
                    <p className="text-sm text-muted-foreground">{alum.desc}</p>
                  </div>
                  <GraduationCap className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary/30 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Component for Student Groups
const StudentGroup = ({ title, icon: Icon, students }: { title: string, icon: any, students: any[] }) => (
  <div>
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-primary/10 rounded-lg text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  </div>
);

// Minimalist Student Card
const StudentCard = ({ student }: { student: { name: string; role: string; image: string } }) => (
  <div className="group relative flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-md">
    <div className="aspect-[4/5] w-full bg-muted overflow-hidden relative">
      <img 
        src={student.image} 
        alt={student.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=random&color=fff`; 
        }}
      />
    </div>
    <div className="p-4 bg-card z-10 border-t border-border">
      <h3 className="font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1" title={student.name}>
        {student.name}
      </h3>
      <p className="text-xs font-medium text-muted-foreground mt-1 uppercase tracking-wide">
        {student.role}
      </p>
    </div>
  </div>
);

export default Team;
