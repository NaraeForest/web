import React, { useState } from "react";
import { useRouter } from "next/router";
import { goals } from "../../../data/Goals";

const SubGoalEdit = () => {
  const router = useRouter();
  const { position } = router.query;
  const subGoal = goals.subGoals.find((goal) => goal.position === position);

  const [goal, setGoal] = useState(subGoal ? subGoal.goal : "");

  const handleSave = () => {
    alert(`Sub goal saved: ${goal}`);
    router.push(`/SubGoal/${position}`); // 저장 후 서브 골 뷰어 페이지로 이동
  };

  if (!subGoal) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">Sub Goal not found.</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-100 p-4">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-lg" onClick={() => router.back()}>
          ←
        </button>
        <h1 className="text-xl font-bold">Edit Sub Goal</h1>
        <button className="text-lg" onClick={handleSave}>
          Save
        </button>
      </div>

      {/* 편집 영역 */}
      <textarea
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full border p-2 rounded-md"
        placeholder="Edit your sub goal"
      />
    </div>
  );
};

export default SubGoalEdit;
