'use client'

import { Inter } from 'next/font/google'
import InstaSidebar from '@/components/instasidebar'
import InstaProfile from '@/components/instaprofile'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    let [id, setId] = useState('')

    const showProfile = (e) => {
        let id = e.target.id
        setId(id)
    }

    const router = useRouter()
    console.log(router.query)

    let datas = [
        {
            id: "lucky",
            name: "Lucky",
            img: "img1.jfif",
            bio: "ok, im lucky",
            followers: 1,
            following: 1,
            posts: 2
        },
        {
            id: "dream",
            name: "Dream",
            img: "img2.jfif",
            bio: "ok, im dream",
            followers: 1,
            following: 1,
            posts: 2
        }
    ]

    return (
        <main
            className={`fixed flex min-h-screen flex-row h-full w-full ${inter.className}`}>
            <InstaSidebar />


            {id && <InstaProfile id={id} data={datas} setId={setId} />}

            {!id && <div className='w-full h-full flex justify-center'>
                <div className='w-[300px] p-4 flex flex-col gap-2'>
                    {datas.map((e, key) => {
                        return <div key={key} className='w-[100%] h-[50px] flex flex-row items-center'>
                            <img src={e.img} className='w-[45px] h-[45px] ml-1 mr-1 rounded-full' />
                            <div id={e.id} onClick={showProfile}>{e.name}</div>
                            <div className='ml-auto'>...</div>
                        </div>
                    })}
                </div>
            </div>}
        </main>
    )
}
