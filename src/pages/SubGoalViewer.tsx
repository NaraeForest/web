import React, { useState } from 'react';
import Header from '@/components/SubGoalHeader';
import MainGoal from '@/components/MainGoal';
import TaskList from '@/components/TaskList';
import FeedWriter from "@/components/FeedWriter";

export default function Home() {
    const subGoalName = "Grafana Study"
    // progress 상태를 상위 컴포넌트에서 관리
    const [subGoalProgress, setProgress] = useState(80);

    // 진행률 업데이트 함수
    const handleProgressChange = (newProgress: number) => {
    setProgress(newProgress);
  };

  const MainGoalName = "Learn ansible";

  return (
    <div>
      <main className="container mx-auto p-4">
        <Header title={MainGoalName} />
        <MainGoal name={subGoalName} progress={subGoalProgress} />
        <TaskList onProgressChange={handleProgressChange} />
        <FeedWriter />
      </main>
    </div>
  );
}