"use client";

import {
  useRouter,
} from "next/navigation";
import {
  Input,
} from "@headlessui/react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  WhitePlusIcon,
} from "@/components";
import {
  createTask,
} from "@/actions";

type CreateTaskForm = {
  name: string,
}
type CreateTaskProps = {
  goalId: number,
  subGoalId: number,
}
export function CreateTask({ goalId, subGoalId }: CreateTaskProps) {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateTaskForm>();
  const onSubmit: SubmitHandler<CreateTaskForm> = async (data) => {
    const task = await createTask(goalId, subGoalId, data.name);
    reset();
    router.refresh();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between gap-3 mt-4"
      >
        <Input
          placeholder="Add a new task"
          className="border border-solid border-[#E5E7EB] rounded-[0.25rem] w-full px-3 py-2 text-xs placeholder:text-[#D2D2D2]"
          {...register("name", { required: "Please enter task name." })}
        />
        {errors.name && <p
          className="text-red-600 text-[0.625rem]"
        >
          {errors.name.message}
        </p>}
        <button
          type="submit"
          className="flex justify-between items-center gap-2 text-white bg-[#333333] rounded-[0.25rem] p-2 text-xs min-w-[6.125rem]"
        >
          <WhitePlusIcon />
          Add Task
        </button>
      </form>
    </div>
  );
}
