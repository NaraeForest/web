import {
  ReactElement,
} from "react";
import {
  Heading1,
} from "@/components";

type PageHeaderProps = {
  title: string,
  children?: ReactElement,
}
export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div
      className="px-5 pt-16 pb-3 flex justify-between items-center"
    >
      <Heading1>
        {title}
      </Heading1>
      {children}
    </div>
  );
}
