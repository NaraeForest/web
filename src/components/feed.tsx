import React from "react";

interface FeedProps {
  userName: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
}

const Feed: React.FC<FeedProps> = ({ userName, time, content, likes, comments }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="ml-4">
          <h3 className="text-md font-bold">{userName}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span className="flex items-center">
          <i className="fas fa-heart mr-1"></i> {likes} Likes
        </span>
        <span className="flex items-center">
          <i className="fas fa-comment mr-1"></i> {comments} Comments
        </span>
        <span className="flex items-center">
          <i className="fas fa-share mr-1"></i> Share
        </span>
      </div>
    </div>
  );
};

export default Feed;
