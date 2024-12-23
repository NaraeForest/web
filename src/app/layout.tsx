import {
  Metadata,
} from "next";
import {
  PropsWithChildren,
} from "react";
import {
  pretendard,
} from "@/lib/font";
import {
  BottomNavigation,
} from "@/components/organisms";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={`${pretendard.variable} font-pretendard text-[#333333]`}>
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
};