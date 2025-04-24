import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "TikTok Data Analytics Platform",
      description: "Led end-to-end program execution for TikTok Data Analytics Team, supporting Seller, Creator Partner, and Brand Portals for US & UK markets.",
      technologies: ["Big Data", "Analytics", "Kafka", "Agile"],
      achievements: [
        "100TB/day data processing",
        "350K+ Weekly Active Users",
        "30% reduction in data quality issues"
      ]
    },
    {
      title: "Indeed CI/CD Pipeline Optimization",
      description: "Implemented Push-on-Green workflows to streamline testing processes and accelerate feature rollouts across Indeed's platform.",
      technologies: ["CI/CD", "Jenkins", "DevOps", "Automation"],
      achievements: [
        "50% reduction in manual testing",
        "30% faster feature rollouts",
        "Enhanced cross-team collaboration"
      ]
    },
    {
      title: "Visa SOAP-to-JSON API Migration",
      description: "Led the migration of legacy SOAP APIs to modern JSON APIs, improving translation accuracy and performance for merchants.",
      technologies: ["API", "SOAP", "JSON", "Integration"],
      achievements: [
        "99.9% translation accuracy",
        "1M+ daily API requests",
        "25% reduction in integration errors"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              achievements={project.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
