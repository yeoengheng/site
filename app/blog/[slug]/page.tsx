import { getSpecificArticle } from "@/sanity/sanity.query"
import { SpecificArticleType } from "@/types"

import {PortableText, PortableTextComponents} from '@portabletext/react'
import { Children } from "react";

export default async function Page({ params }: { params: { slug: string } }) {

  const articleContent:SpecificArticleType[] = await getSpecificArticle("/"+params.slug)
  
  function getOrdinalSuffix(day:number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  const formatDate = (dateString:Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  };

  const components: PortableTextComponents = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-3xl">{children}</h1>,
      h2: ({children}) => <h2 className="text-2xl">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl">{children}</h3>,
      normal: ({children})=> <p className="text-zinc-200 text-wrap subpixel-antialiased">{children}</p>,
      blockquote: ({children}) => <blockquote className="border-l-2 border-zinc-800 pl-4 text-zinc-300 mx-6">{children}</blockquote>,
    },
    marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,
  
      // Ex. 2: rendering a custom `link` annotation
      link: ({value, children}) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <a href={value?.href} target="_blank" className="text-teal-600 text-underline">
            {children}
          </a>
        )
      },
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <ul className="mt-lg ml-6 items-start">{children}</ul>,
      number: ({children}) => <ol className="mt-lg ml-6 items-start">{children}</ol>,
  
      // Ex. 2: rendering custom lists
      checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <li style={{listStyleType: 'circle'}}>{children}</li>,
      number:({children}) => <li style={{listStyleType: 'decimal'}}>{children}</li>,
    },

  }
  return (
    <main className="container flex justify-center px-4 sm:px-8 py-16 lg:py-24 mx-auto prose prose-zinc">
      <div className="space-y-8 w-5/12">
        {articleContent.map((item)=>(
          <>
          <h2 key={item.id_} className="text-2xl">{item.articleTitle}</h2>
          <p>{formatDate(item.postDate)}</p>
          <PortableText
            value={item.content}
            components={components}
          />
          </>
        ))}
      </div>
    </main>
  )
}