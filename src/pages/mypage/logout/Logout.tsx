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
      <div className="px-4 py-6">
        {!isConfirming ? (
          <>
            {/* 로그아웃 안내 */}
            <div className="bg-primary-50 mb-6 rounded-lg p-4">
              <div className="flex gap-3">
                <div className="bg-primary-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <LogOut className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-primary-700 mb-1 font-medium">로그아웃 안내</div>
                  <p className="text-primary-600 text-sm">로그아웃하면 현재 세션이 종료되고 다시 로그인해야 합니다.</p>
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
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => navigate(-1)}
                variant="soft"
                className="w-full rounded-lg py-3 font-medium transition-all duration-200"
              >
                취소
              </Button>
              <Button
                onClick={() => setIsConfirming(true)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 py-3 font-medium text-white transition-all duration-200 hover:bg-orange-600"
              >
                <LogOut className="h-4 w-4" />
                로그아웃
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* 확인 단계 */}
            <div className="bg-danger-50 mb-6 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-danger-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-danger-700 mb-1 font-medium">정말 로그아웃하시겠습니까?</div>
                  <p className="text-danger-500 text-sm">
                    로그아웃하면 현재 진행 중인 작업이 저장되지 않을 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 확인 버튼들 */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => setIsConfirming(false)}
                variant="soft"
                className="w-full rounded-lg py-3 font-medium transition-all duration-200"
              >
                취소
              </Button>
              <Button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="bg-danger-500 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium text-white transition-all duration-200 hover:bg-red-600"
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
            </div>
            <div className="bg-secondary-50 mt-8 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-secondary-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-secondary-700 mb-1 font-medium">로그아웃 후</div>
                  <ul className="text-secondary-700 space-y-1 text-sm">
                    <li>• 언제든지 다시 로그인할 수 있습니다</li>
                    <li>• 저장된 데이터는 그대로 유지됩니다</li>
                    <li>• 다른 기기에서 로그인할 수 있습니다</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
