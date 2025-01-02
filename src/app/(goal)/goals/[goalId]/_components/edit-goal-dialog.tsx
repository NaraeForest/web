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
  updateGoal,
} from "@/actions";
import {
  categories,
} from "@/utils";

type EditGoalDialogForm = {
  category: string,
  name: string,
}
type EditGoalDialogProps = {
  goal: Goal,
};
export function EditGoalDialog({ goal }: EditGoalDialogProps) {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EditGoalDialogForm>({ defaultValues: { name: goal.name, category: goal.category } });
  const onSubmit: SubmitHandler<EditGoalDialogForm> = async (data) => {
    const result = await updateGoal(goal.id, data.name, data.category);
    reset();
    setOpen(false);
    router.push(`/goals/${goal.id}`);
  };
  return (
    <BaseDialog
      title="Edit goal"
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
            Category
          </Label>
          <Select
            className="block max-w-full w-full border border-[#E5E7EB] border-solid rounded-lg py-1 px-3"
            defaultValue=""
            {...register("category", { required: "Please select goal category." })}
          >
            <option
              disabled={true}
              value={""}
            >
              select category
            </option>
            {categories.map(({ title, value }) => (
              <option
                key={value}
                value={value}
              >
                {title}
              </option>
            ))}
          </Select>
          {errors.category && <p
            className="text-red-600 text-[0.625rem]"
          >
            {errors.name?.message}
          </p>}
        </Field>
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
            placeholder="enter goal name"
            type="text"
            {...register("name", { required: "Please enter goal name." })}
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
