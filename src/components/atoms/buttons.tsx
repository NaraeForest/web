"use client";

import Image from "next/image";
import {
  HTMLAttributes,
  useCallback,
} from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  categories,
} from "@/utils";

export function PlusButton(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
    >
      <Image
        alt="plus button"
        width={0}
        height={0}
        src={"/plus.svg"}
        className="w-6 h-6"
      />
    </button>
  );
}

type CategoryButtonProps = {
  text: string,
  value?: string,
}
export function CategoryButton({ text, value }: CategoryButtonProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const targetValue = categories[text] ?? value;
  const currentValue = decodeURIComponent(searchParams.get("category") || "");
  const onClick = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", encodeURIComponent(targetValue));
    router.push(`?${params.toString()}`);
  }, []);
  return (
    <button
      type="button"
      className={`border ${currentValue === targetValue ? "border-[#333333]" : "border-[#E5E7EB]"} rounded-full text-center text-[0.625rem] leading-[0.625rem] p-2 text-nowrap`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
