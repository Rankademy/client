"use client";

import SignupHeader from "./components/SignupHeader";
import SignupForm from "./components/SignupForm";
import LoginPrompt from "./components/LoginPrompt";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <SignupHeader />

        <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Rankademy 회원가입
          </h1>

          <SignupForm />
          <LoginPrompt />
        </div>
      </div>
    </div>
  );
}
