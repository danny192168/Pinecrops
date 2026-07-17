import { Rating } from "./reui/rating";

type ChildProps = { reviewText: string };

export function ReviewBox({ reviewText }: ChildProps) {
  return (
    <div className="border-2 rounded-lg p-4 h-fit mb-2">
      <div className="flex justify-between w-full text-sm mb-2">
        <Rating rating={5} size="default" className="hidden md:block" />
        <Rating rating={5} size="sm" className="block md:hidden" />
        <span className="text-muted-foreground">15 July 2026</span>
      </div>
      <h4>Review Title</h4>
      <div className="flex items-center gap-2 text-sm mb-3">
        <span className="text-muted-foreground">Variaion: Fresh</span>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <span className="text-muted-foreground">Weight: 6.9kg</span>
      </div>
      <p className="text-muted-foreground text-sm md:text-base">{reviewText}</p>
    </div>
  );
}
