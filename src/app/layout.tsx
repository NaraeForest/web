import {
  Metadata,
} from "next";
import {
  PropsWithChildren,
} from "react";
import {
  pretendard,
} from "@/lib/font";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={`${pretendard.variable} font-pretendard text-[#333333]`}>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
};
