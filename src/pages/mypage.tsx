import { useState, useEffect } from "react";
import MainGoal from "@/components/main-goal";
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
      category : "private",
      time: "1 hour ago",
      content: "내 문제를 누가 해결해줬으면~ 모든 안티패턴 프로그램들이 모두 인식되었으면 정말 좋겠다~",
      likes: 15,
      comments: 3,
      isDetail: false,
    },

    {
      userName: "Sync Baek",
      category : "private",
      time: "1 hour ago",
      content: "아웅 하기싫어",
      likes: 16,
      comments: 2,
      isDetail: false,
    },

    {
      userName: "WooWoo",
      category : "private",
      time: "1 hour ago",
      content: "IPO의 힘 알아보고 공유가 사용되었습니다. 전세계 애플리케이션 구현 내내 적용을 안다 한다.",
      likes: 15,
      comments: 3,
      isDetail: false,
    },

    {
      userName: "WooWoo",
      category : "private",
      time: "1 hour ago",
      content: "오늘 뭐해",
      likes: 15,
      comments: 3,
      isDetail: false,
    },
  ];

  const [currentTab, setCurrentTab] = useState("Goals");

  const [Username, setUsername] = useState("이재호");
  const [Describe, setDescribe] = useState("밖에 나온 순간 끝났어, 날씨는 좋은데 앞으로 못 나아가");

  // 상태 관리: 이미지가 존재하는지 확인하기 위한 변수
  const [profileImage, setProfileImage] = useState("/default-profile.jpg");
  const [backgroundImage, setBackgroundImage] = useState("/default-background.svg");

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(Username);
  const [newDescribe, setNewDescribe] = useState(Describe);
  const [newProfileImage, setNewProfileImage] = useState<File | null>(null);
  const [newBackgroundImage, setNewBackgroundImage] = useState<File | null>(null);

  const handleSave = () => {
    setUsername(newUsername);
    setDescribe(newDescribe);
    setEditModalOpen(false);

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
      <div
        className="h-40 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* 프로필 섹션 */}
      <div className="relative px-4 mt-4 flex items-center justify-between">
        {/* 프로필 사진 및 이름/상태 메시지 */}
        <div className="flex items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-white">
            <img
              src={profileImage}
              className="w-full h-full rounded-full object-cover"
              style={{ aspectRatio: "1 / 1" }}
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

            {/* 이름 수정 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              />
            </div>

            {/* 상태 메시지 수정 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Status Message</label>
              <textarea
                value={newDescribe}
                onChange={(e) => setNewDescribe(e.target.value)}
                rows={3}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
              />
            </div>

            {/* 프로필 이미지 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setNewProfileImage(e.target.files[0])}
                  }
                }
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>

            {/* 배경 이미지 */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Background Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setNewBackgroundImage(e.target.files[0]);
                  }
                }}
                className="mt-1 block w-full text-sm text-gray-500"
              />
            </div>

            {/* 저장 및 취소 버튼 */}
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
      <div className="flex-1 overflow-y-auto p-4 pb-16">
        {currentTab === "Goals" ? (
          goals.map((goal, index) => (
            <div key={index} className="mb-4">
              <MainGoal name={goal.name} progress={goal.progress} />
            </div>
          ))
        ) : (
          feeds.map((feed, index) => (
            <Feed
              key={index}
              category={feed.category}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
