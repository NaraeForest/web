import React, { useState } from "react";
import { useRouter } from "next/router";
import { feedData } from "../data/Feeds";

const FeedDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // URL에서 id 추출
  const feed = feedData.find((feed) => feed.id === Number(id)); // 해당 피드 찾기
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Edit/Report 메뉴 토글

  if (!feed) return <div>Feed not found</div>;

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-10 flex justify-between items-center px-4 py-2">
        <button onClick={() => router.back()} className="text-xl">←</button>
        <h1 className="text-lg font-bold">Feed Detail</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">⋮</button>
      </div>

      {/* Edit/Report 메뉴 */}
      {isMenuOpen && (
        <div className="absolute top-14 right-4 bg-white border shadow-md rounded-md w-40">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Report</button>
        </div>
      )}

      {/* 상세 내용 */}
      <div className="flex-1 overflow-y-scroll px-4 py-4">
        {/* 사용자 정보 */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="ml-4">
            <h3 className="text-md font-bold">{feed.userName}</h3>
            <span className="text-xs text-gray-500">{feed.time}</span>
          </div>
        </div>

        {/* 피드 전체 내용 */}
        <p className="text-gray-700 mb-6">{feed.content}</p>

        {/* 좋아요/댓글 */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{feed.likes} Likes</span>
          <span>{feed.comments} Comments</span>
        </div>

        {/* 댓글 입력창 */}
        <div className="border-t pt-4">
          <textarea
            className="w-full border rounded-lg p-2 mb-2 resize-none"
            rows={3}
            placeholder="Write a comment..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default FeedDetail;
