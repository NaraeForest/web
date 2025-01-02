import Image from "next/image";


export function FeedFormLoading() {
  return (
    <div
      className="flex flex-col gap-2"
    >
      <div
        className="border border-solid border-[#E5E7EB] rounded-lg w-full h-auto min-h-32 p-3"
      >
        <div
          className="animate-pulse bg-[#D9D9D9] w-2/3 h-4 rounded-full"
        />
      </div>
      <div
        className="flex justify-between items-center"
      >
        <Image
          alt="galary"
          width={0}
          height={0}
          src="/photo.svg"
          className="w-6 h-6"
        />
        <div
          className="rounded-lg bg-[#333333] text-white font-semibold px-4 py-2"
        >
          send
        </div>
      </div>
    </div>
  );
}
