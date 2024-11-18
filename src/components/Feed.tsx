// components/Feed.tsx
import React from "react";

interface FeedProps {
  userName: string;
  category: string; // 카테고리 추가
  time: string;
  content: string;
  likes: number;
  comments: number;
  isDetail: boolean; // 간략 표시 여부
}

const Feed: React.FC<FeedProps> = ({
  userName,
  category,
  time,
  content,
  likes,
  comments,
  isDetail,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {/* 사용자 정보 */}
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="ml-3">
          <h3 className="text-md font-bold">
            {userName}{" "}
            {category && (
              <span className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded-full ml-2">
                {category}
              </span>
            )}
          </h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>

      {/* 피드 내용 */}
      <p className={`text-gray-700 ${!isDetail ? "line-clamp-2" : ""}`}>
        {content}
      </p>

      {/* 좋아요, 댓글, 공유 */}
      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <button className="flex items-center">
          <span role="img" aria-label="like" className="mr-1">
            🖤
          </span>
          {likes} Likes
        </button>
        <button className="flex items-center">
          <span role="img" aria-label="comment" className="mr-1">
            💬
          </span>
          {comments} Comments
        </button>
        <button className="flex items-center">
          <span role="img" aria-label="share" className="mr-1">
            ↗️
          </span>
          Share
        </button>
      </div>
    </div>
  );
};

export default Feed;
