import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row ${inter.className}`}>
      <div>
        <div className='w-[50px] h-[50px] rounded-full bg-cover bg-center'></div>

      </div>
    </main>
  )
}
