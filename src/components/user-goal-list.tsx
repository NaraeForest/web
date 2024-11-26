import Link from "next/link";
import {
  getUserGoals,
} from "@/actions";
import {
  useEffect,
  useState,
} from "react";

type UserGoalListProps = {
  userId: number,
}
export function UserGoalList({ userId }: UserGoalListProps) {
  const [goals, setGoals] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { data, success } = await getUserGoals(userId);
      if (success) {
        setGoals(data);
      }
    })();
  }, []);
  return (
    <div>
      {goals.map((goal: any) => (
        <Link
          href={`/goals/${goal.id}`}
          className="border rounded-xl border-[#E5E7EB] w-full h-32 p-4 block"
        >
          <p className="text-[#333] text-[2rem]">{goal.name}</p>
          <div className="w-full bg-[#F4F4F5] rounded-full h-5 mt-4">
            <div className="bg-[#333] h-full rounded-full" style={{ "width": `${Math.round(goal.complete / goal.totals * 100) || 0}%` }}></div>
          </div>
          <p className="text-[#71717A] text-[0.625rem]">{Math.round(goal.complete / goal.totals * 100) || 0}% of goals completed</p>
        </Link>
      ))}
    </div>
  );
}
