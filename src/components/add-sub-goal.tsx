import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import {
  Fragment,
  useCallback,
  useState,
} from "react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  useRouter,
} from "next/navigation";
import {
  addSubGoal,
} from "@/actions";

type SubGoalForm = {
  name: string,
};
type AddSubGoalProps = {
  goalId: number,
}
export function AddSubGoal({ goalId }: AddSubGoalProps) {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  const open = useCallback(() => {
    setOpen(true);
  }, []);
  const { register, handleSubmit } = useForm<SubGoalForm>();
  const onSubmit: SubmitHandler<SubGoalForm> = async (body) => {
    const { success, data } = await addSubGoal(goalId, body.name);
    if (success) {
      router.push(`/goals/${goalId}/sub-goals/${data.id}`);
    }
  };

  return (
    <Fragment>
      <button onClick={open} className="flex flex-col bg-[#F4F4F5] rounded-lg relative max-w-32 max-h-32 w-full h-full aspect-square">
        <p className="pl-2 pt-2">Sub Goal</p>
        <Image
          className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"
          alt="add new sub-goal"
          src={"/plus.svg"}
          width={24}
          height={24}
        />
      </button>
      <Dialog className={"relative z-50"} open={isOpen} onClose={onClose}>
        <div className="bg-gray-300 blur w-screen h-screen fixed inset-0 opacity-80"></div>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-4 rounded-xl">
            <DialogTitle className="font-bold">Setup Goal</DialogTitle>

            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
    </Fragment>
  );
}
