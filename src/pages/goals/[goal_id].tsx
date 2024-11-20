import Image from "next/image";
import {
  useRouter,
} from "next/router";
import {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  EditGoal,
} from "@/components/edit-gaol";
import {
  AddSubGoal,
} from "@/components/add-sub-goal";
import {
  SubGoalBlock,
} from "@/components/sub-goal-block";
import {
  getGoal,
} from "@/actions";

export default function NewGoalPage() {
  const [subGoals, setSubGoals] = useState<ReactElement[]>([]);
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);
  const [isEditGoal, setEditGoal] = useState<boolean>(false);
  const editGoal = useCallback(() => {
    setEditGoal(true);
  }, []);
  const [goal, setGoal] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const goalId = router.query.goal_id as string;
      const { data } = await getGoal(parseInt(goalId, 10));
      setGoal(data);
    })();
  }, []);
  useEffect(() => {
    if (goal == null) {
      return;
    }
    const items = [];
    for (let i = 0; i < 7; i++) {
      items.push(<div className="bg-[#F4F4F5] rounded-lg relative max-w-32 max-h-32 w-full h-full aspect-square" />);
    }
    goal.subGoals.map((subGoal: any, i: number) => {
      items[i] = (<SubGoalBlock
        href={`/goals/${goal.id}/sub-goals/${subGoal.id}`}
        name={subGoal.name}
      />)
    });
    if (goal.subGoals.length < 8) {
      items.splice(goal.subGoals.length, 0, <AddSubGoal goalId={goal.id} />);
    }
    items.splice(4, 0, <div className="bg-[#333333] rounded-lg relative max-w-32 max-h-32 w-full h-full aspect-square">
      <p className="pl-2 pt-2 text-white">Main goal</p>
      <p className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 text-[#D2D2D2] px-2 w-full text-center">
        {goal.name}
      </p>
    </div>);
    setSubGoals(items);
  }, [goal]);
  const onCompleteUpdateGoal = useCallback(() => {
    (async () => {
      const goalId = router.query.goal_id as string;
      const { data } = await getGoal(parseInt(goalId, 10));
      setGoal(data);
      setEditGoal(false);
    })();
  }, []);
  if (goal == null) {
    return (<div>loading goals...</div>);
  }
  return (
    <div>
      <div className="mx-5 mt-3 mb-8 flex justify-between items-center">
        <div className="flex">
          <button onClick={goBack}>
            <Image src="/x-mark.svg" width={24} height={24} alt="abort to create new goal" />
          </button>
          <h1 className="text-[#333333] text-2xl font-medium ml-4">{goal.name}</h1>
        </div>
        {isEditGoal ?
          <button type="submit" className="text-[#333333] text-xs font-semibold" form="edit-goal">
            save
          </button> :
          <button type="button" onClick={editGoal}>
            <Image src={"/pencil.svg"} width={24} height={24} alt="edit goal" />
          </button>
        }
      </div>
      {isEditGoal ? <EditGoal
        onComplete={onCompleteUpdateGoal}
        goalId={goal.id}
        name={goal.name}
        category={goal.category}
      /> :
        <p
          className="text-[#333333] text-xs pl-5"
        >
          {goal.category}
        </p>
      }
      <div className="grid grid-cols-3 grid-rows-3 gap-2 max-w-[400px] m-auto p-5">
        {subGoals.map((element, i) => (
          <Fragment key={i}>
            {element}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
