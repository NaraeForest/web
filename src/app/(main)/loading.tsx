import {
  Fragment,
} from "react";
import {
  BaseBorder,
  Heading2,
  PageHeader,
  PlusIcon,
} from "@/components";

export default function Loading() {
  const loops = Array.from({ length: 8 }, (_, index) => index + 1);
  return (
    <Fragment>
      <PageHeader
        title="Home"
      >
        <PlusIcon />
      </PageHeader>
      <div
        className="px-5 pt-2"
      >
        <div
          className="mb-5"
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
        </div>
        <Heading2>
          Sub Goals
        </Heading2>
        <div
          className="flex flex-col gap-4 pt-4"
        >
          {loops.map((k) => (
            <BaseBorder
              key={k}
            >
              <div
                className="animate-pulse bg-[#D9D9D9] w-1/3 h-3 rounded-full mb-4"
              />
              <div
                className="animate-pulse bg-[#D9D9D9] w-full h-3 rounded-full mb-1"
              />
              <div
                className="animate-pulse bg-[#D9D9D9] w-1/4 h-[0.625rem] rounded-full"
              />
            </BaseBorder>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
