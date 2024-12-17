"use client";

import {
  readUserProfile,
} from "@/actions";
import {
  BattomNavigationBar,
} from "@/components/bottom-navigation-bar";
import {
  UserFeedList,
} from "@/components/user-feed-list";
import {
  UserGoalList,
} from "@/components/user-goal-list";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import Image from "next/image";
import {
  useRouter,
} from "next/navigation";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

type PageProps = {
  params: {
    userId: number,
  },
}
export default function Page({ params }: PageProps) {
  const { userId } = params;
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);
  const [profile, setProfile] = useState<any>();
  useEffect(() => {
    (async () => {
      const { data } = await readUserProfile(userId);
      setProfile(data);
    })();
  }, [userId]);
  if (profile == null) {
    return (<div />)
  }
  return (
    <div>
      <div className="mx-5 my-3 flex justify-between items-center">
        <div className="flex">
          <button onClick={goBack}>
            <Image src="/x-mark.svg" width={24} height={24} alt="abort to create new goal" />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          alt="profile background image"
          src={profile.headerImage}
          width={window.innerWidth}
          height={128}
          className="w-full h-32 border-b"
        />
        <Image
          alt="profile image"
          src={profile.profileImage}
          width={96}
          height={96}
          className="rounded-full absolute left-5 top-32 -translate-y-1/2 border z-10"
        />
        <p
          className="mx-5 mt-16 text-2xl"
        >
          {profile.nickname}
        </p>
        <p
          className="mx-5 mt-2"
        >
          {profile.bio}
        </p>
      </div>
      <TabGroup
        className={"m-5 mb-16"}
      >
        <TabList className={"flex gap-3 pb-4"}>
          <Tab className={"text-[#333333] data-[selected]:border-b-2 border-[#333333]"}>
            Goals
          </Tab>
          <Tab className={"text-[#333333] data-[selected]:border-b-2 border-[#333333]"}>
            Feeds
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserGoalList
              userId={profile.id}
            />
          </TabPanel>
          <TabPanel>
            <UserFeedList
              userId={profile.id}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <BattomNavigationBar />
    </div>
  );
}
