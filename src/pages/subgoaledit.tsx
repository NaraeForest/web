import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/SubGoalHeader";
import SubGoal from "@/components/SubGoal";
import TaskList from "@/components/TaskList";
import FeedWriter from "@/components/FeedWriter";

export default function SubGoalEdit() {
  const router = useRouter();
  const { subGoalName = "Default SubGoal", position = "" } = router.query;

  const [goalName, setGoalName] = useState(subGoalName);

  const handleSave = () => {
    alert(`Saved SubGoal: ${goalName}`);
    router.push({
      pathname: "/SubGoalViewer",
      query: { position, subGoalName: goalName },
    });
  };

  return (
    <div>
      <main className="container mx-auto p-4">
        <Header title={`Editing: ${goalName}`} />
        <div className="flex items-center justify-between mb-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex-grow mr-3">
            <SubGoal name={goalName} progress={0} />
          </div>
          <button className="text-gray-500 hover:text-black" onClick={handleSave}>
            Save
          </button>
        </div>

        <TaskList onProgressChange={() => {}} />
        <FeedWriter />
      </main>
    </div>
  );
}
