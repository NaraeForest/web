import { useState, useRef, useEffect } from "react";
import MainGoal from "@/components/main-goal";
import Footer from "@/components/Footer";
import Feed from "@/components/Feed";
import { feedData } from "@/data/feeds";
import { useRouter } from "next/router";

export default function MyPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("Goals");
  const feedContainerRef = useRef<HTMLDivElement | null>(null);

  const [Username, setUserName] = useState("백종원");
  const [Describe, setDescribe] = useState("맛있는 음식과 새로운 도전을 항상 추구합니다.");

  const goals = [
    { name: "Launch New Recipe", progress: 90 },
    { name: "Market Strategy for Restaurants", progress: 70 },
    { name: "Write a New Cookbook", progress: 50 },
  ];

  const marketingFeeds = feedData.filter((feed) => feed.userName === "백종원");

  // 드래그 상태 변수
  const [isDragging, setIsDragging] = useState(false);
  const [dragged, setDragged] = useState(false); // 클릭 방지를 위한 추가 상태
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!feedContainerRef.current) return;

    const start = "touches" in e ? e.touches[0].clientY : e.clientY;
    setStartY(start);
    setScrollTop(feedContainerRef.current.scrollTop);
    setIsDragging(true); // 드래그 상태 시작
    setDragged(false); // 클릭 방지 초기화
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!feedContainerRef.current || !isDragging) return;

    const y = "touches" in e ? (e as TouchEvent).touches[0].clientY : (e as MouseEvent).clientY;
    const walk = startY - y;

    if (Math.abs(walk) > 5) {
      feedContainerRef.current.scrollTop = scrollTop + walk;
      setDragged(true); // 드래그 발생으로 판단
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // 드래그 상태 해제
    setTimeout(() => setDragged(false), 50); // 클릭 방지 해제
  };

  useEffect(() => {
    // 전역 이벤트 리스너 추가
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove as EventListener);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove as EventListener, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      // 전역 이벤트 리스너 제거
      window.removeEventListener("mousemove", handleMouseMove as EventListener);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove as EventListener);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleFeedClick = (id: number) => {
    if (!dragged) {
      // 드래그 중이 아니고 클릭으로 판단될 때만 동작
      router.push(`/feed/${id}`);
    }
  };

  const [profileImage, setProfileImage] = useState("/default-profile.svg");
  const [backgroundImage, setBackgroundImage] = useState("/default-background.svg");

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(Username);
  const [newDescribe, setNewDescribe] = useState(Describe);
  const [newProfileImage, setNewProfileImage] = useState<File | null>(null);
  const [newBackgroundImage, setNewBackgroundImage] = useState<File | null>(null);

  const handleSave = () => {
    setNewUsername(newUsername);
    setNewDescribe(newDescribe);

    if (newProfileImage) {
      const profileURL = URL.createObjectURL(newProfileImage);
      setProfileImage(profileURL);
    }
    if (newBackgroundImage) {
      const backgroundURL = URL.createObjectURL(newBackgroundImage);
      setBackgroundImage(backgroundURL);
    }

    setEditModalOpen(false);
  };


  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
      {/* 상단 배경 */}
      <div className="h-40 bg-cover bg-center relative" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      }}></div>

      {/* 프로필 섹션 */}
      <div className="relative px-4 mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-white">
            <img
              src={profileImage}
              className="flex items-center"
              style={{ aspectRatio: "1 / 1"}}
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{Username}</h2>
            <p className="text-gray-600 text-sm mt-1">{Describe}</p>
          </div>
        </div>

        <div className="ml-auto">
          <button className="px-6 py-2 bg-black text-white text-sm rounded-md" 
          style={{ width: "120px", height: "40px" }}
          onClick={() => setEditModalOpen(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              />
            </div>

            {/* Status Message */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status Message</label>
              <textarea
                value={newDescribe}
                onChange={(e) => setNewDescribe(e.target.value)}
                rows={3}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              />
            </div>

            {/* Profile Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0)
                    setNewProfileImage(e.target.files[0]);
                }}
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>

            {/* Background Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Background Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0)
                    setNewBackgroundImage(e.target.files[0])
                }}
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>

            {/* Save and Cancel */}
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md"
                onClick={() => setEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 탭 선택 (Goals / Feeds) */}
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

      {/* Goals / Feeds 콘텐츠 */}
      <div
        ref={feedContainerRef}
        className={`flex-1 overflow-hidden px-4 pb-16 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        style={{ overflowY: "hidden", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {currentTab === "Goals" ? (
          <div>
            {goals.map((goal, index) => (
              <div key={index} className="mb-4">
                <MainGoal name={goal.name} progress={goal.progress} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {marketingFeeds.map((feed) => (
              <div
                key={feed.id}
                className="mb-4"
                onClick={() => handleFeedClick(feed.id)}
              >
                <Feed
                  userName={feed.userName}
                  category={feed.category}
                  time={feed.time}
                  content={feed.content}
                  likes={feed.likes}
                  comments={feed.comments}
                  isDetail={false}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
