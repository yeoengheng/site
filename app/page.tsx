'use client'

import Image from 'next/image'
import { FiChevronsDown } from "react-icons/fi";

import ArticlesList from './components/ArticleList'
import { ArticleType } from '@/types'
import { getArticle } from '@/sanity/sanity.query'
import { motion, useInView } from "framer-motion"

import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [articlesFormatted, setArticlesFormatted] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const articleSanity:ArticleType[] = await getArticle();
      const formattedArticles:any = articleSanity.map(article => ({
        year: new Date(article.postDate).getFullYear(),
        title: article.articleTitle,
        date: new Date(article.postDate).toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit'
        }),
        url: `/blog${article.slug}`,
      }));
      setArticlesFormatted(formattedArticles);
    }

    fetchArticles();
  }, []);

  const [isBouncing, setIsBouncing] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsBouncing(false);
      }, 2900);

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);
  return (
    <main className="flex min-h-screen flex-col justify-between px-4 sm:px-8 pb-16 mb-8 lg:pb-24 relative w-full">
      <motion.div 
        initial = {{opacity:0}} 
        animate={{opacity:1}} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className='container relative h-[calc(90vh)] px-4 sm:px-8 pb-24 mx-auto prose prose-zinc max-w-4xl flex flex-col lg:flex-col justify-center items-stretch'>
        <div className='flex flex-row'>
          <div id='text' className='flex flex-col w-full justify-start items-start gap-6 flex-1 mr-8 '>
            <div className="text-white text-3xl sm:text-3xl md:text-5xl font-medium font-['DM Sans']">
              Product Manager.
              <br/>
              Learner.
              <br/> 
              Builder.
            </div>
            <div className="text-zinc-400 text-base font-normal leading-loose">
              Hello, I’m Eng Heng. I am the founder of Kabana. Before this, I was the first product hire at Kyte ($60 mil Series B) and HeadsUp (acq. by HighTouch). 
            </div>
          </div>
          <div id='image' className='flex-1 flex justify-top items-start sm:flex hidden'>
            <Image 
              src="/engheng.svg"
              width={350}
              height={350}
              alt='Picture of Eng Heng'
            />
          </div>
        </div>
        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{ duration: 1, ease: "easeOut" }} 
          className='flex flex-col w-full items-center justify-center absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-zinc-500'>
          <motion.div 
            initial={{ opacity: 1 }}
            animate={isBouncing ? { y: [0, 10, 0] } : { opacity: 0 }}
            transition={isBouncing ? {
                y: {
                    duration: 0.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                }
            } : {
                opacity: {
                    duration: 0.5 // Duration of the fade out
                }
            }}
            className='py-4 flex flex-col items-center justify-center text-zinc-500'>
            <FiChevronsDown size={26}/>
            <p>Scroll down for more</p>
          </motion.div>

        </motion.div>
      </motion.div>
      <motion.div 
          ref={ref}           
          initial={{opacity:0}} 
          animate={{opacity: isInView ? 1 : 0}} 
          transition={{ duration: 1, ease: "easeIn" }}>
        <div className="container relative px-4 sm:px-8 pb-10 pt-12 mx-auto prose prose-zinc dark:prose-invert max-w-4xl text-zinc-200 text-lg sm:text-lg md:text-xl font-medium font-['DM Sans'] leading-loose">
          Thoughts, ideas & opinions
          <div className='mt-6 divide-y divide-zinc-800 border-t border-zinc-800'>
            <ArticlesList articles={articlesFormatted}/>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
