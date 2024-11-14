import React, { useState } from 'react';
import Link from "next/link"
import Header from '@/components/SubGoalHeader';
import SubGoal from '@/components/SubGoal';
import TaskList from '@/components/TaskList';
import FeedWriter from "@/components/FeedWriter";

export default function SubGoalViewer() {
    const MainGoalName = "Learn ansible";

    const [subGoalName, setSubGoalName] = useState("Grafana Study");
    // default 진행률
    const [subGoalProgress, setProgress] = useState(0);

    // 진행률 업데이트 함수
    const handleProgressChange = (newProgress: number) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <main className="container mx-auto p-4">
        <Header title={MainGoalName} />
        <div className="flex items-center justify-between mb-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className='flex-grow mr-3'>
            <SubGoal name={subGoalName} progress={subGoalProgress} />
          </div>
          <Link href="/SubGoalViewer">
            <button className="text-gray-500 hover:text-black">
              Save
            </button>
          </Link>
        </div>

        <TaskList onProgressChange={handleProgressChange} />
        <FeedWriter />
      </main>
    </div>
  );
}