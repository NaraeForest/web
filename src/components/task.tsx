import {
  completeTask,
  deleteTask,
} from "@/actions";
import Image from "next/image";
import {
  ChangeEventHandler,
  useCallback,
  useState,
} from "react";

type TaskProps = {
  complete: boolean,
  name: string,
  goalId: number,
  subGoalId: number,
  taskId: number,
  onRemoved: () => void,
  onComplete: () => void,
};
export function Task({ complete, name, goalId, subGoalId, taskId, onComplete, onRemoved }: TaskProps) {
  const [checked, setChecked] = useState(complete);
  const removeTask = useCallback((goalId: number, subGoalId: number, taskId: number) => () => {
    (async () => {
      const { success } = await deleteTask(goalId, subGoalId, taskId);
      if (success) {
        onRemoved();
      }
    })();
  }, []);

  const changeTaskComplete = useCallback((goalId: number, subGoalId: number, taskId: number): ChangeEventHandler<HTMLInputElement> => {
    return async (e) => {
      const check = e.target.checked;
      setChecked(check);
      const { success } = await completeTask(goalId, subGoalId, taskId, check);
      if (success) {
        onComplete();
      }
    }
  }, []);
  return (
    <li
      className="flex justify-between items-center"
    >
      <label
        className="flex gap-2"
      >
        <input
          className="w-4 h-4 checked:accent-[#333]"
          type="checkbox"
          checked={checked}
          onChange={changeTaskComplete(goalId, subGoalId, taskId)} />
        <span
          className="text-xs font-semibold text-[#333]"
        >
          {name}
        </span>
      </label>
      <button
        type="button"
        onClick={removeTask(goalId, subGoalId, taskId)}
      >
        <Image
          src="/x-mark.svg"
          width={24}
          height={24}
          alt="abort to create new goal"
        />
      </button>
    </li>
  );
}