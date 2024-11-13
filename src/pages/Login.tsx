import React from 'react';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-4xl font-bold mb-6">05</h1>
        <h2 className="text-2xl font-semibold mb-4">Welcome back</h2>
        <p className="text-gray-500 mb-8">Log in to your account to continue planning your goals</p>

        <button className="w-full flex items-center justify-center mb-4 p-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
          <img src="/google.svg" alt="Google Logo" className="w-6 h-6 mr-3" />
          <span>Continue with Google</span>
        </button>

        <button className="w-full flex items-center justify-center mb-4 p-3 bg-naverColor text-white rounded-md shadow-sm hover:bg-green-600">
          <img src="/naver.svg" alt="Naver Logo" className="w-6 h-6 mr-3" />
          <span>Continue with Naver</span>
        </button>

        <button className="w-full flex items-center justify-center p-3 bg-kakaoColor text-black rounded-md shadow-sm hover:bg-yellow-500">
          <img src="/kakao.svg" alt="Kakao Logo" className="w-6 h-6 mr-3" />
          <span>Continue with Kakao</span>
        </button>
      </div>
    </div>
  );
}
