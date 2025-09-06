import { Link } from 'react-router-dom';

import { Bell, ChevronRight, LogOut, MessageSquare, Settings, Star, Target, User, UserX } from 'lucide-react';

export default function Mypage() {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* 사용자 프로필 섹션 */}
      <div className="border-b border-gray-200 bg-white px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary-500 flex h-16 w-16 items-center justify-center rounded-full">
            <User className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">사용자님</h1>
            <p className="text-sm text-gray-500">목표 달성을 위해 함께해요!</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* 통계 카드 */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-secondary-500 flex h-10 w-10 items-center justify-center rounded-full">
                <Target className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">진행 중인 목표</p>
                <p className="text-lg font-semibold text-gray-900">3</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-full">
                <Star className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">완료한 목표</p>
                <p className="text-lg font-semibold text-gray-900">7</p>
              </div>
            </div>
          </div>
        </div>

        {/* 메뉴 섹션 */}
        <div className="space-y-2">
          <span className="mb-1 block text-sm font-medium tracking-wide text-gray-500 uppercase">설정</span>

          {/* 로그인 */}
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">로그인</h3>
              <p className="text-sm text-gray-500">계정에 로그인하세요</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Link>

          {/* 후기 및 문의 */}
          <Link
            to="/mypage/review"
            className="flex items-center gap-3 rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
          >
            <div className="bg-secondary-100 flex h-10 w-10 items-center justify-center rounded-full">
              <MessageSquare className="text-secondary-600 h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">후기 및 문의</h3>
              <p className="text-sm text-gray-500">피드백을 남겨주세요</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Link>

          {/* 알림설정 */}
          <Link
            to="/mypage/notification"
            className="flex items-center gap-3 rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
          >
            <div className="bg-primary-100 flex h-10 w-10 items-center justify-center rounded-full">
              <Bell className="text-primary-600 h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">알림설정</h3>
              <p className="text-sm text-gray-500">알림을 관리하세요</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Link>

          {/* 앱 설정 */}
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Settings className="h-5 w-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">앱 설정</h3>
              <p className="text-sm text-gray-500">앱 환경을 설정하세요</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* 계정 관리 섹션 */}
        <div className="mt-6 space-y-2">
          <span className="mb-1 block text-sm font-medium tracking-wide text-gray-500 uppercase">계정 관리</span>
          {/* 로그아웃 */}
          <Link
            to="/mypage/logout"
            className="flex items-center gap-3 rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <LogOut className="h-5 w-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">로그아웃</h3>
              <p className="text-sm text-gray-500">계정에서 로그아웃하세요</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Link>

          {/* 회원탈퇴 */}
          <Link
            to="/mypage/withdrawal"
            className="flex items-center gap-3 rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <UserX className="h-5 w-5 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">회원탈퇴</h3>
              <p className="text-sm text-gray-500">계정을 영구적으로 삭제하세요</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
