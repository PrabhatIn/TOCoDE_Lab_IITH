import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Page Imports
import Home from "./pages/Home";
import Research from "./pages/Research";
import Projects from "./pages/Projects"; 
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Software from "./pages/Software";
import Courses from "./pages/Courses";
import Positions from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrabhatProfile from "./pages/prabhat-kumar";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/team" element={<Team />} />
              <Route path="/prabhat-kumar" element={<PrabhatProfile />} />
              <Route path="/software" element={<Software />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;