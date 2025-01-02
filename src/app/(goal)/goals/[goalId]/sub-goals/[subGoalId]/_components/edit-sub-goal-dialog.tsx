"use client";

import {
  Fragment,
  useState,
} from "react";
import {
  useRouter,
} from "next/navigation";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  Field,
  Input,
  Label,
  Select,
} from "@headlessui/react";
import {
  BaseDialog,
} from "@/components";
import {
  Goal,
  SubGoal,
  updateGoal,
  updateSubGoal,
} from "@/actions";
import {
  categories,
} from "@/utils";

type EditSubGoalDialogForm = {
  name: string,
}
type EditSubGoalDialogProps = {
  goalId: number,
  subGoal: SubGoal,
};
export function EditSubGoalDialog({ goalId, subGoal }: EditSubGoalDialogProps) {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EditSubGoalDialogForm>({ defaultValues: { name: subGoal.name } });
  const onSubmit: SubmitHandler<EditSubGoalDialogForm> = async (data) => {
    const result = await updateSubGoal(goalId, subGoal.id, data.name);
    reset();
    setOpen(false);
    router.refresh();
  };
  return (
    <BaseDialog
      title="Edit sub goal"
      state={isOpen}
      dispatch={setOpen}
      clickElement={<Fragment>Edit</Fragment>}
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
