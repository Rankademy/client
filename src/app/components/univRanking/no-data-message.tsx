import { AlertCircle, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NoDataMessageProps {
  univName: string;
}

export default function NoDataMessage({ univName }: NoDataMessageProps) {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <Card className="bg-gray-800 border-gray-700 max-w-md w-full">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-4">
            <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-2" />
            <Users className="h-12 w-12 text-gray-400 mx-auto" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            유저 정보가 없습니다
          </h2>
          <p className="text-gray-400 mb-4">
            <span className="text-blue-400 font-medium">{univName}</span>의
            등록된 플레이어가 없습니다.
          </p>
          <div className="bg-gray-700 rounded-lg p-4 w-full">
            <p className="text-sm text-gray-300">
              해당 대학교의 플레이어 데이터를 준비 중입니다.
              <br />곧 업데이트될 예정입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
