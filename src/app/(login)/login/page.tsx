"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";
import {
  readCSRFToken,
} from "@/actions";

export default function Page() {
  const [csrf, setCsrf] = useState<string>();
  useEffect(() => {
    (async () => {
      const token = await readCSRFToken();
      if (token != null) {
        setCsrf(token);
      }
    })();
  }, []);
  if (csrf == null) {
    return (<div />);
  }
  return (
    <div
      className='w-screen h-screen relative'
    >
      <div
        className='absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 w-full max-w-96'
      >
        <div
          className='flex flex-col items-center mx-5 border pt-3'
        >
          <Image
            alt="05-project's logo"
            width={0}
            height={0}
            src="/logo.svg"
            className="w-24 h-24"
          />
          <p
            className='text-[#333333] text-2xl font-bold'
          >
            Welcome back
          </p>
          <p
            className='text-[#71717A] text-xs mt-2 text-center mx-4'
          >
            Log in to your account to continue planning your goals
          </p>

          <div
            className='my-9 px-3 w-full'
          >
            <a
              href={`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&state=${csrf}&scope=${"profile email"}`}
              className="w-full flex items-center justify-center h-10 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={0}
                height={0}
                className="w-[1.125rem] h-[1.125rem"
              />
              <span
                className='ml-2 text-[#333333] font-medium'
              >
                Continue with Google
              </span>
            </a>
            <a
              href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=${csrf}`}
              className="w-full flex items-center justify-center h-10 mt-2 bg-naver rounded-md shadow-sm hover:bg-green-600"
            >
              <Image
                src="/naver.svg"
                alt="Naver Logo"
                width={0}
                height={0}
                className="w-4 h-4"
              />
              <span
                className='ml-2'
              >
                Continue with Naver
              </span>
            </a>
            <a
              href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&state=${csrf}`}
              className="w-full flex items-center justify-center h-10 mt-2 bg-kakao rounded-md shadow-sm hover:bg-yellow-500"
            >
              <Image
                src="/kakao.svg"
                alt="Kakao Logo"
                width={0}
                height={0}
                className="w-[1.375rem] h-5"
              />
              <span
                className='ml-2 text-[#333333] font-medium'
              >
                Continue with Kakao
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
