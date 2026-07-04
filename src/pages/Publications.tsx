import { Card } from "@/components/ui/card";
import { MeshBackground } from "@/components/MeshBackground";
import { ExternalLink, BookOpen, FileText, Presentation } from "lucide-react";

const Research = () => {
  // Data structure grouped by Category -> Year -> Papers
  const publications = [
    {
      category: "Journal Publications",
      icon: FileText,
      years: [
                {
          year: "2025",
          items: [
            {
              title: "Topology Optimization With Quadrilateral Elements: A Comparative Study, Codes, and Tutorials",
              authors: " SI Sarkar, P Kumar",
              venue: "Computer Applications in Engineering Education",
              link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/cae.70031"
            },
            {
              title: "Normalized field product approach: A parameter-free density evaluation method for close-to-binary solutions in topology optimization with embedded length scale",
              authors: "N Singh, P Kumar, A Saxena",
              venue: "International Journal for Numerical Methods in Engineering",
              link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/nme.7673"
            },
            {
              title: "TOPress3D: 3D topology optimization with design-dependent pressure loads in MATLAB",
              authors: "P Kumar",
              venue: "Optimization and Engineering",
              link: "https://link.springer.com/article/10.1007/s11081-024-09931-2"
            }
          ]
        },
        {
          year: "2024",
          items: [
            {
              title: "Diversity‐Based Topology Optimization of Soft Robotic Grippers",
              authors: "J Pinskier, X Wang, L Liow, Y Xie, P Kumar, M Langelaar, D Howard",
              venue: "Advanced Intelligent Systems, 2300505",
              link: "https://onlinelibrary.wiley.com/doi/full/10.1002/aisy.202300505"
            },
            {
              title: "SoRoTop: a hitchhiker's guide to topology optimization MATLAB code for design-dependent pneumatic-driven soft robots",
              authors: "P. Kumar",
              venue: "Optimization and Engineering",
              link: "https://link.springer.com/article/10.1007/s11081-022-09715-6"
            },
            {
              title: "Three-Dimensional Material Mask Overlay Topology Optimization Approach With Truncated Octahedron Elements",
              authors: "N Singh, P Kumar, A Saxena",
              venue: "Journal of Mechanical Design 146 (1)",
              link: "https://asmedigitalcollection.asme.org/mechanicaldesign/article-abstract/146/1/011701/1166682/Three-Dimensional-Material-Mask-Overlay-Topology?redirectedFrom=fulltext"
            }
          ]
        },
        {
          year: "2023",
          items: [
            {
              title: "TOPress: a MATLAB implementation for topology optimization of structures subjected to design-dependent pressure loads",
              authors: "P. Kumar",
              venue: "Structural and Multidisciplinary Optimization",
              link: "https://link.springer.com/article/10.1007/s00158-023-03533-9"
            },
            {
              title: "HoneyTop90: A 90-line MATLAB code for topology optimization using honeycomb tessellation",
              authors: "P. Kumar",
              venue: "Optimization and Engineering",
              link: "https://link.springer.com/article/10.1007/s11081-023-09865-1"
            }
          ]
        },
        {
          year: "2022",
          items: [
            {
              title: "An improved Material Mask Overlay Strategy for the desired discreteness of pressure-loaded optimized topologies",
              authors: "P. Kumar, A. Saxena",
              venue: "Structural and Multidisciplinary Optimization 65 (10), 304",
              link: "https://link.springer.com/article/10.1007/s00158-022-03401-y"
            },
            {
              title: "Topological synthesis of fluidic pressure-actuated robust compliant mechanisms",
              authors: "P Kumar, M Langelaar",
              venue: "Mechanism and Machine Theory 174, 104871",
              link: "https://www.sciencedirect.com/science/article/abs/pii/S0094114X22001367"
            },
            {
              title: "Topology optimization of stiff structures under self-weight for given volume using a smooth Heaviside function",
              authors: "P. Kumar",
              venue: "Structural and Multidisciplinary Optimization 65 (4), 1-17",
              link: "https://link.springer.com/article/10.1007/s00158-022-03232-x"
            }
          ]
        },
        {
          year: "2021",
          items: [
            {
              title: "On topology optimization of design‐dependent pressure‐loaded three‐dimensional structures and compliant mechanisms",
              authors: "P Kumar, M Langelaar",
              venue: "International Journal for Numerical Methods in Engineering 122 (9), 2205-2220",
              link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/nme.6618"
            },
            {
              title: "Topology optimization and 3D printing of large deformation compliant mechanisms for straining biological tissues",
              authors: "P Kumar, C Schmidleithner, NB Larsen, O Sigmund",
              venue: "Structural and Multidisciplinary Optimization 63 (3), 1351-1366",
              link: "https://link.springer.com/article/10.1007/s00158-020-02764-4"
            },
            {
              title: "On topology optimization of large deformation contact-aided shape morphing compliant mechanisms",
              authors: "P Kumar, RA Sauer, A Saxena",
              venue: "Mechanism and Machine Theory 156, 104135",
              link: "https://www.sciencedirect.com/science/article/abs/pii/S0094114X20303529"
            }
          ]
        },
        {
          year: "2020",
          items: [
            {
              title: "On topology optimization with elliptical masks and honeycomb tessellation with explicit length scale constraints",
              authors: "N Singh, P Kumar, A Saxena",
              venue: "Structural and Multidisciplinary Optimization 62 (3), 1227-1251",
              link: "https://link.springer.com/article/10.1007/s00158-020-02548-w"
            },
            {
              title: "Topology optimization of fluidic pressure-loaded structures and compliant mechanisms using the Darcy method",
              authors: "P Kumar, JS Frouws, M Langelaar",
              venue: "Structural and Multidisciplinary Optimization 61 (4), 1637-1655",
              link: "https://link.springer.com/article/10.1007/s00158-019-02442-0"
            }
          ]
        },
        {
          year: "2019",
          items: [
            {
              title: "Compliant Fluidic Control Structures: Concept and Synthesis Approach",
              authors: "P Kumar, P Fanzio, L Sasso, M Langelaar",
              venue: "Computers & Structures, 216, PP 26-39",
              link: "https://www.sciencedirect.com/science/article/abs/pii/S0045794918315232"
            },
            {
              title: "Computational optimization of large deformation compliant mechanisms undergoing self and mutual contact",
              authors: "P. Kumar, A. Saxena, R. A. Sauer",
              venue: "ASME. J. Mech. Des. 141(1):012302",
              link: "https://asmedigitalcollection.asme.org/mechanicaldesign/article-abstract/141/1/012302/367792/Computational-Synthesis-of-Large-Deformation"
            }
          ]
        },
        {
          year: "2016",
          items: [
            {
              title: "Synthesis of C0 Path-Generating Contact-Aided Compliant Mechanisms Using the Material Mask Overlay Method",
              authors: "P. Kumar, R. A. Sauer, A. Saxena",
              venue: "ASME. J. Mech. Des. 138(6):062301",
              link: "https://asmedigitalcollection.asme.org/mechanicaldesign/article-abstract/138/6/062301/472583/Synthesis-of-C0-Path-Generating-Contact-Aided"
            }
          ]
        },
        {
          year: "2015",
          items: [
            {
              title: "On topology optimization with embedded boundary resolution and smoothing",
              authors: "P. Kumar, A. Saxena",
              venue: "Struct Multidisc Optim 52: 1135",
              link: "https://link.springer.com/article/10.1007/s00158-015-1272-6"
            }
          ]
        }
      ]
    },
    {
      category: "Book Chapters",
      icon: BookOpen,
      years: [
                 {
          year: "2024",
          items: [
            {
              title: "GO-GAN: Geometry optimization generative adversarial network for achieving optimized structures with targeted physical properties",
              authors: "A Padmaprabhan, S Hari, N Philip Thomas, KS Chadha, S Sidhardh, V Chinthapenta, P Kumar",
              venue: "International and National Conference on Multidisciplinary Design, Analysis and Optimization, 263-274: iNCMDAO 2024",
              link: "https://link.springer.com/chapter/10.1007/978-981-95-1723-7_22"
            },
                   {
              title: "Topology Optimization for Efficient Support Structure Designs in Additive Manufacturing",
              authors: "R Ranjan, P Kumar, C Ayas, M Langelaar",
              venue: "International and National Conference on Multidisciplinary Design, Analysis and Optimization, 75-85: iNCMDAO 2024",
              link: "https://link.springer.com/chapter/10.1007/978-981-95-1723-7_8"
            },
                      {
              title: "Topology optimization of contact-aided compliant mechanisms for tracing multi-kink paths",
              authors: "P Kumar, RA Sauer, A Saxena",
              venue: "International and National Conference on Multidisciplinary Design, Analysis and Optimization, 43-51: iNCMDAO 2024",
              link: "https://link.springer.com/chapter/10.1007/978-981-95-1723-7_5"
            },
                    {
              title: "PyTOPress: Python Code for Topology Optimization with Design-Dependent Pressure Loads",
              authors: "S Saxena, SI Sarkar, P Kumar",
              venue: "International and National Conference on Multidisciplinary Design, Analysis and Optimization, 3-14: iNCMDAO 2024",
              link: "https://link.springer.com/chapter/10.1007/978-981-95-1723-7_1"
            }
          ]
        },
                {
          year: "2023",
          items: [
            {
              title: "TOaCNN: Adaptive Convolutional Neural Network for Multidisciplinary Topology Optimization",
              authors: "KS Chadha, P Kumar",
              venue: "National Conference on Multidisciplinary Analysis and Optimization, 409-416: NCMDAO 2023",
              link: "https://link.springer.com/chapter/10.1007/978-981-96-1158-4_43"
            },
                    {
              title: "PyHexTop: A Compact Python Code for Topology Optimization Using Hexagonal Elements",
              authors: "A Agarwal, A Saxena, P Kumar",
              venue: "National Conference on Multidisciplinary Analysis and Optimization, 329-337: NCMDAO 2023",
              link: "https://link.springer.com/chapter/10.1007/978-981-96-1158-4_35"
            }
          ]
        },
        {
          year: "2022",
          items: [
            {
              title: "Towards Topology Optimization of Pressure-Driven Soft Robots",
              authors: "P Kumar",
              venue: "Microactuators, Microsensors and Micromechanisms: MAMM 2022, 19-30",
              link: "https://link.springer.com/chapter/10.1007/978-3-031-20353-4_2"
            },
                    {
              title: "Topology optimization of pressure-loaded multi-material structures",
              authors: "P Kumar",
              venue: "Structural Integrity Conference and Exhibition, 339-351: SICE 2022",
              link: "https://link.springer.com/chapter/10.1007/978-981-97-6367-2_28"
            }
          ]
        },
        {
          year: "2021",
          items: [
            {
              title: "Soft hand exoskeleton for adaptive grasping using a compact differential mechanism",
              authors: "A Bajaj, V Jain, P Kumar, A Unal, A Saxena",
              venue: "Mechanism and Machine Science, 733-746 (Awarded YDP fellowship from IFToMM, Germany)",
              link: "https://link.springer.com/chapter/10.1007/978-981-15-4477-4_52"
            }
          ]
        },
        {
          year: "2016",
          items: [
            {
              title: "Implementation of self contact in path generating compliant mechanisms",
              authors: "P. Kumar, A. Saxena, R. A. Sauer",
              venue: "Microactuators and Micromechanisms, pp. 251-261, Springer",
              link: "https://link.springer.com/chapter/10.1007/978-3-319-45387-3_22"
            }
          ]
        }
      ]
    },
    {
      category: "Conference Publications",
      icon: Presentation,
      years: [
              {
          year: "2025",
          items: [
            {
              title: "TO-SoFiT: Topology Optimization of Hydraulic Soft Fish Tail Design for programmable undulating locomotion",
              authors: "A Padmaprabhan, A Shaji, P Kumar",
              venue: "AIR '25: Proceedings of the 2025 7th International Conference on Advances in Robotics",
              link: "https://dl.acm.org/doi/10.1145/3787370.3787419"
            }
          ]
        },
        {
          year: "2023",
          items: [
            {
              title: "Topology optimization of fluidic pressure-driven multi-material compliant mechanisms",
              authors: "P Kumar, J Pinskier, D Howard, M Langelaar",
              venue: "IDETC/CIE ASME Conference, Boston, US",
              link: "https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings-abstract/IDETC-CIE2023/87363/1170793"
            },
            {
              title: "Automated design of pneumatic soft grippers through design-dependent multi-material topology optimization",
              authors: "J Pinskier, P Kumar, M Langelaar, D Howard",
              venue: "IEEE International Conference on Soft Robotics (RoboSoft)",
              link: "https://ieeexplore.ieee.org/abstract/document/10122069"
            }
          ]
        },
        {
          year: "2015",
          items: [
            {
              title: "On synthesis of contact aided compliant mechanisms using the material mask overlay method",
              authors: "P. Kumar, R. A. Sauer, A. Saxena",
              venue: "IDETC/CIE ASME Conference, Boston, US (Honorable Mentioned Fast Forward Presentation award)",
              link: "https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings-abstract/IDETC-CIE2015/V05AT08A017/257104"
            },
            {
              title: "On embedded recursive boundary smoothing in topology optimization with polygonal mesh and negative masks",
              authors: "P. Kumar, A. Saxena",
              venue: "iNaCoMM 2013, IIT Roorkee, India",
              link: "http://www.inacomm2013.ammindia.org/Papers/081-inacomm2013_submission_315.pdf"
            }
          ]
        }
      ]
    },
    {
      category: "Conference Presentations",
      icon: Presentation,
      years: [
        {
          year: "2019",
          items: [
            {
              title: "Synthesis of Compliant Micro-actuators for Mechanical Straining of Biological Tissues",
              authors: "P. Kumar, O. Sigmund",
              venue: "SIM-AM2019, Pavia, Italy",
              link: "https://congress.cimne.com/sim-am2019/admin/files/fileabstract/a445.pdf"
            }
          ]
        },
        {
          year: "2018",
          items: [
            {
              title: "Design Optimization and Realization of Compliant Microfluidic Control Structures",
              authors: "P. Kumar, P. Fanzio, L. Sasso, M. Langelaar",
              venue: "iMNC conference 2018, Amsterdam, Netherlands",
              link: "https://www.researchgate.net/publication/331574364_Design_Optimization_and_Realization_of_Compliant_Microfluidic_Control_Structures?_sg%5B0%5D=FR3Y76kY5_ncyZaq4TYWIyESRkpd1RCvqPNVN9peXmuHSi8QyywVq0jUjNSKPD7iyjS82VDBmv_n8s2wNdMFZHiGvZNu_X0ZrN3OjFXw.tzeWjLzsgwauJPgeFdALALsuGi9BacRXikeWo9bQ8sHRTXuWtLI583TJjy6vem-N2yT-lFGLjz-nthmmH43T_A"
            },
            {
              title: "Topology Optimization of Compliant Fluidic Control Structures undergoing Large Deformations",
              authors: "P. Kumar, P. Fanzio, L. Sasso, M. Langelaar",
              venue: "EngOpt2018, Lisbon, Portugal",
              link: "http://engopt2018.tecnico.ulisboa.pt/Web_Abstracts_EngoOpt2018/Abstracts/1298.pdf"
            }
          ]
        }
      ]
    },
    {
      category: "Internal Reports",
      icon: FileText,
      years: [
        {
          year: "Internal",
          items: [
            {
              title: "On order n+1 (even) Closed Interpolating Splines",
              authors: "P. Kumar",
              venue: "Internal Report",
              link: "#"
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
        <MeshBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Publications</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive collection of our research output including journals, 
              book chapters, and conference proceedings.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {publications.map((section, sIndex) => (
              <div key={sIndex} className="space-y-8 animate-fade-in-up" style={{animationDelay: `${sIndex * 150}ms`}}>
                <div className="flex items-center gap-3 border-b-2 border-primary/20 pb-4">
                  <section.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    {section.category}
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {section.years.map((yearGroup, yIndex) => (
                    <div key={yIndex} className="flex flex-col md:flex-row gap-6">
                      {/* Year Column */}
                      <div className="md:w-24 flex-shrink-0">
                        <div className="sticky top-24 inline-flex items-center justify-center bg-primary/10 text-primary font-bold text-xl px-4 py-2 rounded-lg border border-primary/20 w-full md:w-auto">
                          {yearGroup.year}
                        </div>
                      </div>

                      {/* Papers Column */}
                      <div className="flex-1 grid gap-4">
                        {yearGroup.items.map((paper, pIndex) => (
                          <Card
                            key={pIndex}
                            className="p-6 transition-all duration-300 hover:shadow-lg border-l-4 border-l-muted hover:border-l-primary group"
                          >
                            <div className="flex flex-col gap-3">
                              <div className="flex justify-between items-start gap-4">
                                <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                                  {paper.link && paper.link !== "#" ? (
                                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2">
                                      {paper.title}
                                      <ExternalLink className="h-4 w-4 shrink-0 mt-1 opacity-50 group-hover:opacity-100" />
                                    </a>
                                  ) : (
                                    paper.title
                                  )}
                                </h3>
                              </div>
                              
                              <div className="space-y-1">
                                <p className="text-muted-foreground font-medium text-sm">
                                  {paper.authors}
                                </p>
                                <p className="text-sm text-muted-foreground/80 italic">
                                  {paper.venue}
                                </p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Research Focus Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">Topology Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced computational methods for structural optimization, material distribution, 
                  and design space exploration.
                </p>
              </Card>
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">Contact Mechanics</h3>
                <p className="text-muted-foreground text-sm">
                  Novel approaches to handle contact conditions including self-contact detection 
                  and external contact modeling.
                </p>
              </Card>
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">Soft Robotics</h3>
                <p className="text-muted-foreground text-sm">
                  Design and optimization of pressure-driven soft robots and fluidic 
                  control structures.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
