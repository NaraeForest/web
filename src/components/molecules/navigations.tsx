import Link from "next/link";
import {
  ReactElement,
} from "react";

type NavigationAncherProps = {
  children: ReactElement,
  text: string,
  href: string,
}
export function NavigationAncher({ text, children, href }: NavigationAncherProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col gap-1 justify-start items-center`}
    >
      {children}
      <span
        className="text-[0.625rem] leading-[0.625rem]"
      >
        {text}
      </span>
    </Link>
  );
}
