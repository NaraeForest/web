import Image from "next/image";

export function NavigationBarLoading() {
  return (
    <header
      className="w-full h-12 flex justify-between items-center px-5"
    >
      <div
        className="flex justify-start gap-4 items-center"
      >
        <Image
          alt="arrow back"
          width={0}
          height={0}
          src={"/arrow-left.svg"}
          className="w-6 h-6"
        />
        <div
          className="animate-pulse bg-[#D9D9D9] w-28 h-5 rounded-full"
        />
      </div>
    </header>
  );
}
