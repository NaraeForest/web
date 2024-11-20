import Image from "next/image";


export default function FeedDetailPage() {
  return (
    <div>
      <div className="mx-5 my-3 flex justify-between items-center">
        <div className="flex">
          <button>
            <Image src="/x-mark.svg" width={24} height={24} alt="abort to create new goal" />
          </button>
        </div>
      </div>
      <div className="border-y border-[#E5E7EB] p-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Image src="" alt="" width={40} height={40} className="rounded-full" />
            <div className="flex flex-col">
              <p className="text-[#333333] text-sm">Jacob Lee</p>
              <p className="text-[#71717A] text-[0.625rem]">1 hours ago</p>
            </div>
          </div>
          <button>
            <Image alt="ellipsis vertical" src="/ellipsis-vertical.svg" width={24} height={24} />
          </button>
        </div>
        <div className="text-xs text-[#333333]">
          고추참치 고추참치 참치 참치 고추참치<br />
          고추참치 고추참치 참치 참치 고추참치
        </div>
        <div className="flex justify-evenly text-[0.625rem] text-[#333333] mt-3">
          <div className="flex items-center gap-2">
            <Image alt="heart full" src={"/heart-full.svg"} width={16} height={16} />
            Likes
          </div>
          <div className="flex items-center gap-2">
            <Image alt="chat buble" src={"/chat-bubble.svg"} width={16} height={16} />
            Comments
          </div>
          <div className="flex items-center gap-2">
            <Image alt="arrow up tray" src={"/arrow-up-tray.svg"} width={16} height={16} />
            Share
          </div>

        </div>
      </div>
      <div className="border-b border-[#E5E7EB] p-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Image src="" alt="" width={40} height={40} className="rounded-full" />
            <div className="flex flex-col">
              <p className="text-[#333333] text-sm">Jacob Lee</p>
              <p className="text-[#71717A] text-[0.625rem]">1 hours ago</p>
            </div>
          </div>
          <button>
            <Image alt="ellipsis vertical" src="/ellipsis-vertical.svg" width={24} height={24} />
          </button>
        </div>

        <div className="pl-[3.25rem] text-xs text-[#333333]">
          고추참치 고추참치 참치 참치 고추참치<br />
          고추참치 고추참치 참치 참치 고추참치
        </div>
      </div>
      <form className="p-5">
        <div className="pb-1">
          <textarea className="h-32 w-full p-3 rounded border border-[#E5E7EB]" placeholder="What's happening in your goals" />          </div>
        <div className="flex justify-between items-center">
          <label>
            <Image src={"/photo.svg"} width={16} height={16} alt="add task" />
            <input className="hidden" type="file" />
          </label>
          <button type="submit" className="bg-[#333] text-xs rounded-lg px-4 py-2 text-white font-semibold">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}