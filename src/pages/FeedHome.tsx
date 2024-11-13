import React, { useState, useEffect, useRef } from "react";
import Feed from "../components/feed";
import Footer from "../components/footer"; // Footer 컴포넌트 가져오기

// Feed 데이터 타입 정의
interface FeedData {
  userName: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
}

/**
 * FeedHome 컴포넌트
 * - 피드 리스트를 표시하는 메인 페이지
 * - 태그 영역은 드래그로 스크롤 가능하도록 구현
 */
const FeedHome: React.FC = () => {
  const [feeds, setFeeds] = useState<FeedData[]>([]);
  const tagContainerRef = useRef<HTMLDivElement>(null); // 태그 컨테이너 참조

  /**
   * 클라이언트에서 피드 데이터를 생성
   * - useEffect를 사용해 컴포넌트가 처음 렌더링될 때 실행됩니다.
   */
  useEffect(() => {
    const generatedFeeds = Array.from({ length: 50 }, (_, index) => ({
      userName: `User ${index + 1}`,          // 예시 사용자 이름
      time: `${index + 1} hours ago`,        // 예시 작성 시간
      content: `This is feed content for User ${index + 1}. 고추참치 좋아요!`, // 예시 피드 내용
      likes: Math.floor(Math.random() * 100), // 랜덤 좋아요 수
      comments: Math.floor(Math.random() * 50), // 랜덤 댓글 수
    }));
    setFeeds(generatedFeeds); // 상태에 생성된 데이터 저장
  }, []);

  /**
   * 드래그로 태그 스크롤 제어
   */
  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    const container = tagContainerRef.current;
    if (!container) return;

    let startX: number; // 드래그 시작 시 X 좌표
    let scrollLeft: number; // 드래그 시작 시 스크롤 위치

    const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      startX = "touches" in e ? e.touches[0].clientX : e.clientX;
      scrollLeft = container.scrollLeft;

      // 드래그 이벤트 연결
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onMouseMove as any);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchend", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const walk = x - startX; // 마우스 이동 거리
      container.scrollLeft = scrollLeft - walk; // 스크롤 이동
    };

    const onMouseUp = () => {
      // 드래그 이벤트 해제
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove as any);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
    };

    onMouseDown(event);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* 상단 고정 헤더 */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        {/* 제목 영역 - 왼쪽 정렬 */}
        <h1 className="text-3xl font-bold py-4 pl-4">Feeds</h1>

        {/* 카테고리 필터 버튼 - 드래그 가능 영역 */}
        <div
          className="overflow-hidden whitespace-nowrap px-4 pb-4 border-b cursor-grab"
          ref={tagContainerRef} // 컨테이너 참조 연결
          onMouseDown={handleDrag} // 마우스 드래그 이벤트
          onTouchStart={handleDrag} // 터치 드래그 이벤트
        >
          {/* 태그 버튼 */}
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
      <div className="flex-1 overflow-y-scroll px-4 pb-16 scrollbar-hidden">
        {/* 상태에 저장된 피드 데이터를 맵핑하여 렌더링 */}
        {feeds.map((feed, index) => (
          <Feed
            key={index}               // React에서 리스트 렌더링 시 고유 키
            userName={feed.userName}  // 사용자 이름
            time={feed.time}          // 작성 시간
            content={feed.content}    // 피드 내용
            likes={feed.likes}        // 좋아요 수
            comments={feed.comments}  // 댓글 수
          />
        ))}
      </div>

      {/* Footer 컴포넌트 */}
      <Footer />
    </div>
  );
};

export default FeedHome;
