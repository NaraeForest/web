import {
  BattomNavigationBar,
} from "@/components/bottom-navigation-bar";
import Image from "next/image";

const categories = {
  "All": "all",
  "Sports": "sports",
  "Sports1": "sports1",
  "Sports2": "sports2",
  "Sports3": "sports3",
  "Sports4": "sports4",
  "Sports5": "sports5",
};

export default function FeedPage() {
  return (
    <div>
      <div className="mx-5 mt-16 mb-3">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[2rem]">Feeds</h1>
        </div>
      </div>
      <div className="flex gap-2 mx-5 overflow-y-scroll">
        {Object.values(categories).map((category) => (
          <div key={category} className="text-[#333333] text-[0.625rem] leading-[0.625rem] text-center py-[6px] px-2 border rounded-full border-[#E5E7EB] min-w-12">
            {category}
          </div>
        ))}
      </div>
      <div className="p-5 flex flex-col gap-5  mb-16">

        <div className="border border-[#E5E7EB] rounded-lg p-4">
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
            고추참치 고추참치 참치 참치 고추참치
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

        <div className="border border-[#E5E7EB] rounded-lg p-4">
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
            고추참치 고추참치 참치 참치 고추참치
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

        <div className="border border-[#E5E7EB] rounded-lg p-4">
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
            고추참치 고추참치 참치 참치 고추참치
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

        <div className="border border-[#E5E7EB] rounded-lg p-4">
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
            고추참치 고추참치 참치 참치 고추참치
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

        <div className="border border-[#E5E7EB] rounded-lg p-4">
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
            고추참치 고추참치 참치 참치 고추참치
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

      </div>

      <BattomNavigationBar />
    </div>
  );
}
