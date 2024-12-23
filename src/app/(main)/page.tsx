import {
  BorderBox,
  PlusButton,
} from "@/components/atoms";
import {
  PageHeader,
} from "@/components/organisms";

export default function Page() {
  return (
    <div
      className="mx-5"
    >
      <PageHeader
        title="Home"
      >
        <PlusButton />
      </PageHeader>
      <BorderBox />
    </div>
  );
} 
