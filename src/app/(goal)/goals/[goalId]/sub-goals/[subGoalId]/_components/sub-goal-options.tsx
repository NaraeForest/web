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
  deleteSubGoal,
  SubGoal,
} from "@/actions";
import {
  EditSubGoalDialog,
} from "./edit-sub-goal-dialog";

type SubGoalOptions = {
  goalId: number,
  subGoal: SubGoal,
}
export function SubGoalOptions({ goalId, subGoal }: SubGoalOptions) {
  const router = useRouter();
  const onDeleteSubGoal = useCallback(async () => {
    if (!confirm("Are you sure you want to delete it?")) {
      return;
    }
    await deleteSubGoal(goalId, subGoal.id);
    router.push(`/goals/${goalId}`);
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
            <EditSubGoalDialog
              goalId={subGoal.goal.id}
              subGoal={subGoal}
            />
          </MenuItem>
          <MenuItem>
            <button
              type="button"
              onClick={onDeleteSubGoal}
            >
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
