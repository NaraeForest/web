import {
  BattomNavigationBar,
} from "@/components/bottom-navigation-bar";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import Image from "next/image";

export default function MyPage() {
  return (
    <div>
      <div className="relative">
        <Image alt="profile background image" src="" height={128} className="w-full h-32 border-b" />
        <Image alt="profile image" src="" width={96} height={96} className="rounded-full absolute left-5 top-32 -translate-y-1/2 border z-10" />
        <button className="absolute top-36 right-5 text-[#333333] text-sm leading-4 px-3 py-2 border rounded-full">
          Edit Profile
        </button>
        <p className="mx-5 mt-16 text-2xl">
          이재호
        </p>
        <p className="mx-5 mt-2">
          밖에 나온 순간 끝났어, 날씨는 좋은데 앞으로 못나아가
        </p>
      </div>

      <TabGroup className={"m-5 mb-16"}>
        <TabList className={"flex gap-3"}>
          <Tab className={"text-[#333333] data-[selected]:border-b-2 border-[#333333]"}>
            Goals
          </Tab>
          <Tab className={"text-[#333333] data-[selected]:border-b-2 border-[#333333]"}>
            Feeds
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            asdfasd
          </TabPanel>
          <TabPanel>
            asdfasd
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <BattomNavigationBar />
    </div>
  )
}
