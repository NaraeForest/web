import {
  PropsWithChildren,
} from "react";

export function Heading1({ children }: PropsWithChildren) {
  return (
    <h1
      className="text-[2rem] leading-[2rem] font-medium"
    >
      {children}
    </h1>
  );
}

export function Heading2({ children }: PropsWithChildren) {
  return (
    <h2
      className="text-2xl"
    >
      {children}
    </h2>
  );
}

export function DescriptionParagraph({ children }: PropsWithChildren) {
  return (
    <p
      className="pt-1 text-[#71717A] text-[0.625rem]"
    >
      {children}
    </p>
  );
}
