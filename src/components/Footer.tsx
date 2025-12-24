import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">ToCoDE Lab</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Topology Optimization, Computational Design & Experimentation Lab
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Department of Mechanical and Aerospace Engineering
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>Room 612, C-Block MAE Building, IIT Hyderabad, Kandi, Sangareddy, Telangana 502284</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>pkumar@mae.iith.ac.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(040) 2301 - 6681</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/research" className="hover:text-primary transition-colors">Research</a></li>
              <li><a href="/publications" className="hover:text-primary transition-colors">Publications</a></li>
              <li><a href="/team" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="/positions" className="hover:text-primary transition-colors">Join Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ToCoDE Lab, IIT Hyderabad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
