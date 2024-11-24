import {
  updateSubGoal,
} from "@/actions";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";

type EditSubGoalForm = {
  name: string;
}
type EditSubGoalProps = {
  goalId: number,
  subGoalId: number,
  subGoalName: string,
  onComplete: () => void,
}
export function EditSubGoal({ goalId, subGoalId, subGoalName, onComplete }: EditSubGoalProps) {
  const { handleSubmit, register } = useForm<EditSubGoalForm>({ defaultValues: { name: subGoalName } });
  const onSubmit: SubmitHandler<EditSubGoalForm> = async (body) => {
    const { success } = await updateSubGoal(goalId, subGoalId, body.name);
    if (success) {
      onComplete();
    }
  };
  return (
    <form
      id="edit-sub-goal"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name", { required: true })}
        className="h-9 w-full text-2xl border-b"
        type="text"
      />
    </form>
  );
}
