import {
  CategorySelector,
} from "@/components/molecules";
import {
  PageHeader,
} from "@/components/organisms";

export default function Page() {
  return (
    <div
      className="mx-5"
    >
      <PageHeader
        title="Feeds"
      />
      <CategorySelector />
    </div>
  );
}
