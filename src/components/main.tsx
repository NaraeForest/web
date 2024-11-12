import SubGoal from "@/components/subGoal"

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
        <section className="mainGoal">
            <div className="goalCard">
                <h1>{mainGoalName}</h1>
                <div className="progressBar">
                    <div className = "progress" style={{width: `${mainGoalProgress}%`}}></div>
                </div>
                <p>{mainGoalProgress}% of goals completed</p>
            </div>

        </section>

        <section className="subGoal">
            <h2>Sub Goals</h2>
            {subGoals.map((goal, index) => (
                <SubGoal key={index} name={goal.name} progress={goal.progress} />
            ))}
        </section>

        <div className="footercontainer">
            <footer className="footer">
                <button>Home</button>
                <button>Feeds</button>
                <button>Trends</button>
                <button>Mypage</button>
            </footer>
        </div>


        <style jsx>{`
            .mainGoal {
                width: 100%;
                margin-bottom: 32px;
                text-align = center;
            }

            .goalCard {
                background-color: #f3f3f3;
                padding: 16px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .goalCard h1 {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 8px;
            }

            .progressBar {
                width: 100%;
                background-color: #d1d5db;
                border-radius: 4px;
                height: 8px;
                margin-bottom: 8px;
            }       

            .progress {
                height: 8px;
                background-color: #000;
                border-radius: 4px;
            }

            p {
                font-size: 14px;
                color: #6b7280;
            }

            h2 {
                font-size: 30px;
                margin-left: 10px;
                margin-bottom: 16px;
            }

            .footercontainer{
                display: flex;
                justify-content: center;
            }

            .footer {
                position: fixed;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: space-around;
                background-color: #fff;
                padding: 12px 0;
                box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
            }

            .footer button {
                font-size: 16px;
            }
            `}</style>
        </>
    )
}