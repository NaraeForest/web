// components/feed-detail.tsx
import React, { useState, useRef } from "react";
import Feed from "./Feed";
import FeedWriter from "./FeedWriter";
import { useRouter } from "next/router";

interface FeedDetailProps {
  feed: {
    id: number;
    userName: string;
    category: string;
    time: string;
    content: string;
    likes: number;
    comments: number;
    replies: Array<{
      id: number;
      userName: string;
      time: string;
      content: string;
      likes: number;
      comments: number;
    }>;
  };
}

const FeedDetail: React.FC<FeedDetailProps> = ({ feed }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Edit/Report 메뉴 토글
  const [isReportOpen, setIsReportOpen] = useState(false); // Report 팝업
  const [reportText, setReportText] = useState(""); // Report 입력값
  const replyContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  let startY = 0; // 드래그 시작 위치
  let scrollTop = 0; // 드래그 시작 시 스크롤 위치

  // 댓글 드래그 핸들러
  const handleReplyDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const container = replyContainerRef.current;
    if (!container) return;

    startY = "touches" in e ? e.touches[0].clientY : e.clientY;
    scrollTop = container.scrollTop;

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;
      const walk = startY - y;

      container.scrollTop = scrollTop + walk; // 스크롤 이동
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onMouseMove);
      window.removeEventListener("touchend", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onMouseMove as any, { passive: false });
    window.addEventListener("touchend", onMouseUp);
  };

  // Report 팝업 제출 핸들러
  const handleReportSubmit = () => {
    alert(`Report submitted: ${reportText}`);
    setReportText(""); // 입력값 초기화
    setIsReportOpen(false); // 팝업 닫기
  };

  return (
    <div className="flex flex-col h-screen">
      {/* 상단 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-10 flex justify-between items-center px-4 py-2">
        <button onClick={() => router.back()} className="text-xl">
          ←
        </button>
        <h1 className="text-lg font-bold">Feed Detail</h1>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-xl"
        >
          ⋮
        </button>
      </div>

      {/* Edit/Report 메뉴 */}
      {isMenuOpen && (
        <div className="absolute top-14 right-4 bg-white border shadow-md rounded-md w-40">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => alert("Edit clicked!")}
          >
            Edit
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsReportOpen(true)} // Report 팝업 열기
          >
            Report
          </button>
        </div>
      )}

      {/* Report 팝업 */}
      {isReportOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-bold mb-4">Report Feed</h2>
            <textarea
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              placeholder="What's wrong with this feed?"
              className="w-full border border-gray-300 p-2 rounded resize-none h-24"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsReportOpen(false)}
                className="mr-4 text-gray-500 hover:text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleReportSubmit}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 메인 피드 */}
      <Feed
        userName={feed.userName}
        category={feed.category || "No Category"}
        time={feed.time}
        content={feed.content}
        likes={feed.likes}
        comments={feed.comments}
        isDetail
      />

      {/* 댓글 영역 */}
      <div
        ref={replyContainerRef}
        className="flex-1 px-4 no-scrollbar select-none overflow-hidden"
        onMouseDown={handleReplyDragStart}
        onTouchStart={handleReplyDragStart}
        onDragStart={(e) => e.preventDefault()} // 드래그 방지
      >
        {feed.replies.length > 0 ? (
          feed.replies.map((reply) => (
            <Feed
              key={reply.id}
              userName={reply.userName}
              category="" // 댓글에는 카테고리 표시 안 함
              time={reply.time}
              content={reply.content}
              likes={reply.likes}
              comments={reply.comments}
              isDetail
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">No comments yet.</p>
        )}
      </div>

      {/* FeedWriter */}
      <FeedWriter />
    </div>
  );
};

export default FeedDetail;
