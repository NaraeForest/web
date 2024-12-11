"use client";

import {
  getMyProfile,
} from "@/actions";
import {
  BattomNavigationBar,
} from "@/components/bottom-navigation-bar";
import {
  EditProfile,
} from "@/components/edit-profile";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";
import {
  UserFeedList,
} from "@/components/user-feed-list";
import {
  UserGoalList,
} from "@/components/user-goal-list";

export default function Page() {
  const [profile, setProfile] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const { data } = await getMyProfile();
      setProfile(data);
    })();
  }, []);
  const onCompleteEditProfile = () => {
    (async () => {
      const { data } = await getMyProfile();
      setProfile(data);
    })();
  };

  if (profile == null) {
    return (<div />)
  }
  return (
    <div>
      <div className="relative">
        <Image alt="profile background image" src={profile.headerImage} width={window.innerWidth} height={128} className="w-full h-32 border-b" />
        <Image alt="profile image" src={profile.profileImage} width={96} height={96} className="rounded-full absolute left-5 top-32 -translate-y-1/2 border z-10" />
        <EditProfile
          nickname={profile.nickname}
          bio={profile.bio}
          profileImage={profile.profileImage}
          headerImage={profile.headerImage}
          onComplete={onCompleteEditProfile}
        />
        <p className="mx-5 mt-16 text-2xl">
          {profile.nickname}
        </p>
        <p className="mx-5 mt-2">
          {profile.bio}
        </p>
      </div>
      <TabGroup className={"m-5 mb-16"}>
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
    </div>
  );
}
