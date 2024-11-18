import React, { useState } from "react";
import { useRouter } from "next/router";
import { goals } from "../data/Goals";

const MainGoalEdit = () => {
  const router = useRouter();
  const [mainGoal, setMainGoal] = useState(goals.mainGoal);
  const [category, setCategory] = useState(goals.category);
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);

  const handleSave = () => {
    alert(`저장된 목표: ${mainGoal}, 카테고리: ${category}`);
    router.push("/main-goal-viewer");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 p-4">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-lg" onClick={() => router.back()}>
          ✕
        </button>
        <h1 className="text-xl font-bold">Setup Goals</h1>
        <button className="text-lg" onClick={handleSave}>
          Save
        </button>
      </div>

      {/* 카테고리 */}
      <div className="mb-4">
        <button
          className="text-sm text-gray-500"
          onClick={() => setIsCategoryPopupOpen(true)}
        >
          Select category ▼
        </button>
        <p className="text-lg font-semibold">{category}</p>
      </div>

      {/* 3x3 Mandalart Grid */}
      <div
        className="grid grid-cols-3 grid-rows-3 gap-2 mb-6"
        style={{
          flexGrow: 0,
          display: "grid",
          aspectRatio: "1 / 1",
          maxWidth: "90%", // 반응형 중앙 정렬
          margin: "0 auto", // 가운데 정렬
        }}
      >
        {Array.from({ length: 9 }, (_, index) => {
          const isCenter = index === 4;
          return (
            <div
              key={index}
              className={`flex items-center justify-center rounded-md border-2 cursor-pointer transition-transform transform hover:scale-105 ${
                isCenter
                  ? "bg-gray-900 text-white font-bold"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
              style={{
                aspectRatio: "1 / 1",
              }}
            >
              {isCenter ? (
                <textarea
                  value={mainGoal}
                  onChange={(e) => setMainGoal(e.target.value)}
                  className="w-full h-full bg-transparent text-center font-bold border-none outline-none resize-none"
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "1rem",
                    lineHeight: "1.5rem",
                    verticalAlign: "middle", // 텍스트 상하 중앙 정렬
                    paddingTop: "calc(50% - 0.75rem)", // 정확한 중앙 정렬 보정
                  }}
                  placeholder="Enter main goal"
                />
              ) : (
                "Sub goal"
              )}
            </div>
          );
        })}
      </div>

      {isCategoryPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            {["Sports", "Work", "Personal"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setIsCategoryPopupOpen(false);
                }}
                className="block w-full p-2 text-left hover:bg-gray-200"
              >
                {cat}
              </button>
            ))}
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md w-full"
              onClick={() => setIsCategoryPopupOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainGoalEdit;
