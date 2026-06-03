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
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=HoneyTop90\nVisualization",
      paperLink: "https://arxiv.org/pdf/2201.10248v3",
    },
    {
      title: "TOPress",
      citation: "P. Kumar (2023): TOPress: a MATLAB implementation for topology optimization of structures subjected to design-dependent pressure loads, Structural and Multidisciplinary Optimization volume 66, Article number: 97 (2023)",
      link: "https://github.com/PrabhatIn/TOPress",
      isEmail: false,
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=TOPress\nVisualization",
      paperLink: "https://arxiv.org/pdf/2405.07733v2",
    },
    {
      title: "SoRoTop",
      citation: "P. Kumar (2024): SoRoTop: a hitchhiker's guide to topology optimization MATLAB code for design-dependent pneumatic-driven soft robots, Optimization and Engineering 25 (4), 2473–2507",
      link: "https://github.com/PrabhatIn/SoRoTop",
      isEmail: false,
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=SoRoTop\nVisualization",
      paperLink: "https://arxiv.org/pdf/2401.03372",
    },
    {
      title: "TOPress3D",
      citation: "P. Kumar (2025): TOPress3D: 3D topology optimization with design-dependent pressure loads in MATLAB, Optimization and Engineering 26(3), 1113-1141",
      link: "https://github.com/PrabhatIn/TOPress3D",
      isEmail: false,
      image: "/Images/4.png", // Updated local path
      paperLink: "https://link.springer.com/article/10.1007/s11081-024-09931-2",
    },
    {
      title: "PyHexTop",
      citation: "A. Agarwal, A. Saxena, P. Kumar (2023): PyHexTop: a compact Python code for topology optimization using hexagonal elements, Advances in Multidisciplinary Design, Analysis and Optimization",
      link: "https://github.com/PrabhatIn/PyHexTop",
      isEmail: false,
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=PyHexTop\nVisualization",
      paperLink: "https://arxiv.org/abs/2310.01968",
    },
    {
      title: "PyTOPress",
      citation: "S. Saxena, SI Sarkar, P. Kumar (2024): PyTOPress: Python code for topology optimization with design-dependent pressure loads",
      link: "mailto:pkumar@mae.iith.ac.in",
      isEmail: true,
      image: "/Images/66.png", // Updated local path
      paperLink: "https://link.springer.com/chapter/10.1007/978-981-95-1723-7_1",
    },
    {
      title: "topQ8, topQ9, topQ8CM",
      citation: "SI Sarkar, P Kumar (2025): Topology Optimization With Quadrilateral Elements: A Comparative Study, Codes, and Tutorials, Computer Applications in Engineering Education 33 (3), e70031",
      link: "https://github.com/PrabhatIn/PyHexTop",
      isEmail: false,
      image: "/Images/6.png", // Updated local path
      paperLink: "https://onlinelibrary.wiley.com/doi/10.1002/cae.70031?msockid=0f36cda0202b60520d99d82b218661fd",
    },
  ];

  const handleDownload = (link: string, isEmail: boolean) => {
    if (isEmail) {
      window.location.href = link;
    } else {
      window.open(link, "_blank");
    }
  };

  const handlePaper = (link: string) => {
    window.open(link, "_blank");
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

          {/* Software List (1 by 1 Layout) */}
          <div className="flex flex-col gap-10 max-w-5xl mx-auto">
            {softwareList.map((tool, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-muted hover:border-primary/50 transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row bg-card/50 backdrop-blur-sm"
              >
                {/* Decorative border line */}
                <div className="absolute top-0 left-0 w-full h-1 md:w-1 md:h-full bg-primary transform origin-left md:origin-top scale-x-0 md:scale-x-100 md:scale-y-0 md:group-hover:scale-y-100 transition-transform duration-500 z-10" />
                
                {/* Image Section */}
                <div className="w-full md:w-1/3 min-h-[250px] relative bg-muted/50 overflow-hidden flex-shrink-0">
                  <img 
                    src={tool.image} 
                    alt={`${tool.title} visualization`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {tool.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg border-l-2 border-border pl-4">
                      {tool.citation}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded w-max">
                      FREE
                    </span>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline" 
                        className="font-bold tracking-wide"
                        onClick={() => handlePaper(tool.paperLink)}
                      >
                        READ PAPER
                      </Button>
                      <Button 
                        variant="default" 
                        className="font-bold tracking-wide"
                        onClick={() => handleDownload(tool.link, tool.isEmail)}
                      >
                        {tool.isEmail ? "REQUEST ACCESS" : "DOWNLOAD CODES"}
                      </Button>
                    </div>
                  </div>
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
