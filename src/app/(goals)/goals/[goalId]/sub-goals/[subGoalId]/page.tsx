"use client";
import Image from "next/image";
import {
  useRouter,
} from "next/navigation";
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  AddTaskForm,
} from "@/components/add-task-form";
import {
  EditSubGoal,
} from "@/components/edit-sub-goal";
import {
  Task,
} from "@/components/task";
import {
  AddGoalFeed,
} from "@/components/add-goal-feed";
import {
  useProfile,
} from "@/utils";
import { readSubGoal } from "@/actions";

type PageProps = {
  params: {
    goalId: number,
    subGoalId: number,
  },
}
export default function Page({ params: { goalId, subGoalId } }: PageProps) {
  const profile = useProfile();
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);
  const [isSubEdit, setIsSubEdit] = useState<boolean>(false);
  const editSubGoal = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubEdit(true);
  }, []);
  const [subGoal, setSubGoal] = useState<any>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await readSubGoal(goalId, subGoalId);
      setSubGoal(data);
      setTasks(data.tasks);
    })();
  }, []);
  const reloadSubGoal = useCallback(() => {
    (async () => {
      const { data } = await readSubGoal(goalId, subGoalId);
      setSubGoal(data);
      setTasks(data.tasks);
    })()
  }, []);
  const onSubGoalUpdated = useCallback(() => {
    (async () => {
      const { data } = await readSubGoal(goalId, subGoalId);
      setSubGoal(data);
      setIsSubEdit(false);
      setTasks(data.tasks);
    })();
  }, []);
  const onComplete = useCallback((feedId: number) => {
    router.push(`/feeds/${feedId}`);
  }, []);

  if (subGoal == null) {
    return (<div>loading sub goal...</div>)
  }
  return (
    <div>
      <div className="mx-5 mt-3 mb-8 flex justify-between items-center">
        <div className="flex">
          <button onClick={goBack}>
            <Image src="/x-mark.svg" width={24} height={24} alt="abort to create new goal" />
          </button>
          <h1 className="text-[#333333] text-2xl font-medium ml-4">{subGoal.goal.name}</h1>
        </div>
      </div>
      <div className="px-5">
        <div className="p-4 rounded-xl border-solid border-[1px]  border-gray-300">
          <div className="flex relative">
            {
              isSubEdit ?
                <EditSubGoal
                  subGoalName={subGoal.name}
                  onComplete={onSubGoalUpdated}
                  goalId={subGoal.goal.id}
                  subGoalId={subGoal.id}
                />
                :
                <p className="h-9 w-full text-2xl">{subGoal.name}</p>
            }
            {profile.id === subGoal.goal.user.id && <> {isSubEdit ?
              <button type="submit" className="text-[#333333] text-xs font-semibold absolute right-0 top-2" form="edit-sub-goal">
                save
              </button> :
              <button type="button" onClick={editSubGoal}>
                <Image src={"/pencil.svg"} width={24} height={24} alt="edit goal" />
              </button>
            }</>}
          </div>
          <div className="pt-4">
            <div className="w-full rounded-full h-5 bg-[#F4F4F5]">
              <div className="bg-[#333] h-5 rounded-full" style={{ width: `${Math.round(subGoal.complete / subGoal.totals * 100) || 0}%` }} />
            </div>
          </div>
          <p className="pt-1 text-[#71717A]">{Math.round(subGoal.complete / subGoal.totals * 100) || 0}% of goals completed</p>
        </div>
        <div>
          <h2 className="py-5 text-2xl text-[#333]">Task</h2>
          <ul>
            {profile.id === subGoal.goal.user.id ? tasks.map((task: any) => (
              <Task
                key={task.id}
                goalId={subGoal.goal.id}
                subGoalId={subGoal.id}
                taskId={task.id}
                name={task.name}
                complete={task.complete}
                onComplete={onSubGoalUpdated}
                onRemoved={reloadSubGoal}
              />
            )) : tasks.map((task: any) => (
              <li
                className="flex justify-between items-center"
              >
                <label
                  className="flex gap-2"
                >
                  <input
                    className="w-4 h-4 checked:accent-[#333]"
                    type="checkbox"
                    checked={task.complete} />
                  <span
                    className="text-xs font-semibold text-[#333]"
                  >
                    {task.name}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        {profile.id === subGoal.goal.user.id && <>
          <AddTaskForm
            goalId={subGoal.goal.id}
            subGoalId={subGoal.id}
            onCreated={reloadSubGoal}
          />
          <AddGoalFeed
            subGoalId={subGoal.id}
            onComplete={onComplete}
          />
        </>}
      </div>
    </div>
  );
}
