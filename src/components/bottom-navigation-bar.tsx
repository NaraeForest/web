import Image from "next/image";
import Link from "next/link";
import {
  useRouter,
} from "next/router";

export function BattomNavigationBar() {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 w-full safe-area bg-white">
      <div className="h-16 border-t border-[#D9D9D9] flex justify-evenly items-center text-[0.625rem] z-50">
        <Link href={"/"} className="flex flex-col items-center">
          <Image
            src={router.pathname === "/" ? "/home-full.svg" : "/home-line.svg"}
            width={24}
            height={24}
            alt="go to home"
          />
          Home
        </Link>
        <Link href={"/feeds"} className="flex flex-col items-center">
          <Image src={"/at-symbol.svg"} width={24} height={24} alt="go to feeds" />
          Feeds
        </Link>
        <Link href={"/trends"} className="flex flex-col items-center">
          <Image src={"/signal.svg"} width={24} height={24} alt="go to feeds" />
          Trends
        </Link>
        <Link
          href={"/mypage"}
          className="flex flex-col items-center"
        >
          <Image
            src={router.pathname === "/mypage" ? "/user-full.svg" : "/user-line.svg"}
            width={24}
            height={24}
            alt="go to feeds"
          />
          MyPage
        </Link>
      </div>
    </div>
  );
}
