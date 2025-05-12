"use client";

import LoginHeader from "../components/login/LoginHeader";
import LoginForm from "../components/login/LoginForm";
import SocialLoginButtons from "../components/login/SocialLoginButtons";
import SignupPrompt from "../components/login/SignupPrompt";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <LoginHeader />

        <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Rankademy 로그인
          </h1>

          <LoginForm />
          <SocialLoginButtons />
          <SignupPrompt />
        </div>
      </div>
    </div>
  );
}
