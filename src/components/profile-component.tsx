"use client";

import {
  useEffect,
} from "react";
import {
  readMyProfile,
} from "@/actions";
import {
  useProfileStore,
} from "@/store/profile-store";

export function ProfileComponents() {
  const { setProfile } = useProfileStore();
  useEffect(() => {
    (async () => {
      try {
        const profile = await readMyProfile();
        setProfile(profile);
      } catch (e) {
        console.log("fail to get profile");
      }
    })();
  }, []);
  return null;
}
