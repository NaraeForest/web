"use client";

import {
  useState,
} from "react";
import {
  useRouter,
} from "next/navigation";
import {
  Field,
  Input,
  Label,
} from "@headlessui/react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  BaseDialog,
} from "@/components";
import {
  createSubGoal,
} from "@/actions";
import {
  PlusBlock,
} from "./sub-goal-block";

type CreateSubGoalDialogForm = {
  name: string,
};
type CreateSubGoalDialogProps = {
  goalId: number,
}
export function CreateSubGoalDialog({ goalId }: CreateSubGoalDialogProps) {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateSubGoalDialogForm>();
  const onSubmit: SubmitHandler<CreateSubGoalDialogForm> = async (data) => {
    const subGoal = await createSubGoal(goalId, data.name);
    reset();
    setOpen(false);
    router.push(`/goals/${goalId}/sub-goals/${subGoal.id}`);
  };
  return (
    <BaseDialog
      title="Setup goal"
      clickElement={<PlusBlock />}
      state={isOpen}
      dispatch={setOpen}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          className="mb-2"
        >
          <Label
            className="text-sm font-medium"
          >
            Name
          </Label>
          <Input
            className="block max-w-full w-full border border-[#E5E7EB] border-solid rounded-lg py-1 px-3"
            placeholder="enter sub goal name"
            type="text"
            {...register("name", { required: "Please enter sub goal name." })}
          />
          {errors.name && <p
            className="text-red-600 text-[0.625rem]"
          >
            {errors.name.message}
          </p>}
        </Field>
        <Input
          type="submit"
          value={"save"}
          className="w-full h-9 rounded-lg bg-[#333333] text-white font-semibold"
        />
      </form>
    </BaseDialog>
  );
}
