import React, { useState } from "react";
import { MeshBackground } from "@/components/MeshBackground";
import { 
  ImageIcon, 
  ZoomIn, 
  X,
  Camera
} from "lucide-react";

// ==========================================
// DUMMY DATA FOR GALLERY
// Replace images with your actual paths (e.g., /Images/Gallery/img1.jpg)
// ==========================================
const GALLERY_DATA = [
  {
    id: 1,
    title: "International Conference on Topology Optimization",
    category: "Conferences",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "ToCoDE Lab Inauguration",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Soft Robotics Prototype Testing",
    category: "Lab Work",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Best Paper Award Ceremony",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1531685250784-af587016e6ba?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Team Outing & Brainstorming",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Computational Mechanics Workshop",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
];

const CATEGORIES = ["All", "Lab Work", "Conferences", "Workshops", "Awards"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_DATA[0] | null>(null);

  // Filter logic
  const filteredGallery = activeFilter === "All" 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 bg-background font-sans selection:bg-primary/10 pb-20">
      
      {/* ==========================================
          HEADER SECTION
      ========================================== */}
      <section className="relative pt-16 pb-12 overflow-hidden border-b border-border/40">
        <MeshBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Lab Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A visual journey of our research, conferences, team events, and the milestones achieved by the ToCoDE Lab.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN GALLERY SECTION
      ========================================== */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          
          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category 
                    ? "bg-primary text-white border-primary shadow-md" 
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 hover:border-primary/50"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"; 
                    }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-xl leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Floating Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                    <ZoomIn className="h-4 w-4 text-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Fallback */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground">No images found</h3>
              <p className="text-muted-foreground">Check back later for updates in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* ==========================================
          LIGHTBOX MODAL
      ========================================== */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300">
          
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            
            {/* Main Image */}
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
            />
            
            {/* Caption Area */}
            <div className="mt-6 text-center max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {selectedImage.title}
              </h2>
            </div>

          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setSelectedImage(null)} 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;