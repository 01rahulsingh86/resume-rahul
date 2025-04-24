import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export default function ProjectCard({ title, description, technologies, achievements }: ProjectCardProps) {
  return (
    <Card className="bg-light rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="h-3 bg-accent"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-secondary bg-opacity-20 text-primary px-2 py-1 rounded text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="text-sm">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-center mb-2">
              <i className="fas fa-check-circle text-accent mr-2"></i>
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
