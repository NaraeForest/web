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
  deleteFeed,
  Feed,
} from "@/actions";

type FeedOptionsProps = {
  feed: Feed,
}
export function FeedOptions({ feed }: FeedOptionsProps) {
  const router = useRouter();
  const onDeleteFeed = useCallback(async () => {
    if (!confirm("Are you sure you want to delete it?")) {
      return;
    }
    const result = await deleteFeed(feed.id);
    router.push("/");
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
            <div>
              Edit
            </div>
          </MenuItem>
          <MenuItem>
            <button
              type="button"
              onClick={onDeleteFeed}
            >
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
