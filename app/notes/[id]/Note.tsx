import React from 'react'
import { Note } from '../type';
import parse from "html-react-parser";

type NoteProps = {
  note: Note
}

const Note = ({note}: NoteProps) => {
  return (
    <div className='flex flex-col bg-gray-100 rounded-lg p-5 gap-2.5'>
      <h3 className='text-pink-500 text-lg md:text-xl font-semibold'>{note.title}
      </h3>
      {parse(note.content)}
      <span>{note.content}</span>
    </div>
  );
}

export default Note