import { useState, useEffect } from "react";
import MainGoal from "@/components/MainGoal";
import Footer from "@/components/footer";
import Feed from "@/components/feed";

export default function Home() {
  const goals = [
    { name: "Learn Infra.", progress: 80 },
    { name: "Complete Project X", progress: 50 },
    { name: "Study Algorithms", progress: 70 },
  ];

  const feeds = [
    {
      userName: "Jacob Lee",
      time: "1 hour ago",
      content: "내 문제를 누가 해결해줬으면~ 모든 안티패턴 프로그램들이 모두 인식되었으면 정말 좋겠다~",
      likes: 15,
      comments: 3,
    },
    {
      userName: "Sync Baek",
      time: "1 hour ago",
      content: "아웅 하기싫어",
      likes: 16,
      comments: 2,
    },
    {
      userName: "WooWoo",
      time: "1 hour ago",
      content: "IPO의 힘 알아보고 공유가 사용되었습니다. 전세계 애플리케이션 구현 내내 적용을 안다 한다.",
      likes: 15,
      comments: 3,
    },
  ];

  const [currentTab, setCurrentTab] = useState("Goals");

  const Username = "이재호";
  const Describe = "밖에 나온 순간 끝났어, 날씨는 좋은데 앞으로 못 나아가";

  // 상태 관리: 이미지가 존재하는지 확인하기 위한 변수
  const [backgroundImageExists, setBackgroundImageExists] = useState(false);
  const [profileImageExists, setProfileImageExists] = useState(false);

  // 이미지 존재 여부 확인 함수
  useEffect(() => {
    // 배경 이미지 확인
    fetch("/background.jpg")
      .then((res) => {
        if (res.ok) setBackgroundImageExists(true); // 배경 이미지가 있으면 true
      })
      .catch(() => setBackgroundImageExists(false)); // 없으면 false

    // 프로필 이미지 확인
    fetch("/profile.jpg")
      .then((res) => {
        if (res.ok) setProfileImageExists(true); // 프로필 이미지가 있으면 true
      })
      .catch(() => setProfileImageExists(false)); // 없으면 false
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
    {/* 상단 배경 */}
    <div
      className="h-40 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImageExists ? "/background.jpg" : "/default-background.svg"})`,
      }}
    ></div>

      {/* 프로필 섹션 */}
      <div className="relative px-4 mt-4 flex items-center justify-between">
        {/* 프로필 사진 및 이름/상태 메시지 */}
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-white">
            <img
              src={profileImageExists ? "/profile.jpg" : "/default-profile.jpg"}
              className="w-full h-full rounded-full object-cover"
              style={{ aspectRatio: "1 / 1" }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = "/default-profile.svg";
              }}
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{Username}</h2>
            <p className="text-gray-600 text-sm mt-1">{Describe}</p>
          </div>
        </div>

        {/* Edit Profile 버튼 */}
        <div className="ml-auto">
          <button
            className="px-6 py-2 bg-black text-white text-sm rounded-md"
            style={{ width: "120px", height: "40px" }}
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mt-6 border-b border-gray-300">
        <div className="flex justify-center">
          <button
            className={`px-6 py-2 ${
              currentTab === "Goals" ? "text-gray-800 border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setCurrentTab("Goals")}
          >
            Goals
          </button>
          <button
            className={`px-6 py-2 ${
              currentTab === "Feeds" ? "text-gray-800 border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => setCurrentTab("Feeds")}
          >
            Feeds
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {currentTab === "Goals" ? (
          goals.map((goal, index) => (
            <MainGoal key={index} name={goal.name} progress={goal.progress} />
          ))
        ) : (
          feeds.map((feed, index) => (
            <Feed
              key={index}
              userName={feed.userName}
              time={feed.time}
              content={feed.content}
              likes={feed.likes}
              comments={feed.comments}
              isDetail={false} // 상세 페이지가 아님
            />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}
