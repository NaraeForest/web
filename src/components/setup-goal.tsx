import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { categories } from "@/utils";
import { createGoal } from "@/actions";

type IProps = {
  isOpen: boolean,
  onClose: (value: boolean) => void,
  onComplete: () => void,
}
type GoalForm = {
  name: string,
  category: string,
}
export function SetupGoalDialog({ isOpen, onClose, onComplete }: IProps) {
  const { handleSubmit, register } = useForm<GoalForm>();
  const onSubmit: SubmitHandler<GoalForm> = async (body) => {
    const { success, data } = await createGoal(body.name, body.category);
    onClose(true);
    onComplete();
  };

  return (
    <Dialog className={"relative z-50"} open={isOpen} onClose={onClose}>
      <div className="bg-gray-300 blur w-screen h-screen fixed inset-0 opacity-80"></div>
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-4 rounded-xl">
          <DialogTitle className="font-bold">Setup Goal</DialogTitle>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <select className="w-40" {...register("category", { required: true })}>
              {Object.keys(categories).map((key) => (
                <option value={(categories as any)[key]}>{key}</option>
              ))}
            </select>
            <input placeholder="Enter goal" className="border-b text-xl mt-2" {...register("name", { required: true })} />
            <input type="submit" value={"send"} />
          </form>

          <div className="flex gap-4">
            {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
            {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}