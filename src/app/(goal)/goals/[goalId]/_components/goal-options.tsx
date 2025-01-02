"use client";

import Image from "next/image";
import {
  useCallback,
} from "react";
import {
  useRouter,
} from "next/navigation";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  deleteGoal,
  Goal,
} from "@/actions";
import {
  EditGoalDialog,
} from "./edit-goal-dialog";


type GoalOptionsProps = {
  goal: Goal,
}
export function GoalOptions({ goal }: GoalOptionsProps) {
  const router = useRouter();
  const onDeleteGoal = useCallback(async () => {
    if (!confirm("Are you sure you want to delete it?")) {
      return;
    }
    const result = await deleteGoal(goal.id);
    router.refresh();
  }, []);
  return (
    <div
      className="relative"
    >
      <Menu>
        <MenuButton>
          <Image
            alt="ellipsis-vertical"
            width={0}
            height={0}
            src={"/ellipsis-vertical.svg"}
            className="w-6 h-6"
          />
        </MenuButton>
        <MenuItems
          className="absolute right-2 top-2 z-40 bg-white border border-solid border-[#E5E7EB] p-3 rounded-lg flex flex-col gap-3 justify-start items-start"
        >
          <MenuItem>
            <EditGoalDialog
              goal={goal}
            />
          </MenuItem>
          <MenuItem>
            <button
              type="button"
              onClick={onDeleteGoal}
            >
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
