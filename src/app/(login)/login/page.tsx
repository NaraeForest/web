"use client";

import axios from '@/axios';
import Image from 'next/image';
import React, {
  useEffect,
  useState,
} from 'react';

export default function Page() {
  const [csrf, setCsrf] = useState<string>();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/csrf/token`);
      if (data.token != null) {
        setCsrf(data.token);
      }
    })();
  }, []);
  if (csrf == null) {
    return (<div />);
  }
  return (

    <div className='w-screen h-screen relative'>
      <div className='absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 w-full max-w-96'>
        <div className='flex flex-col items-center mx-5 border pt-3'>
          <Image src="/logo.svg" width={96} height={96} alt="05-project's logo" />
          <p className='text-[#333333] text-2xl font-bold'>Welcome back</p>
          <p className='text-[#71717A] text-xs mt-2 text-center mx-4'>Log in to your account to continue planning your goals</p>

          <div className='my-9 px-3 w-full'>
            <a
              href={`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&state=${csrf}&scope=${"profile email"}`}
              className="w-full flex items-center justify-center h-10 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <Image src="/google.svg" alt="Google Logo" width={18} height={18} />
              <span className='ml-2 text-[#333333] font-medium'>Continue with Google</span>
            </a>
            <a
              href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=${csrf}`}
              className="w-full flex items-center justify-center h-10 mt-2 bg-naverColor rounded-md shadow-sm hover:bg-green-600"
            >
              <Image src="/naver.svg" alt="Naver Logo" width={16} height={16} />
              <span className='ml-2'>Continue with Naver</span>
            </a>
            <a
              href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&state=${csrf}`}
              className="w-full flex items-center justify-center h-10 mt-2 bg-kakaoColor rounded-md shadow-sm hover:bg-yellow-500"
            >
              <Image src="/kakao.svg" alt="Kakao Logo" width={22} height={20} />
              <span className='ml-2 text-[#333333] font-medium'>Continue with Kakao</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
