import React, {
  useEffect,
  useState,
} from 'react';

export default function LoginPage() {
  const [csrf, setCsrf] = useState<string>();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/csrf/token`, { credentials: "include" });
      const data = await res.json();
      if (data.token != null) {
        setCsrf(data.token);
      }
    })();
  }, []);
  if (csrf == null) {
    return (<div />);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-4xl font-bold mb-6">05</h1>
        <h2 className="text-2xl font-semibold mb-4">Welcome back</h2>
        <p className="text-gray-500 mb-8">Log in to your account to continue planning your goals</p>

        <a
          href={`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&state=${csrf}&scope=${"profile email"}`}
          className="w-full flex items-center justify-center mb-4 p-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
        >
          <img src="/google.svg" alt="Google Logo" className="w-6 h-6 mr-3" />
          <span>Continue with Google</span>
        </a>

        <a
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=${csrf}`}
          className="w-full flex items-center justify-center mb-4 p-3 bg-naverColor text-white rounded-md shadow-sm hover:bg-green-600"
        >
          <img src="/naver.svg" alt="Naver Logo" className="w-6 h-6 mr-3" />
          <span>Continue with Naver</span>
        </a>

        <a
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&state=${csrf}`}
          className="w-full flex items-center justify-center p-3 bg-kakaoColor text-black rounded-md shadow-sm hover:bg-yellow-500"
        >
          <img src="/kakao.svg" alt="Kakao Logo" className="w-6 h-6 mr-3" />
          <span>Continue with Kakao</span>
        </a>
      </div>
    </div>
  );
}
