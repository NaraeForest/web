import {
  ReactElement,
} from "react";
import {
  Heading1,
} from "@/components/atoms";

type PageHeaderProps = {
  title: string,
  children?: ReactElement,
}
export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div
      className="flex justify-between items-center pt-16 pb-4"
    >
      <Heading1
        text={title}
      />
      {children}
    </div>
  );
}
