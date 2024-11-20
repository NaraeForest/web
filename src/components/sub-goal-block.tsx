import Link from "next/link";

type SubGoalBlockProps = {
  name: string,
  href: string
}
export function SubGoalBlock({ name, href }: SubGoalBlockProps) {
  return (
    <Link
      href={href}
      className="bg-[#F4F4F5] rounded-lg relative max-w-32 max-h-32 w-full h-full aspect-square"
     >
      <p
        className="pl-2 pt-2"
      >
        Sub Goal
      </p>
      <p
        className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-[#333333] px-2 w-full text-center"
      >
        {name}
      </p>
    </Link>
  )
}
