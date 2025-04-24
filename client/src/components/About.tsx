import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <p className="text-lg mb-4">
                  I'm a results-driven Technical Program Manager with over 16 years of experience leading 
                  large-scale programs across Big Tech, eCommerce, and FinTech industries.
                </p>
                <p className="text-lg mb-4">
                  I excel at driving end-to-end program execution, streamlining processes, and enhancing 
                  operational efficiency while ensuring seamless integration across engineering, analytics, 
                  and product teams.
                </p>
                <p className="text-lg mb-6">
                  With strong expertise in cloud platforms, large-scale distributed systems, automation, 
                  and quality engineering, I help organizations achieve their strategic goals through 
                  effective program management and technical leadership.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-accent mr-2"></i>
                    <span>Bellevue, WA USA</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-accent mr-2"></i>
                    <span>(404) 435-7371</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-accent mr-2"></i>
                    <span>rahulsingh.qadirector@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Stakeholder Management</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Problem Solving</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Agile & Waterfall Methodology</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Data Driven Decision Making</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Project/Quality Management</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Feedback Loop Management</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Roadmap Prioritization</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-accent mr-2"></i>
                    <span>Resource Allocation</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center mb-2">
                    <a
                      href="https://linkedin.com/in/rahuls01"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-primary hover:text-accent transition-colors"
                    >
                      <i className="fab fa-linkedin text-xl mr-2"></i>
                      <span>linkedin.com/in/rahuls01</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
