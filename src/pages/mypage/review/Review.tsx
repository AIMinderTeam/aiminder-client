import { Button } from '@/shared/components/ui/button';

export default function Review() {
  return (
    <section className="flex flex-col gap-2 px-5 py-0">
      <textarea
        name="content"
        placeholder="내용을 입력해주세요."
        className="h-[300px] rounded-sm border border-gray-200 p-3"
      ></textarea>
      <Button className="bg-primary-500 rounded-sm p-3 text-white">등록</Button>
    </section>
  );
}
