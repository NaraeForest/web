import SubGoal from "@/components/SubGoal"

export default function main(){

    const mainGoalName = "Learn Infra.";
    const mainGoalProgress = 50;

    const subGoals = [
        { name: "Ansible 공부하기", progress: 80},
        { name: "Terraform 공부하기", progress: 60},
        { name: "Kubernetes 공부하기", progress: 40},
        { name: "Linux 공부하기", progress: 20},
        { name: "네트워크 공부하기", progress: 90}
    ]

    return (
        <>
          <section className="mainGoal w-full mb-8">
            <div className="goalCard bg-gray-100 p-4 rounded-lg shadow-md">
              <h1 className="text-lg font-semibold mb-2">{mainGoalName}</h1>
              <div className="progressBar w-full bg-gray-300 rounded-full h-2 mb-2">
                <div
                  className="progress bg-black h-2 rounded-full"
                  style={{ width: `${mainGoalProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">{mainGoalProgress}% of goals completed</p>
            </div>
          </section>
    
          <section className="subGoal">
            <h2 className="text-xl font-semibold mb-4 ml-2">Sub Goals</h2>
            {subGoals.map((goal, index) => (
              <SubGoal key={index} name={goal.name} progress={goal.progress} />
            ))}
          </section>
        </>
      );
}