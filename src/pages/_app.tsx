import localFont from 'next/font/local'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import "@/styles/globals.css";
import type {
  AppProps,
} from "next/app";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const pretendard = localFont({
  src: "../font/pretendard-variable.woff2",
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pretendard.variable} font-pretendard`}>
      <Component {...pageProps} />
    </main>
  );
}
