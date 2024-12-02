import localFont from 'next/font/local'
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import "@/styles/globals.css";
import type {
  AppProps,
} from "next/app";
import { Fragment } from 'react';
import Head from 'next/head';

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
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </Head>
      <main className={`${pretendard.variable} font-pretendard`}>
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}
