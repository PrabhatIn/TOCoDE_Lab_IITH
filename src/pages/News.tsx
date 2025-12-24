import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Positions = () => {
  const openPositions = [
    {
      title: "PhD Position",
      type: "Graduate",
      description: "Seeking motivated PhD candidates in topology optimization and computational mechanics",
      requirements: ["Strong background in mechanical engineering or related field", "Programming experience (Python/MATLAB)", "Interest in numerical methods and optimization"],
      deadline: "Rolling basis",
    },
    {
      title: "Postdoctoral Researcher",
      type: "Postdoc",
      description: "Looking for postdoctoral researchers to work on contact-aided compliant mechanisms",
      requirements: ["PhD in Mechanical Engineering, Applied Mechanics, or related field", "Publications in topology optimization", "Experience with finite element analysis"],
      deadline: "March 31, 2024",
    },
    {
      title: "Masters Student",
      type: "Graduate",
      description: "Multiple positions for Masters students interested in computational design",
      requirements: ["Bachelors in Mechanical Engineering", "Strong analytical and programming skills", "Enthusiasm for research"],
      deadline: "Rolling basis",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Open Positions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our team and contribute to cutting-edge research
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
              >
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                        {position.type}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Deadline: {position.deadline}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{position.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="gradient-primary hover:opacity-90">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">World-Class Research</h3>
                    <p className="text-muted-foreground text-sm">
                      Work on cutting-edge projects with international collaborations
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Competitive Funding</h3>
                    <p className="text-muted-foreground text-sm">
                      Generous stipends and research grants for all positions
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Modern Facilities</h3>
                    <p className="text-muted-foreground text-sm">
                      Access to state-of-the-art computational resources and labs
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Career Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Strong alumni network and career placement support
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Positions;
