import Image from "next/image";
import {
  HTMLAttributes,
} from "react";

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
