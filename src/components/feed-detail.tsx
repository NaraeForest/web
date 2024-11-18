import React, { useState } from "react";
import { useRouter } from "next/router";
import { feedData } from "../data/feeds";

const FeedDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // URL에서 id 추출
  const feed = feedData.find((feed) => feed.id === Number(id)); // 해당 피드 찾기
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 토글 상태
  const [isReportOpen, setIsReportOpen] = useState(false); // Report 팝업 상태
  const [reportMessage, setReportMessage] = useState(""); // Report 메시지 상태
  const [likes, setLikes] = useState(feed ? feed.likes : 0); // 좋아요 상태

  if (!feed) return <div>Feed not found</div>;

  // 좋아요 버튼 핸들러
  const handleLike = () => {
    setLikes(likes + 1); // 좋아요 수 증가
  };

  // Report 팝업 제출 핸들러
  const handleReportSubmit = () => {
    console.log("Report submitted:", reportMessage);
    setIsReportOpen(false); // 팝업 닫기
    setReportMessage(""); // 메시지 초기화
  };

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
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              alert("Edit clicked!");
            }}
          >
            Edit
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              setIsMenuOpen(false);
              setIsReportOpen(true); // Report 팝업 열기
            }}
          >
            Report
          </button>
        </div>
      )}

      {/* Report 팝업 */}
      {isReportOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Report</h2>
            <textarea
              className="w-full border rounded-lg p-2 mb-4 resize-none"
              rows={4}
              placeholder="What's wrong with this feed?"
              value={reportMessage}
              onChange={(e) => setReportMessage(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsReportOpen(false)}
                className="text-gray-500 px-4 py-2 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleReportSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
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

        {/* 좋아요 및 댓글 */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <button
            onClick={handleLike}
            className="flex items-center text-gray-500 hover:text-blue-500"
          >
            <span role="img" aria-label="like" className="mr-2">
              👍
            </span>
            {likes} Likes
          </button>
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
