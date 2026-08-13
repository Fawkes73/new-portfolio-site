import { Badge } from "@/components/ui/Badge";

export function ProjectFilter({
  categories,
  active,
  onChange,
}: {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Badge
          key={category}
          as="button"
          type="button"
          active={active === category}
          onClick={() => onChange(category)}
          className="cursor-pointer"
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}
