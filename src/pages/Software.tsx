import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/MeshBackground";

const Software = () => {
  const softwareList = [
    {
      title: "HoneyTop90",
      citation: "P. Kumar (2023): HoneyTop90: A 90-line MATLAB code for topology optimization using honeycomb tessellation, Optimization and Engineering 24 (2), 1433-1460",
      link: "https://github.com/PrabhatIn/HoneyTop90",
      isEmail: false,
    },
    {
      title: "TOPress",
      citation: "P. Kumar (2023): TOPress: a MATLAB implementation for topology optimization of structures subjected to design-dependent pressure loads, Structural and Multidisciplinary Optimization volume 66, Article number: 97 (2023)",
      link: "https://github.com/PrabhatIn/TOPress",
      isEmail: false,
    },
    {
      title: "SoRoTop",
      citation: "P. Kumar (2024): SoRoTop: a hitchhiker's guide to topology optimization MATLAB code for design-dependent pneumatic-driven soft robots, Optimization and Engineering 25 (4), 2473–2507",
      link: "https://github.com/PrabhatIn/SoRoTop",
      isEmail: false,
    },
    {
      title: "TOPress3D",
      citation: "P. Kumar (2025): TOPress3D: 3D topology optimization with design-dependent pressure loads in MATLAB, Optimization and Engineering 26(3), 1113-1141",
      link: "https://github.com/PrabhatIn/TOPress3D",
      isEmail: false,
    },
    {
      title: "PyHexTop",
      citation: "A. Agarwal, A. Saxena, P. Kumar (2023): PyHexTop: a compact Python code for topology optimization using hexagonal elements, Advances in Multidisciplinary Design, Analysis and Optimization",
      link: "https://github.com/PrabhatIn/PyHexTop",
      isEmail: false,
    },
    {
      title: "PyTOPress",
      citation: "S. Saxena, SI Sarkar, P. Kumar (2024): PyTOPress: Python code for topology optimization with design-dependent pressure loads",
      link: "mailto:pkumar@mae.iith.ac.in",
      isEmail: true,
    },
    {
      title: "topQ8, topQ9, topQ8CM",
      citation: "SI Sarkar, P Kumar (2025): Topology Optimization With Quadrilateral Elements: A Comparative Study, Codes, and Tutorials, Computer Applications in Engineering Education 33 (3), e70031",
      link: "https://github.com/PrabhatIn/PyHexTop",
      isEmail: false,
    },
  ];

  const handleDownload = (link: string, isEmail: boolean) => {
    if (isEmail) {
      window.location.href = link;
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="relative py-24 overflow-hidden">
        <MeshBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-primary/5">
              <span className="text-primary text-sm font-bold tracking-widest uppercase">
                Open Source Research Tools
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                SOFTWARE
              </span>
            </h1>
            
            <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed">
              <p className="mb-4">
                One of the goals of the T0CoDE lab is to develop simple and efficient codes for education and research purposes for free. These codes will help newcomers to learn and explore topology optimization methods for different applications.
              </p>
            </div>

            {/* Disclaimer Box */}
            <div className="mt-8 max-w-2xl mx-auto p-6 border-l-4 border-primary bg-muted/30 text-left rounded-r-lg">
              <p className="text-sm md:text-base text-foreground font-medium">
                Note: Software provided here are for academic or educational use only. All rights of reproduction or distribution in any form are reserved.
              </p>
            </div>
          </div>

          {/* Software Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {softwareList.map((tool, index) => (
              <Card 
                key={index}
                className="group relative p-8 border-muted hover:border-primary/50 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between bg-card/50 backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {tool.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg border-l-2 border-border pl-4">
                    {tool.citation}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                    FREE
                  </span>
                  <Button 
                    variant="default" 
                    className="font-bold tracking-wide"
                    onClick={() => handleDownload(tool.link, tool.isEmail)}
                  >
                    {tool.isEmail ? "REQUEST ACCESS" : "DOWNLOAD CODES"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Software;