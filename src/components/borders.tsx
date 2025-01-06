import {
  PropsWithChildren,
} from "react";

export function BaseBorder({ children }: PropsWithChildren) {
  return (
    <div
      className="border border-solid border-[#E5E7EB] rounded-xl p-4"
    >
      {children}
    </div>
  );
}
