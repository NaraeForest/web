import {
  Fragment,
} from "react";
import {
  readGoal,
} from "@/actions";
import {
  NavigationBar,
} from "@/components";
import {
  EmptyBlock,
  GoalBlock,
  SubGoalBlock,
  CreateSubGoalDialog,
  GoalOptions,
} from "./_components";

type GoalPageProps = {
  params: Promise<{
    goalId: string,
  }>,
}
export default async function Page({ params }: GoalPageProps) {
  const { goalId } = await params;
  const goal = await readGoal(parseInt(goalId, 10));

  const renderSubGoals = () => {
    let subGoals = Array.from({ length: 8 }, (_, k) => k).map((v) => {
      if (v > goal.subGoals.length) {
        return (
          <EmptyBlock
            key={v}
          />
        );
      }
      if (v === goal.subGoals.length) {
        return (
          <CreateSubGoalDialog
            key={v}
            goalId={goal.id}
          />
        );
      }
      return (
        <SubGoalBlock
          key={v}
          href={`/goals/${goal.id}/sub-goals/${goal.subGoals[v].id}`}
          name={goal.subGoals[v].name}
        />
      );
    });
    subGoals.splice(4, 0, <GoalBlock key={9} name={goal.name} />);
    return subGoals;
  };
  return (
    <Fragment>
      <NavigationBar
        title={goal.name}
      >
        <GoalOptions
          goal={goal}
        />
      </NavigationBar>
      <p
        className="text-xs px-5"
      >
        {goal.category}
      </p>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 max-w-[400px] m-auto p-5">
        {renderSubGoals()}
      </div>
    </Fragment>
  );
}
