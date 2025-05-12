import { NaverIcon, GoogleIcon, KakaoIcon } from "./social-icons"

export default function SocialLoginButtons() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-900 text-gray-400">소셜 로그인</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <button
          type="button"
          className="flex justify-center items-center py-2 px-4 bg-[#03C75A] hover:bg-opacity-90 text-white font-medium rounded-md transition-colors"
        >
          <NaverIcon className="w-5 h-5 mr-2" />
          <span>네이버</span>
        </button>

        <button
          type="button"
          className="flex justify-center items-center py-2 px-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-md transition-colors"
        >
          <GoogleIcon className="w-5 h-5 mr-2" />
          <span>구글</span>
        </button>

        <button
          type="button"
          className="flex justify-center items-center py-2 px-4 bg-[#FEE500] hover:bg-opacity-90 text-gray-900 font-medium rounded-md transition-colors"
        >
          <KakaoIcon className="w-5 h-5 mr-2" />
          <span>카카오</span>
        </button>
      </div>
    </div>
  )
}
