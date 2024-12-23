import {
  categories,
} from "@/utils";
import {
  CategoryButton,
} from "@/components/atoms";

export function CategorySelector() {
  return (
    <div
      className="flex gap-2 overflow-x-scroll hide-scroll"
    >
      <CategoryButton
        text={"All"}
        value="all"
      />
      {Object.keys(categories).map((key) => (
        <CategoryButton
          key={key}
          text={key}
        />
      ))}
    </div>
  );
}
