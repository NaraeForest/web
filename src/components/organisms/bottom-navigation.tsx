import {
  NavigationAncher,
} from "@/components/molecules";
import {
  FeedIcon,
  HomeIcon,
  MyPageIcon,
  TrendIcon,
} from "@/components/atoms";

export function BottomNavigation() {
  return (
    <div
      className="safe-area bg-white border-t border-[#E5E7EB] w-full fixed z-40 bottom-0"
    >
      <div
        className="flex justify-evenly py-3"
      >
        <NavigationAncher
          text="Home"
          href="/"
        >
          <HomeIcon />
        </NavigationAncher>
        <NavigationAncher
          text="Feeds"
          href="/feeds"
        >
          <FeedIcon />
        </NavigationAncher>
        <NavigationAncher
          text="Trends"
          href="/trends"
        >
          <TrendIcon />
        </NavigationAncher>
        <NavigationAncher
          text="MyPage"
          href="/mypage"
        >
          <MyPageIcon />
        </NavigationAncher>
      </div>
    </div>
  );
}
