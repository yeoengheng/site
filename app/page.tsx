import Image from 'next/image'

import ArticlesList from './components/ArticleList'

export default function Home() {
  const articles=[
    {
      title:"How to create a linktree",
      year:2022,
      date:'22 sept',
      url:'/blog'
    },
    {
      title:"I am a bad boyfriend",
      year:2023,
      date:'21 sept',
      url:'/blog'
    },
    {
      title:"It's tough. Life's rough",
      year:2023,
      date:'20 sept',
      url:'/blog' 
    },
    {
      title:"Tell me about it",
      year:2022,
      date:'20 sept',
      url:'/blog'
    },
    {
      title:"helasdlo",
      year:2021,
      date:'20 sept',
      url:'/blog'
    }
  ]
  return (
    <main className="flex min-h-screen flex-col justify-between sm:px-8 py-16 lg:py-24 relative w-full">
      <div className='container px-4 sm:px-8 py-16 lg:py-24 mx-auto prose prose-zinc max-w-4xl flex flex-col lg:flex-row items-stretch'>
        <div id='text' className='flex flex-col justify-start items-start gap-6 flex-1 mr-8'>
          <div className="text-white text-5xl font-medium font-['DM Sans']">
            Product Manager.
            <br/>
            Designer.
            <br/> 
            Builder.
          </div>
          <div className="text-zinc-400 text-md font-normal leading-loose">
            Hello, I’m Eng Heng. I am the founder of Kabana, an AI-powered in-app guides provider for customer success and support teams. Previously, I was also the first product hire at Kyte ($60 mil Series B) and HeadsUp (acq. by HighTouch). 
          </div>
        </div>
        <div id='image' className='flex-1 flex justify-center items-center w-full'>
          <Image 
            src="/engheng.svg"
            width={350}
            height={350}
            alt='Picture of Eng Heng'
          />
        </div>
      </div>
      <div>
        <div className="container px-4 sm:px-8 py-16 lg:py-24 mx-auto prose prose-zinc dark:prose-invert max-w-4xl text-zinc-50 text-xl font-medium font-['DM Sans'] leading-loose">
          Thoughts, ideas & opinions
          <div className='mt-4 divide-y divide-zinc-800 border-t border-zinc-700'>
            <ArticlesList articles={articles}/>
          </div>
        </div>
      </div>
    </main>
  )
}
