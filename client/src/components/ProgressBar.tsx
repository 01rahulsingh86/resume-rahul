interface ProgressBarProps {
  label: string;
  percentage: number;
}

export default function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
