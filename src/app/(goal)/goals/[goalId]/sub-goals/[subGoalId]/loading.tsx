import {
  Fragment,
} from "react";
import {
  BaseBorder,
  Heading2,
  WhitePlusIcon,
} from "@/components";
import {
  FeedFormLoading,
  NavigationBarLoading,
} from "@/components/loadings";

export default function Loading() {
  const tasks = Array.from({ length: 8 }).map((_, k) => k);
  return (
    <Fragment>
      <NavigationBarLoading />
      <div
        className="px-5 pb-5"
      >
        <BaseBorder>
          <div
            className="animate-pulse bg-[#D9D9D9] w-1/3 h-8 rounded-full mb-4"
          />
          <div
            className="animate-pulse bg-[#D9D9D9] w-full h-5 rounded-full mb-1"
          />
          <div
            className="animate-pulse bg-[#D9D9D9] w-1/4 h-[0.625rem] rounded-full"
          />
        </BaseBorder>
        <div
          className="my-4"
        >
          <Heading2>
            Tasks
          </Heading2>
        </div>
        <div
          className="flex flex-col gap-5"
        >
          {tasks.map((i) => (
            <div
              key={i}
              className="flex items-center gap-2"
            >
              <div
                className="animate-pulse bg-[#D9D9D9] w-3 h-3 rounded-[0.25rem]"
              />
              <div
                className="animate-pulse bg-[#D9D9D9] w-2/5 h-3 rounded-full"
              />
            </div>
          ))}
        </div>
        <div
          className="flex justify-between gap-3 mt-4"
        >
          <div
            className="border border-solid border-[#E5E7EB] rounded-[0.25rem] w-full py-3 px-3 text-xs placeholder:text-[#D2D2D2]"
          >
            <div
              className="animate-pulse bg-[#D9D9D9] w-2/3 h-4 rounded-full"
            />
          </div>
          <div
            className="flex justify-between items-center gap-2 text-white bg-[#333333] rounded-[0.25rem] p-2 text-xs min-w-[6.125rem]"
          >
            <WhitePlusIcon />
            Add Task
          </div>
        </div>
        <hr
          className="my-5"
        />
        <FeedFormLoading />
      </div>
    </Fragment>
  );
}
