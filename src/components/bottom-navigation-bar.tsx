import Image from "next/image";
import Link from "next/link";

export function BattomNavigationBar() {
  return (
    <div className="fixed bottom-0 w-full h-16 border-t border-[#D9D9D9] flex justify-evenly items-center text-[0.625rem] bg-white z-50">
      <Link href={"/"} className="flex flex-col items-center">
        <Image src={"/home.svg"} width={24} height={24} alt="go to home" />
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
      <Link href={"/mypage"} className="flex flex-col items-center">
        <Image src={"/user.svg"} width={24} height={24} alt="go to feeds" />
        MyPage
      </Link>
    </div>
  );
}