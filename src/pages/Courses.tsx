import { Card } from "@/components/ui/card";
import { MeshBackground } from "@/components/MeshBackground";
import { BookOpen, GraduationCap, FlaskConical } from "lucide-react";

const Courses = () => {
  // Flattened list of courses (no year grouping)
  const courses = [
    {
      code: "ME5899",
      name: "Structural Optimization",
      level: "Postgraduate (PG)",
      type: "Theory",
    },
    {
      code: "LW5020",
      name: "Topology Optimization",
      level: "Postgraduate (PG)",
      type: "Theory",
    },
    {
      code: "ME2110",
      name: "Solid Mechanics",
      level: "Postgraduate (PG)",
      type: "Theory",
    },
    {
      code: "ME5021",
      name: "Vibration Lab",
      level: "Postgraduate (PG)",
      type: "Lab",
    },
    {
      code: "ME4435",
      name: "Dynamics Lab",
      level: "Undergraduate (UG)",
      type: "Lab",
    },
    {
      code: "ME3445",
      name: "Finite Element Method Lab",
      level: "Undergraduate (UG)",
      type: "Lab",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="relative py-20 overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Teaching</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Academic courses and laboratory sessions delivered
            </p>
          </div>

          {/* Course List - Flattened Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-muted hover:border-l-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Course Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-0.5 bg-muted text-foreground text-xs font-bold uppercase tracking-wider rounded">
                          {course.code}
                        </span>
                        <span className={`px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1 ${
                          course.type === 'Lab' 
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' 
                            : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        }`}>
                          {course.type === 'Lab' ? <FlaskConical className="h-3 w-3" /> : <BookOpen className="h-3 w-3" />}
                          {course.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{course.name}</h3>
                    </div>

                    {/* Level Badge */}
                    <div className="flex items-center gap-2 text-muted-foreground bg-secondary/30 px-4 py-2 rounded-lg whitespace-nowrap">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{course.level}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Resources Section (Optional Context) */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-foreground">Course Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:border-primary/50 transition-colors">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Lecture Material</h3>
                <p className="text-sm text-muted-foreground">Access slides and notes via the institute portal</p>
              </Card>
              <Card className="p-6 text-center hover:border-primary/50 transition-colors">
                <FlaskConical className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Lab Manuals</h3>
                <p className="text-sm text-muted-foreground">Protocols and software guides for practical sessions</p>
              </Card>
              <Card className="p-6 text-center hover:border-primary/50 transition-colors">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">Weekly consultation hours for student guidance</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
