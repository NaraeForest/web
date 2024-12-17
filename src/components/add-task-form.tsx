import Image from "next/image";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  createTask,
} from "@/actions";

type AddTaskFormProps = {
  goalId: number,
  subGoalId: number,
  onCreated: () => void,
};
type TaskForm = {
  name: string,
};
export function AddTaskForm({ goalId, subGoalId, onCreated }: AddTaskFormProps) {
  const { register, handleSubmit, reset, } = useForm<TaskForm>();
  const onSubmit: SubmitHandler<TaskForm> = async (body) => {
    const { success } = await createTask(goalId, subGoalId, body.name);
    if (success) {
      onCreated();
      reset()
    }
  };
  return (
    <form
      className="flex justify-between gap-3 mt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name", { required: true })}
        placeholder="Add a new task"
        className="px-3 py-2 text-xs placeholder:text-[#D2D2D2] border border-[#E5E7EB] rounded w-full"
      />
      <button
        type="submit"
        className="flex justify-center items-center bg-[#333333] text-white text-xs pl-2 pr-4 rounded gap-1 min-w-24"
      >
        <Image
          src={"/white-plus.svg"}
          alt="add task"
          width={16}
          height={16}
        />
        Add Task
      </button>
    </form>
  );
}
