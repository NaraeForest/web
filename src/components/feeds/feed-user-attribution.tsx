import Image from "next/image";
import dayjs from "@/lib/dayjs";
import {
  PropsWithChildren,
} from "react";
import {
  User,
} from "@/actions";

type FeedUserAttributionProps = {
  user: User,
  feedCreatedAt: string,
};
export function FeedUserAttribution({ user, feedCreatedAt, children }: PropsWithChildren<FeedUserAttributionProps>) {
  return (
    <div
      className="flex justify-between"
    >
      <div
        className="flex gap-3"
      >
        <Image
          alt="user's profile image"
          width={40}
          height={40}
          src={user.profileImage}
          className="w-10 h-10 rounded-full"
        />
        <div
          className="flex flex-col"
        >
          <p
            className="text-sm"
          >
            {user.nickname}
          </p>
          <p
            className="text-[#71717A] text-[0.625rem]"
          >
            {dayjs(feedCreatedAt).fromNow()}
          </p>
        </div>

      </div>
      {children}
    </div>
  );
}
