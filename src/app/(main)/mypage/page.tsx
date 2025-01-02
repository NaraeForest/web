import Image from "next/image";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  readMyProfile,
} from "@/actions";
import {
  EditProfileDialog,
  GoalList,
  FeedList,
} from "./_components";

export default async function Page() {
  const user = await readMyProfile();
  return (
    <div
      className="safe-area-content"
    >
      <div
        className="relative"
      >
        <Image
          alt="user's header image"
          width={0}
          height={0}
          src={user.headerImage}
          className="w-full h-32"
        />
        <Image
          alt="user's profile image"
          width={0}
          height={0}
          src={user.profileImage}
          className="absolute bottom-0 translate-y-1/2 left-7 w-20 h-20 rounded-full border-2 border-solid border-[#E5E7EB]"
        />
      </div>
      <div
        className="flex flex-col items-start gap-2 px-5"
      >
        <EditProfileDialog
          nickname={user.nickname}
          bio={user.bio}
          profileImage={user.profileImage}
          headerImage={user.headerImage}
        />
        <p
          className="text-2xl font-medium"
        >
          {user.nickname}
        </p>
        <p
          className="text-sm"
        >
          {user.bio}
        </p>
      </div>
      <TabGroup
        className="px-5"
      >
        <TabList
          className="flex gap-3"
        >
          <Tab
            className="border-b-2 border-transparent data-[selected]:border-[#333333] text-center outline-none"
          >
            Goals
          </Tab>
          <Tab
            className="border-b-2 border-transparent data-[selected]:border-[#333333] text-center outline-none"
          >
            Feeds
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <GoalList
              userId={user.id}
            />
          </TabPanel>
          <TabPanel
            className="py-5"
          >
            <FeedList
              userId={user.id}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
