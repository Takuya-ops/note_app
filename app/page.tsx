import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center mt-40">
      <div className='text-center'>
        <h3 className='font-medium text-5xl'>
          Hello There. This is Note App✋
        </h3>
        <div className='mt-10 flex justify-center gap-7'>
          <Link 
            href="/notes"
            className='bg-purple-500 font-medium px-6 py-4 rounded-lg text-white hover:bg-purple-700 duration-200'>
            Get Started
          </Link>
          <Link 
            href="/notes"
            className='bg-blue-500 font-medium px-6 py-4 rounded-lg text-white hover:bg-purple-700 duration-200'>
            ノートリスト
          </Link>
        </div>
      </div>
    </main>
  )
}
