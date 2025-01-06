import {
  Fragment,
} from "react";
import {
  BaseBorder,
  BigProgressBar,
  DescriptionParagraph,
  FeedForm,
  Heading2,
  NavigationBar,
} from "@/components";
import {
  readSubGoal,
} from "@/actions";
import {
  TaskItem,
  CreateTask,
  SubGoalOptions,
} from "./_components";

type SubGoalPageProps = {
  params: Promise<{
    goalId: string,
    subGoalId: string,
  }>,
}
export default async function Page({ params }: SubGoalPageProps) {
  const { goalId, subGoalId } = await params;
  const subGoal = await readSubGoal(parseInt(goalId, 10), parseInt(subGoalId, 10));
  return (
    <Fragment>
      <NavigationBar
        title={subGoal.goal.name}
      >
      </NavigationBar>
      <div
        className="px-5 pb-5"
      >
        <BaseBorder>
          <div
            className="flex justify-between pb-4"
          >
            <p
              className="text-2xl"
            >
              {subGoal.name}
            </p>
            <SubGoalOptions
              goalId={subGoal.goal.id}
              subGoal={subGoal}
            />
          </div>
          <BigProgressBar
            progress={Math.floor(subGoal.complete / subGoal.totals * 100) || 0}
          />
          <DescriptionParagraph>
            {Math.floor(subGoal.complete / subGoal.totals * 100) || 0}% of tasks completed
          </DescriptionParagraph>
        </BaseBorder>
        <div
          className="my-4"
        >
          <Heading2>
            Tasks
          </Heading2>
        </div>
        {subGoal.tasks.map((task) => (
          <TaskItem
            key={task.id}
            goalId={subGoal.goal.id}
            subGoalId={subGoal.id}
            task={task}
          />
        ))}
        <CreateTask
          goalId={subGoal.goal.id}
          subGoalId={subGoal.id}
        />
        <hr
          className="my-5"
        />
        <FeedForm
          subGoalId={subGoal.id}
        />
      </div>
    </Fragment>
  );
}
