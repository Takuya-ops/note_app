import { getNotesList } from "@/lib/client";
import Link from "next/link";
import { Note } from "./type";
import parse from "html-react-parser";

type NoteProps = {
  note: Note
}

export default async function Page() {
  const noteLists = await getNotesList()

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10 mt-10">
      {noteLists.contents.map((note) => (
        <NoteItem key={note.id} note={note}/>
      ))}
      {/* <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem />
      <NoteItem /> */}
    </div>
  );
}

const NoteItem = ({note}: NoteProps) => {
  return <div className="bg-gray-100 rounded-lg p-5">
      <Link href={`/notes/${note.id}`}>
        <h3 className="text-purple-500 hover:text-purple-700 text-lg md:text-xl font-semibold mb-3 underline">{note.title}</h3>
      </Link>
      {note.content.toString().slice(3, 15) + "...　"}
      <span>{note.createdAt.toString().slice(0,10)}</span>
    </div>
}