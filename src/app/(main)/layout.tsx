import {
  Metadata,
} from "next";
import {
  Fragment,
  PropsWithChildren,
} from "react";
import {
  BottomNavigation,
} from "@/components/organisms";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <Fragment>
      {children}
      <BottomNavigation />
    </Fragment>
  );
}

export const metadata: Metadata = {
};
