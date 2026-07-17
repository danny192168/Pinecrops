import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const distribution = [
  { stars: 5, count: 124, percentage: 62 },
  { stars: 4, count: 45, percentage: 22 },
  { stars: 3, count: 18, percentage: 9 },
  { stars: 2, count: 8, percentage: 4 },
  { stars: 1, count: 5, percentage: 3 },
];

export function RatingReviewSummary() {
  return (
    <div className="w-full md:w-2xs md:max-w-3xs space-y-1">
      <div className="space-y-2">
        {distribution.map((row) => (
          <div key={row.stars} className="flex items-center gap-3 text-sm">
            <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
            <span className="text-muted-foreground w-3 text-right text-xs">{row.stars}</span>
            <Progress
              value={row.percentage}
              className="flex-1 **:data-[slot=progress-indicator]:bg-yellow-400 **:data-[slot=progress-track]:h-1.5"
            />
            <span className="text-muted-foreground w-7 text-right text-xs">{row.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
