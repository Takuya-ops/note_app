import Link from "next/link";

export default function Page() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10 mt-10">
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
    </div>
  );
}

const NoteItem = () => {
  return <div className="bg-gray-100 rounded-lg p-5">
      <Link href={`/notes/1`}>
        <h3 className="text-purple-500 hover:text-purple-700 text-lg md:text-xl font-semibold mb-3 underline">初めてのノートです</h3>
      </Link>
      初めてのノート投稿です。ここに詳細内容が入ります。
    </div>
}