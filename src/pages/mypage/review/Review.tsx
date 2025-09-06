import { useState } from 'react';

import { Button } from '@/shared/components/ui/button';
import { Bug, Lightbulb, MessageSquare, Send, Star } from 'lucide-react';

export default function Review() {
  const [selectedType, setSelectedType] = useState('review');
  const [content, setContent] = useState('');

  const inquiryTypes = [
    { id: 'review', label: '후기', icon: Star, description: '앱 사용 후기를 남겨주세요' },
    { id: 'bug', label: '버그 신고', icon: Bug, description: '발견한 문제점을 알려주세요' },
    {
      id: 'suggestion',
      label: '개선 제안',
      icon: Lightbulb,
      description: '더 나은 서비스를 위한 아이디어를 공유해주세요',
    },
    { id: 'inquiry', label: '일반 문의', icon: MessageSquare, description: '궁금한 점이 있으시면 언제든 문의하세요' },
  ];

  return (
    <section className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="border-b border-gray-200 bg-white px-4 py-4">
        <h1 className="text-xl font-semibold text-gray-900">후기 및 문의</h1>
        <p className="mt-1 text-sm text-gray-500">소중한 의견을 들려주세요</p>
      </div>

      <div className="px-4 py-4">
        {/* 문의 유형 선택 */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-medium tracking-wide text-gray-500 uppercase">문의 유형</h2>
          <div className="grid grid-cols-2 gap-3">
            {inquiryTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all duration-200 ${
                    selectedType === type.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      selectedType === type.id ? 'bg-primary-500' : 'bg-gray-100'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${selectedType === type.id ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <div className="text-center">
                    <h3
                      className={`text-sm font-medium ${
                        selectedType === type.id ? 'text-primary-700' : 'text-gray-900'
                      }`}
                    >
                      {type.label}
                    </h3>
                    <p className={`text-xs ${selectedType === type.id ? 'text-primary-600' : 'text-gray-500'}`}>
                      {type.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 내용 입력 */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-medium tracking-wide text-gray-500 uppercase">내용</h2>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={
                selectedType === 'review'
                  ? '앱을 사용해보신 소감을 자유롭게 작성해주세요. 좋은 점이나 아쉬운 점 모두 들려주세요.'
                  : selectedType === 'bug'
                    ? '발견하신 버그에 대해 자세히 설명해주세요. 언제, 어떤 상황에서 발생했는지 알려주시면 도움이 됩니다.'
                    : selectedType === 'suggestion'
                      ? '더 나은 서비스를 위한 아이디어나 개선사항을 자유롭게 제안해주세요.'
                      : '궁금한 점이나 문의사항을 자세히 작성해주세요.'
              }
              className="h-64 w-full resize-none border-none text-gray-900 placeholder-gray-500 outline-none"
            />
          </div>
          <div className="mt-2 text-right">
            <span className="text-xs text-gray-500">{content.length}/1000</span>
          </div>
        </div>

        {/* 연락처 정보 (선택사항) */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-medium tracking-wide text-gray-500 uppercase">연락처 정보 (선택사항)</h2>
          <div className="space-y-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <label className="mb-2 block text-sm font-medium text-gray-700">이메일</label>
              <input
                type="email"
                placeholder="답변을 받을 이메일을 입력해주세요"
                className="w-full border-none text-gray-900 placeholder-gray-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="mb-6">
          <Button
            className="bg-primary-500 hover:bg-primary-600 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium text-white transition-all duration-200"
            disabled={!content.trim()}
          >
            <Send className="h-4 w-4" />
            {selectedType === 'review' ? '후기 등록' : '문의 등록'}
          </Button>
        </div>

        {/* 안내사항 */}
        <div className="rounded-lg bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="mb-1 font-medium text-blue-900">문의 안내</span>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• 문의하신 내용은 검토 후 1-2일 내에 답변드립니다</li>
                <li>• 연락처를 남겨주시면 더 빠른 답변이 가능합니다</li>
                <li>• 소중한 의견은 서비스 개선에 적극 반영하겠습니다</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
