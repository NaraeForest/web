import Link from "next/link";
import {
  BigProgressBar,
  DescriptionParagraph,
} from "@/components";
import {
  readUserGoals,
} from "@/actions";

type GoalListProps = {
  userId: number,
};
export async function GoalList({ userId }: GoalListProps) {
  const goals = await readUserGoals(userId);
  return (
    <div
      className="flex flex-col gap-4 py-5"
    >
      {goals.map((goal) => (
        <Link
          key={goal.id}
          href={`/goals/${goal.id}`}
          className="border rounded-xl border-[#E5E7EB] w-full h-32 p-4 block"
        >
          <p
            className="text-2xl pb-4"
          >
            {goal.name}
          </p>
          <BigProgressBar
            progress={Math.floor(goal.complete / goal.totals * 100) || 0}
          />
          <DescriptionParagraph>
            {Math.floor(goal.complete / goal.totals * 100) || 0}% of goals completed
          </DescriptionParagraph>
        </Link>
      ))}
    </div>
  );
}
