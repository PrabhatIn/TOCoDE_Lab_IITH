import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Contact Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* MODIFIED: Email Button Section (Form Removed) */}
            <Card className="p-8 flex flex-col justify-center items-center text-center h-full min-h-[300px]">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Direct Contact</h2>
              <p className="text-muted-foreground mb-8">
                Please feel free to reach out to us directly via email.
              </p>
              <Button asChild className="w-full max-w-sm gradient-primary hover:opacity-90 h-12 text-lg">
                <a href="mailto:pkumar@mae.iith.ac.in">
                  Email pkumar@mae.iith.ac.in
                </a>
              </Button>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Department of Mechanical and Aerospace Engineering<br />
                      Indian Institute of Technology Hyderabad<br />
                      Kandi, Sangareddy, Telangana 502284, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Website</h3>
                    <a href="https://tocode.mae.iith.ac.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      https://tocode.mae.iith.ac.in
                    </a>
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

export default Contact;