export default function AiAssistantDirectlyForm() {
  return (
    <section className="flex flex-col gap-6">
      <div className="h-48 w-full bg-gray-200">이미지</div>
      <div className="flex flex-col gap-2 px-5 py-0">
        <input
          type="text"
          placeholder="목표날짜를 입력해주세요."
          className="w-full rounded-md border border-gray-200 p-3 text-base"
        />
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          className="w-full rounded-md border border-gray-200 p-3 text-base"
        />
        <textarea
          placeholder="메모를 입력해주세요."
          className="w-full rounded-md border border-gray-200 p-3 text-base"
        />
        <button className="bg-primary-500 flex-1 rounded-md px-5 py-3 text-base text-white">등록하기</button>
        <div>일일목표 등록하기</div>
      </div>
    </section>
  );
}
