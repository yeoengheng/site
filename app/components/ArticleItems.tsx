'use client'
import Link from "next/link";

export interface ArticleItemsProps {
    title: string;
    date: string;
    url: string;
  }
  
  const ArticleItem: React.FC<ArticleItemsProps> = ({ title, date, url }) => (
    <div className="flex flex-row justify-between">
      <Link className='flex w-full justify-between flex-row transition-colors decoration-zinc-300 hover:decoration-zinc-600 no-underline hover:bg-zinc-800 sm:flex-row sm:items-center gap-1 sm:gap-4 justify-between p-4'href={url}>
        <div className="m-0 text-zinc-400 text-sm sm:truncate">{title}</div>
        <div className="w-[7rem] m-0 text-neutral-400 text-sm sm:text-right">{date}</div>
      </Link>
    </div>
  );

export default ArticleItem