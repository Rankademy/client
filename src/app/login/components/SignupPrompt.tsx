import Link from "next/link"

export default function SignupPrompt() {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-400">
        계정이 없으신가요?{" "}
        <Link href="/register" className="text-blue-500 hover:text-blue-400">
          회원가입
        </Link>
      </p>
    </div>
  )
}
