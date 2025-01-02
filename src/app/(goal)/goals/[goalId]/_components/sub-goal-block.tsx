import Link from "next/link";
import {
  PropsWithChildren,
} from "react";
import {
  PlusIcon,
} from "@/components";

type GoalBlockProps = {
  name: string
}
export function GoalBlock({ name }: GoalBlockProps) {
  return (
    <div
      className="aspect-square max-w-32 w-full max-h-32 h-full rounded-lg bg-[#333333] p-2 relative"
    >
      <p
        className="text-white font-semibold text-xs text-left"
      >
        Main goal
      </p>
      <p
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs text-[#D2D2D2]"
      >
        {name}
      </p>
    </div>
  );
}

type SubGoalBlockProps = {
  href: string,
  name: string,
};
export function SubGoalBlock({ href, name }: SubGoalBlockProps) {
  return (
    <Link
      href={href}
      className="aspect-square max-w-32 w-full max-h-32 h-full rounded-lg bg-[#F4F4F5] p-2 relative"
    >
      <p
        className="text-[#333333] font-semibold text-xs text-left"
      >
        Sub goal
      </p>
      <p
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-xs text-[#333333] p-3 w-full text-center"
      >
        {name}
      </p>
    </Link>
  );
}

export function EmptyBlock({ children }: PropsWithChildren) {
  return (
    <div
      className="aspect-square max-w-32 w-full max-h-32 h-full rounded-lg bg-[#F4F4F5] p-2 relative"
    >

    </div>
  );
}

export function PlusBlock({ children }: PropsWithChildren) {
  return (
    <div
      className="aspect-square max-w-32 w-full max-h-32 h-full rounded-lg bg-[#F4F4F5] p-2 relative"
    >
      <p
        className="text-[#333333] font-semibold text-xs text-left"
      >
        Sub goal
      </p>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        <PlusIcon />
      </div>
    </div>
  );
}
