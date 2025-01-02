import {
  Fragment,
  PropsWithChildren,
} from "react";
import {
  Metadata,
} from "next";
import {
  BottomNavigationBar,
} from "@/components";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <Fragment>
      {children}

      <BottomNavigationBar />
    </Fragment>
  );
}

export const metadata: Metadata = {
};
