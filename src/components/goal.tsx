import SubGoal from "@/components/SubGoal"
import MainGoal from "@/components/mainGoal"

export default function main(){

    const mainGoalName = "Learn Infra.";
    const mainGoalProgress = 50;

    const subGoals = [
        { name: "Ansible 공부하기", progress: 80},
        { name: "Terraform 공부하기", progress: 60},
        { name: "Kubernetes 공부하기", progress: 40},
        { name: "Linux 공부하기", progress: 20},
        { name: "네트워크 공부하기", progress: 90},
        { name: "네트워크 공부하기", progress: 90}
    ]

    return (
        <>
        <div className="flex flex-col">
          <div className= "mainGoal flex-1">
            <MainGoal name={mainGoalName} progress={mainGoalProgress} />
          </div>
          
          <section className="subGoal flex-5 overflow-y-auto mt-6">
            <h2 className="text-xl font-semibold mb-4 ml-2">Sub Goals</h2>
            {subGoals.map((goal, index) => (
              <SubGoal key={index} name={goal.name} progress={goal.progress} />
            ))}
          </section>
        </div>
        </>
      );
}