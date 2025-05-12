import Link from "next/link";

interface LoadingStateProps {
  isLoading: boolean;
  hasError: boolean;
}

export default function LoadingState({
  isLoading,
  hasError,
}: LoadingStateProps) {
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">사용자 정보를 불러올 수 없습니다.</p>
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-400 mt-4 inline-block"
          >
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  // 로딩 중도 아니고 에러도 아닌 경우 null 반환
  return null;
}
