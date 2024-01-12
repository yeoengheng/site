'use client'
import { VscLoading } from "react-icons/vsc";
import { useEffect } from "react";

export default function Loading() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <main className="container flex items-center justify-center px-4 sm:px-8 py-16 lg:py-24 mx-auto h-screen prose prose-zinc">
            <div className="flex flex-col justify-center items-center">
                <VscLoading className='animate-spin' size={26}/>
                <p className="text-base text-zinc-600">Loading</p>
            </div>
      </main>
    )
  }