import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Page Imports
import Home from "./pages/Home";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Software from "./pages/Software";
import Courses from "./pages/Courses";
import Positions from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// 1. IMPORT THE NEW PAGE HERE
import PrabhatProfile from "./pages/prabhat-kumar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/team" element={<Team />} />
              
              {/* 2. ADD THE ROUTE HERE */}
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;