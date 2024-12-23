"use client";

import Image from "next/image";
import {
  usePathname,
} from "next/navigation";

export function HomeIcon() {
  const pathname = usePathname();
  const iconPath = pathname === "/" ? "/home-full.svg" : "/home-line.svg";
  return (
    <Image
      alt="home button"
      width={0}
      height={0}
      src={iconPath}
      className="w-6 h-6"
    />
  );
}

export function FeedIcon() {
  const pathname = usePathname();
  const iconPath = pathname === "/feeds" ? "/at-symbol.svg" : "/at-symbol.svg";
  return (
    <Image
      alt="feed button"
      width={0}
      height={0}
      src={iconPath}
      className="w-6 h-6"
    />
  );
}

export function TrendIcon() {
  const pathname = usePathname();
  const iconPath = pathname === "/trends" ? "/signal.svg" : "/signal.svg";
  return (
    <Image
      alt="trend button"
      width={0}
      height={0}
      src={iconPath}
      className="w-6 h-6"
    />
  );
}

export function MyPageIcon() {
  const pathname = usePathname();
  const iconPath = pathname === "/mypage" ? "/user-full.svg" : "/user-line.svg";
  return (
    <Image
      alt="mypage button"
      width={0}
      height={0}
      src={iconPath}
      className="w-6 h-6"
    />
  );
}
