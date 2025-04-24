import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const certifications = [
    {
      title: "Google Project Management Professional Certificate",
      date: "(in progress) Feb 2025"
    },
    {
      title: "Microsoft Program Management Fundamentals",
      date: "Feb 2025"
    },
    {
      title: "MIT Designing Building AI Product and Services",
      date: "Oct 2023"
    },
    {
      title: "MIT Blockchain Disruptive Technology",
      date: "Apr 2021"
    },
    {
      title: "Scrum Alliance Certified Scrum Master",
      date: "Sep 2014"
    }
  ];

  return (
    <section id="education" className="section-padding bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">Academic Education</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start flex-col sm:flex-row mb-2">
                  <h4 className="text-lg font-semibold">Bachelor of Engineering, Computer Science</h4>
                  <Badge variant="outline" className="bg-secondary bg-opacity-20 text-primary px-3 py-1 rounded-full mt-2 sm:mt-0">
                    2008
                  </Badge>
                </div>
                <p className="text-gray-700">RGPV, Bhopal, MP</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">Professional Certifications</h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start flex-col sm:flex-row mb-1">
                      <h4 className="text-lg font-semibold">{cert.title}</h4>
                      <Badge variant="outline" className="bg-secondary bg-opacity-20 text-primary px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
