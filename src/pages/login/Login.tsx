import { Link, useNavigate } from 'react-router-dom';

import googleIcon from '@/assets/google.png';
import kakaoIcon from '@/assets/kakao.png';
import { Button } from '@/shared/components/ui/button';
import { Bot, Sparkles } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-primary-500 flex min-h-screen flex-col">
      {/* 상단 로고 섹션 */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-16 pb-8">
        <div className="flex flex-col items-center gap-6">
          {/* 로고 아이콘 */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-white/20 blur-xl"></div>
            <div className="relative rounded-full border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <Bot size={80} strokeWidth={1.5} className="text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles size={24} className="text-yellow-300" />
            </div>
          </div>

          {/* 앱 타이틀 */}
          <div className="text-center">
            <h1 className="mb-2 text-4xl font-bold tracking-wide text-white">AI MINDER</h1>
            <p className="text-lg font-medium text-white/80">당신의 목표 달성을 위한 AI 파트너</p>
          </div>
        </div>
      </div>

      {/* 하단 로그인 섹션 */}
      <div className="rounded-t-3xl bg-white px-6 pt-8 pb-12 shadow-2xl">
        <div className="mx-auto max-w-sm">
          {/* 환영 메시지 */}
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">환영합니다!</h2>
            <p className="leading-relaxed text-gray-600">
              AI와 함께 나의 루틴 계획을 공유하고
              <br />
              목표를 달성해보세요
            </p>
          </div>

          {/* 로그인 버튼들 */}
          <div className="mb-8 space-y-4">
            {/* 구글 로그인 */}
            <Button
              variant="outline"
              size="lg"
              className="h-14 w-full border-2 border-gray-200 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
              onClick={goHome}
            >
              <img src={googleIcon} alt="Google" className="h-6 w-6" />
              <span className="font-medium text-gray-700">구글로 계속하기</span>
            </Button>

            {/* 카카오 로그인 */}
            <Button
              variant="outline"
              size="lg"
              className="h-14 w-full border-2 border-yellow-300 bg-yellow-50 shadow-sm transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-100"
              onClick={goHome}
            >
              <img src={kakaoIcon} alt="Kakao" className="h-7 w-7" />
              <span className="font-medium text-gray-800">카카오로 계속하기</span>
            </Button>
          </div>

          {/* 회원가입 안내 */}
          <div className="text-center">
            <div className="mb-4 text-sm text-gray-500">
              <p>계정이 없으신가요?</p>
              <p>회원가입하여 더 많은 서비스를 이용해보세요</p>
            </div>
            <Link
              to="/signup"
              className="text-primary-600 hover:text-primary-700 inline-flex items-center text-sm font-semibold transition-colors duration-200"
            >
              회원가입 하기
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
