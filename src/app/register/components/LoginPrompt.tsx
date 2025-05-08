import Link from "next/link";

export default function LoginPrompt() {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-400">
        이미 계정이 있으신가요?{" "}
        <Link href="/login" className="text-blue-500 hover:text-blue-400">
          로그인
        </Link>
      </p>
    </div>
  );
}
