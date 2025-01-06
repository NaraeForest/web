import {
  Fragment,
} from "react";
import {
  NavigationBarLoading,
  GoalBlockLoading,
  SubGoalBlockLoading,
} from "@/components/loadings";

export default function Loading() {
  const renderSubGoals = () => {
    let items = Array.from({ length: 8 }, (_, k) => k).map((v) => {
      return (
        <SubGoalBlockLoading
          key={v}
        />
      );
    });
    items.splice(4, 0, <GoalBlockLoading key={9} />);
    return items;
  };
  return (
    <Fragment>
      <NavigationBarLoading />
      <div
        className="animate-pulse w-16 h-3 mx-5 bg-[#D9D9D9] rounded-full"
      />
      <div className="grid grid-cols-3 grid-rows-3 gap-2 max-w-[400px] m-auto p-5">
        {renderSubGoals()}
      </div>
    </Fragment>
  );
}
