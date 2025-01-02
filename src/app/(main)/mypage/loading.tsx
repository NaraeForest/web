import {
  BaseBorder,
} from "@/components";

export default function Loading() {
  const loops = Array.from({ length: 8 }, (_, index) => index + 1);
  return (
    <div
      className="safe-area-content"
    >
      <div
        className="relative"
      >
        <div
          className="animate-pulse bg-[#D9D9D9] w-full h-32"
        />
        <div
          className="animate-pulse bg-[#D9D9D9] absolute bottom-0 translate-y-1/2 left-7 w-20 h-20 rounded-full border-2 border-solid border-[#E5E7EB]"
        />
      </div>
      <div
        className="flex flex-col items-start gap-2 px-5"
      >
        <div
          className="animate-pulse bg-[#D9D9D9] rounded-full w-1/3 h-6 mt-12"
        />
        <div
          className="animate-pulse bg-[#D9D9D9] rounded-full w-2/3 h-[0.874rem]"
        />
      </div>
      <div
        className="px-5 pt-2"
      >
        <div
          className="flex gap-3"
        >
          <div
            className="border-b-2 border-[#333333] text-center"
          >
            Goals
          </div>
          <div
            className="border-b-2 border-transparent data-[selected]:border-[#333333] text-center"
          >
            Feeds
          </div>
        </div>
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
    </div>
  );
}
