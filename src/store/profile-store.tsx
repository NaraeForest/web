import {
  User,
} from "@/actions";
import {
  create,
} from "zustand";
import {
  devtools,
  persist,
} from "zustand/middleware";

interface ProfileState {
  id: number;
  nickname: string;
  setProfile: (user: User) => void;
}
export const useProfileStore = create<ProfileState>()(
  devtools(
    persist(
      (set) => ({
        id: -1,
        nickname: "",
        setProfile: (user) => set((state) => ({
          id: user.id,
          nickname: user.nickname,
        })),
      }),
      {
        name: "user-profile",
      },
    ),
  ),
);
