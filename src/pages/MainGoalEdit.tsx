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
    router.push("/MainGoalViewer");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 p-4">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-lg" onClick={() => router.back()}>
          ✕
        </button>
        <h1 className="text-xl font-bold">Setup goals</h1>
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

      {/* Main Goal */}
      <textarea
        value={mainGoal}
        onChange={(e) => setMainGoal(e.target.value)}
        className="w-full border p-2 rounded-md mb-4"
        placeholder="Enter main goal"
      />

      {/* 3x3 Mandalart */}
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-lg border p-4 ${
              index === 4
                ? "bg-gray-900 text-white font-bold"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {index === 4 ? mainGoal : "Sub goal"}
          </div>
        ))}
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
