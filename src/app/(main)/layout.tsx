
import {
  Metadata,
} from "next"
import {
  PropsWithChildren,
} from "react"
import {
  BattomNavigationBar,
} from "@/components/bottom-navigation-bar";
import "@/styles/globals.css";
import { pretendard } from "@/lib/font";

export const metadata: Metadata = {
};


export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="ko">

      <body className={`${pretendard.variable} font-pretendard`}>
        {children}
        <BattomNavigationBar />
      </body>
    </html>
  );
}
