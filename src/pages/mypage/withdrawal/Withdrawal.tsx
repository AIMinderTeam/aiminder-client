import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { AlertTriangle, ArrowLeft, Shield, Trash2, UserX } from 'lucide-react';

export default function Withdrawal() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: 안내, 2: 확인, 3: 탈퇴 중
  const [reason, setReason] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const withdrawalReasons = [
    '서비스가 마음에 들지 않음',
    '다른 서비스를 사용하게 됨',
    '개인정보 보호 우려',
    '사용 빈도가 낮음',
    '기타',
  ];

  const handleWithdrawal = async () => {
    setIsDeleting(true);
    // 실제 탈퇴 로직 구현
    setTimeout(() => {
      setIsDeleting(false);
      navigate('/login');
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="px-4 py-6">
        {step === 1 && (
          <>
            {/* 경고 안내 */}
            <div className="mb-6 rounded-lg bg-red-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="mb-1 font-medium text-red-900">회원탈퇴 주의사항</span>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• 탈퇴 시 모든 데이터가 영구적으로 삭제됩니다</li>
                    <li>• 복구가 불가능하니 신중히 결정해주세요</li>
                    <li>• 진행 중인 목표와 기록이 모두 사라집니다</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 현재 계정 정보 */}
            <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-medium text-gray-900">삭제될 계정 정보</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-sm font-medium text-white">U</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">사용자님</p>
                    <p className="text-sm text-gray-500">user@example.com</p>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <p className="mb-2 text-sm text-gray-600">삭제될 데이터:</p>
                  <ul className="space-y-1 text-sm text-gray-500">
                    <li>• 설정한 목표 및 진행 기록</li>
                    <li>• AI 어시스턴트 대화 내역</li>
                    <li>• 개인 설정 및 알림 설정</li>
                    <li>• 계정 정보 및 프로필</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 탈퇴 사유 선택 */}
            <div className="mb-6">
              <h3 className="mb-3 font-medium text-gray-900">탈퇴 사유 (선택사항)</h3>
              <div className="space-y-2">
                {withdrawalReasons.map((reasonItem) => (
                  <label
                    key={reasonItem}
                    className="flex cursor-pointer items-center gap-3 rounded-lg bg-white p-3 shadow-sm hover:bg-gray-50"
                  >
                    <input
                      type="radio"
                      name="reason"
                      value={reasonItem}
                      checked={reason === reasonItem}
                      onChange={(e) => setReason(e.target.value)}
                      className="text-red-500"
                    />
                    <span className="text-sm text-gray-700">{reasonItem}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 탈퇴 버튼 */}
            <div className="space-y-3">
              <Button
                onClick={() => setStep(2)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 py-3 font-medium text-white transition-all duration-200 hover:bg-red-600"
              >
                <UserX className="h-4 w-4" />
                회원탈퇴 진행
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
        )}

        {step === 2 && (
          <>
            {/* 최종 확인 */}
            <div className="mb-6 rounded-lg bg-red-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="mb-1 font-medium text-red-900">최종 확인</span>
                  <p className="text-sm text-red-700">
                    정말로 회원탈퇴를 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 확인 체크리스트 */}
            <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
              <h3 className="mb-3 font-medium text-gray-900">확인사항</h3>
              <div className="space-y-2">
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="checkbox" className="text-red-500" />
                  <span className="text-sm text-gray-700">모든 데이터가 영구적으로 삭제됨을 이해합니다</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="checkbox" className="text-red-500" />
                  <span className="text-sm text-gray-700">진행 중인 목표와 기록이 모두 사라짐을 이해합니다</span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="checkbox" className="text-red-500" />
                  <span className="text-sm text-gray-700">탈퇴 후 복구가 불가능함을 이해합니다</span>
                </label>
              </div>
            </div>

            {/* 최종 버튼들 */}
            <div className="space-y-3">
              <Button
                onClick={handleWithdrawal}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 font-medium text-white transition-all duration-200 hover:bg-red-700"
              >
                <Trash2 className="h-4 w-4" />
                네, 탈퇴합니다
              </Button>

              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="w-full rounded-lg py-3 font-medium transition-all duration-200"
              >
                다시 생각해보기
              </Button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            {/* 탈퇴 진행 중 */}
            <div className="py-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  {isDeleting ? (
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
                  ) : (
                    <UserX className="h-8 w-8 text-red-500" />
                  )}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium text-gray-900">
                    {isDeleting ? '계정을 삭제하고 있습니다...' : '탈퇴가 완료되었습니다'}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {isDeleting
                      ? '잠시만 기다려주세요. 모든 데이터를 안전하게 삭제하고 있습니다.'
                      : '이용해주셔서 감사합니다. 언제든 다시 찾아주세요.'}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* 도움말 */}
        {step !== 3 && (
          <div className="mt-8 rounded-lg bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <span className="mb-1 font-medium text-blue-900">탈퇴 전 고려사항</span>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• 잠시 휴식을 원하신다면 로그아웃을 권장합니다</li>
                  <li>• 문제가 있으시면 고객센터로 문의해주세요</li>
                  <li>• 탈퇴 후에도 언제든 새 계정으로 가입 가능합니다</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
