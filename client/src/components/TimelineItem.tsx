import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  company,
  location,
  period,
  responsibilities,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className={`timeline-item ${isLast ? "" : ""}`}>
      <div className="timeline-dot"></div>
      <Card className="shadow-md">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <div className="mt-2 sm:mt-0">
              <Badge variant="outline" className="bg-secondary bg-opacity-20 text-primary px-3 py-1 rounded-full">
                {period}
              </Badge>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-accent mb-4">{company}, {location}</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
