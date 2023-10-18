import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";
interface CategoryItemProps {
  category: Category; // Get all category fields from prisma client
}

const CategoryItem = ({ category }: CategoryItemProps) => {

  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-3 rounded-lg py-3"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
