"use client";

import Image from "next/image";
import {
  useRouter,
} from "next/navigation";
import {
  PropsWithChildren,
  useCallback,
} from "react";

type NavigationBarProps = {
  title: string,
};
export function NavigationBar({ title, children }: PropsWithChildren<NavigationBarProps>) {
  const router = useRouter();
  const onBack = useCallback(() => {
    router.back();
  }, []);
  return (
    <header
      className="w-full h-12 flex justify-between items-center px-5"
    >
      <div
        className="flex justify-start gap-4 items-center"
      >
        <button
          onClick={onBack}
        >
          <Image
            alt="arrow back"
            width={0}
            height={0}
            src={"/arrow-left.svg"}
            className="w-6 h-6"
          />
        </button>
        <p
          className="text-xl font-medium"
        >
          {title}
        </p>
      </div>
      <div>
        {children}
      </div>
    </header>
  );
}
