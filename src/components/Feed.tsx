import React from "react";

interface FeedProps {
  userName: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  isDetail: boolean;
}

const Feed: React.FC<FeedProps> = ({
  userName,
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
          <h3 className="text-md font-bold">{userName}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>

      {/* 피드 내용 */}
      <p className={`text-gray-700 ${!isDetail ? "line-clamp-3" : ""}`}>
        {content}
      </p>

      {/* 좋아요 및 댓글 */}
      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <div className="flex items-center">
          <span role="img" aria-label="like" className="mr-2">
            👍
          </span>
          {likes} Likes
        </div>
        <div>{comments} Comments</div>
      </div>
    </div>
  );
};

export default Feed;
