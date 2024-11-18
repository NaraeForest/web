import SubGoal from "../components/subgoal"
import MainGoal from "../components/main-goal"
import Link from "next/link";

export default function main(){

  const mainGoalName = "Learn Infra.";
  const mainGoalProgress = 50;

  const subGoals = [
    { name: "Ansible 공부하기", progress: 80},
    { name: "Terraform 공부하기", progress: 60},
    { name: "Kubernetes 공부하기", progress: 40},
    { name: "Linux 공부하기", progress: 20},
    { name: "네트워크 공부하기", progress: 90},
    { name: "기타 공부하기", progress: 30}
  ]

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="mainGoal p-4">
          <MainGoal name={mainGoalName} progress={mainGoalProgress} />
        </div>
  
        <h2 className="text-2xl font-semibold mt-2 mb-2 ml-6">Sub Goals</h2>
        <div className="flex-1 px-4 pb-14 overflow-y-auto scrollbar-hide">
          <div className="sub-goals-container bg-gray-100 p-4 rounded-lg shadow-md">
            {subGoals.map((goal, index) => (
              <Link href="/subgoalviewer" key={index}>
                <SubGoal name={goal.name} progress={goal.progress} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}