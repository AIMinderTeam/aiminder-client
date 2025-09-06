import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { AlertTriangle, ArrowLeft, CheckCircle, LogOut } from 'lucide-react';

export default function Logout() {
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    // 실제 로그아웃 로직 구현
    setTimeout(() => {
      setIsLoggingOut(false);
      navigate('/login');
    }, 2000);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="border-b border-gray-200 bg-white px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">로그아웃</h1>
            <p className="mt-1 text-sm text-gray-500">계정에서 안전하게 로그아웃하세요</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {!isConfirming ? (
          <>
            {/* 로그아웃 안내 */}
            <div className="mb-6 rounded-lg bg-orange-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500">
                  <LogOut className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="mb-1 font-medium text-orange-900">로그아웃 안내</span>
                  <p className="text-sm text-orange-700">로그아웃하면 현재 세션이 종료되고 다시 로그인해야 합니다.</p>
                </div>
              </div>
            </div>

            {/* 현재 계정 정보 */}
            <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-medium text-gray-900">현재 계정</h3>
              <div className="flex items-center gap-3">
                <div className="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-full">
                  <span className="text-sm font-medium text-white">U</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">사용자님</p>
                  <p className="text-sm text-gray-500">user@example.com</p>
                </div>
              </div>
            </div>

            {/* 로그아웃 버튼 */}
            <div className="space-y-3">
              <Button
                onClick={() => setIsConfirming(true)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 font-medium text-white transition-all duration-200 hover:bg-orange-600"
              >
                <LogOut className="h-4 w-4" />
                로그아웃
              </Button>

              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="w-full rounded-lg py-3 font-medium transition-all duration-200"
              >
                취소
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* 확인 단계 */}
            <div className="mb-6 rounded-lg bg-red-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="mb-1 font-medium text-red-900">정말 로그아웃하시겠습니까?</span>
                  <p className="text-sm text-red-700">로그아웃하면 현재 진행 중인 작업이 저장되지 않을 수 있습니다.</p>
                </div>
              </div>
            </div>

            {/* 확인 버튼들 */}
            <div className="space-y-3">
              <Button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 py-3 font-medium text-white transition-all duration-200 hover:bg-red-600"
              >
                {isLoggingOut ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    로그아웃 중...
                  </>
                ) : (
                  <>
                    <LogOut className="h-4 w-4" />
                    네, 로그아웃합니다
                  </>
                )}
              </Button>

              <Button
                onClick={() => setIsConfirming(false)}
                variant="outline"
                className="w-full rounded-lg py-3 font-medium transition-all duration-200"
              >
                취소
              </Button>
            </div>
          </>
        )}

        {/* 도움말 */}
        <div className="mt-8 rounded-lg bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="mb-1 font-medium text-blue-900">로그아웃 후</span>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• 언제든지 다시 로그인할 수 있습니다</li>
                <li>• 저장된 데이터는 그대로 유지됩니다</li>
                <li>• 다른 기기에서 로그인할 수 있습니다</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
