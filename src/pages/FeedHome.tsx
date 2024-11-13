import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { feedData } from "../data/Feeds";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

const FeedHome: React.FC = () => {
  const router = useRouter();
  const feedContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false); // 드래그 여부 상태
  const dragThreshold = 5; // 클릭과 드래그를 구분하는 최소 거리
  let clickTimeout: NodeJS.Timeout; // 클릭 이벤트 딜레이용 변수

  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    const container = feedContainerRef.current;
    if (!container) return;

    let startY: number; // 드래그 시작 시 Y 좌표
    let scrollTop: number; // 드래그 시작 시 스크롤 위치

    const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      setIsDragging(false); // 드래그 상태 초기화
      startY = "touches" in e ? e.touches[0].clientY : e.clientY;
      scrollTop = container.scrollTop;

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onMouseMove as any);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchend", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;
      const walk = y - startY; // 드래그 이동 거리

      if (Math.abs(walk) > dragThreshold) {
        setIsDragging(true); // 드래그로 간주
      }

      container.scrollTop = scrollTop - walk; // 스크롤 이동
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove as any);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);

      // 드래그가 아닌 경우 클릭 이벤트 처리
      if (!isDragging) {
        clearTimeout(clickTimeout); // 기존 타임아웃 초기화
        clickTimeout = setTimeout(() => setIsDragging(false), 200); // 클릭 가능 딜레이
      }
    };

    onMouseDown(event);
  };

  const handleFeedClick = (id: number) => {
    // 드래그 중이 아니어야 클릭 동작 실행
    if (!isDragging) {
      router.push(`/feed/${id}`); // 상세 페이지로 이동
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 고정 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-bold py-4 pl-4">Feeds</h1>

        {/* 태그 버튼 영역 */}
        <div className="overflow-hidden whitespace-nowrap px-4 pb-4 border-b cursor-grab">
          {Array.from({ length: 15 }, (_, index) => (
            <button
              key={index}
              className="inline-block bg-gray-200 px-4 py-2 mr-2 rounded-full text-sm"
            >
              {`Tag ${index + 1}`}
            </button>
          ))}
        </div>
      </div>

      {/* 피드 리스트 영역 */}
      <div
        ref={feedContainerRef}
        className="flex-1 overflow-hidden px-4 pb-16 cursor-grab"
        onMouseDown={handleDrag}
        onTouchStart={handleDrag}
      >
        {feedData.map((feed) => (
          <div
            key={feed.id}
            onClick={() => handleFeedClick(feed.id)} // 클릭 이벤트 처리
            className="cursor-pointer"
          >
            <Feed
              userName={feed.userName}
              time={feed.time}
              content={feed.content}
              likes={feed.likes}
              comments={feed.comments}
              isDetail={false} // 홈에서는 줄여 보여줌
            />
          </div>
        ))}
      </div>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
};

export default FeedHome;
