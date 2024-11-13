import React from "react";

interface FeedProps {
  userName: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  isDetail: boolean; // 상세 페이지 여부
}

const Feed: React.FC<FeedProps> = ({ userName, time, content, likes, comments, isDetail }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="ml-4">
          <h3 className="text-md font-bold">{userName}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>

      {/* 피드 내용 */}
      <p className={`text-gray-700 mb-4 ${!isDetail ? "line-clamp-2" : ""}`}>{content}</p>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{likes} Likes</span>
        <span>{comments} Comments</span>
      </div>
    </div>
  );
};

export default Feed;
