import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/subgoal-header";
import SubGoal from "@/components/subgoal";
import TaskList from "@/components/tasklist";
import FeedWriter from "@/components/feedwriter";

export default function SubGoalViewer() {
  const router = useRouter();
  const { subGoalName = "Default SubGoal", position = "" } = router.query;

  // 진행률 상태
  const [subGoalProgress, setProgress] = useState(0);

  // 진행률 업데이트 함수
  const handleProgressChange = (newProgress: number) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <main className="container mx-auto p-4">
        <Header title={subGoalName as string} />
        <div className="flex items-center justify-between mb-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex-grow mr-3">
            <SubGoal name={subGoalName as string} progress={subGoalProgress} />
          </div>
          <Link
            href={{
              pathname: "/subgoaledit",
              query: { position, subGoalName },
            }}
          >
            <button className="text-gray-500 hover:text-black">
              <img src="/pencil.svg"></img>
            </button>
          </Link>
        </div>

        <TaskList onProgressChange={handleProgressChange} />
        <FeedWriter />
      </main>
    </div>
  );
}
