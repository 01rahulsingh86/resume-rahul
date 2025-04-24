import ProgressBar from "./ProgressBar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillCategories = [
    {
      title: "Engineering Leadership & Management",
      skills: [
        { name: "Team Leadership", percentage: 95 },
        { name: "Strategic Planning", percentage: 90 },
        { name: "OKR Setting", percentage: 85 },
        { name: "Mentoring", percentage: 92 },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "Docker & Kubernetes", percentage: 85 },
        { name: "Grafana & Kibana", percentage: 88 },
        { name: "Distributed Systems", percentage: 82 },
        { name: "Data Warehousing", percentage: 80 },
      ],
    },
    {
      title: "Test & Quality Engineering",
      skills: [
        { name: "Test Automation", percentage: 90 },
        { name: "API Testing", percentage: 95 },
        { name: "Performance Testing", percentage: 85 },
        { name: "Quality Engineering", percentage: 92 },
      ],
    },
    {
      title: "Big Data & Analytics",
      skills: [
        { name: "Kafka, Spark, Flink", percentage: 80 },
        { name: "SQL", percentage: 88 },
        { name: "Python", percentage: 75 },
        { name: "Tableau", percentage: 82 },
      ],
    },
  ];

  const additionalSkills = [
    "CI/CD Pipelines", "REST API", "SOAP", "Java", "JavaScript", 
    "Selenium", "Jenkins", "Git", "JIRA", "Splunk", 
    "DORA Metrics", "Agile Methodologies"
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-md bg-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar 
                      key={skillIndex} 
                      label={skill.name} 
                      percentage={skill.percentage} 
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <Badge
                key={index}
                className="py-3 px-4 rounded-lg text-center shadow-sm bg-light justify-center text-foreground hover:bg-secondary"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
