"use client";

import {
  ChangeEventHandler,
  useCallback,
  useState,
} from "react";
import {
  useRouter,
} from "next/navigation";
import {
  XMarkIcon,
} from "@/components";
import {
  deleteTask,
  Task,
  updateTaskComplete,
} from "@/actions";

type TaskItemProps = {
  goalId: number,
  subGoalId: number,
  task: Task,
};
export function TaskItem({ goalId, subGoalId, task }: TaskItemProps) {
  const router = useRouter();
  const [isPending, setPending] = useState<boolean>(false);
  const [isComplete, setComplete] = useState<boolean>(task.complete);
  const onDeleteClick = useCallback(async () => {
    if (!confirm("Are you sure you want to delete it?")) {
      return;
    }
    await deleteTask(goalId, subGoalId, task.id);
    router.refresh();
  }, []);
  const onCompleteChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    setPending(true);
    const current = e.target.checked;
    await updateTaskComplete(goalId, subGoalId, task.id, current);
    setComplete(current);
    setPending(false);
    router.refresh();
  };
  return (
    <div
      className="flex justify-between items-center"
    >
      <label
        className="flex justify-start items-center gap-2"
      >
        <input
          type="checkbox"
          checked={isComplete}
          onChange={onCompleteChange}
          disabled={isPending}
        />
        {task.name}
      </label>
      <button
        type="button"
        onClick={onDeleteClick}
      >
        <XMarkIcon />
      </button>
    </div>
  );
}
