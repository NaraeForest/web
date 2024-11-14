import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter(); // Next.js 라우터 가져오기

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white py-3 shadow-md">
      <div className="flex justify-around">
        <button
          className="flex flex-col items-center text-base"
          onClick={() => router.push("/")} // Home으로 이동
        >
          <span>
            <img src="/home.svg" />
          </span>
          Home
        </button>
        <button
          className="flex flex-col items-center text-base"
          onClick={() => router.push("/feedhome")} // FeedHome으로 이동
        >
          <span>
            <img src="/at-symbol.svg" />
          </span>
          Feeds
        </button>
        <button
          className="flex flex-col items-center text-base"
          onClick={() => router.push("/trends")} // Trends로 이동 (가상)
        >
          <span>
            <img src="/signal.svg" />
          </span>
          Trends
        </button>
        <button
          className="flex flex-col items-center text-base"
          onClick={() => router.push("/mypage")} // MyPage로 이동 (가상)
        >
          <span>
            <img src="/user.svg" />
          </span>
          MyPage
        </button>
      </div>
    </footer>
  );
}
