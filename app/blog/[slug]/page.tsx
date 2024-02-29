'use client'

import { getSpecificArticle } from "@/sanity/sanity.query"
import { SpecificArticleType } from "@/types"
import {useNextSanityImage} from 'next-sanity-image'
import Image from 'next/image';
import client from "@/sanity/sanity.client";
import {PortableText, PortableTextComponents} from '@portabletext/react'
import { LinkedInEmbed, TwitterEmbed, YouTubeEmbed } from "react-social-media-embed";

import React from 'react';

interface SanityImageAsset{
// come back to this next time. fill type
}
interface SanityImageProps{
  asset:SanityImageAsset
}
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
  const SanityImage:React.FC<SanityImageProps> = ({ asset }) => {
    const imageProps = useNextSanityImage(client, asset);
  
    if (!imageProps) return null;
  
    return (<Image 
      {...imageProps}
      layout='responsive'
      sizes='(max-width: 800px) 100vw, 800px'
      alt=""
    />);
  }
  const components: PortableTextComponents = {
    block: {
      h1: ({children}) => <h1 className="text-3xl">{children}</h1>,
      h2: ({children}) => <h2 className="text-2xl">{children}</h2>,
      h3: ({children}) => <h3 className="text-xl">{children}</h3>,
      normal: ({children})=> <p className="text-zinc-200 text-pretty subpixel-antialiased">{children}</p>,
      blockquote: ({children}) => <blockquote className="border-l-2 border-zinc-800 pl-4 text-zinc-300 mx-4">{children}</blockquote>,
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
    types: {
      image: ({ value }) => {
        return (
          <SanityImage {...value} />
        );
      },
      twitter:({value}) => {
        return (
          <TwitterEmbed url={value.url}/>
        )
      },
      youtube:({value}) => {
        return (
          <YouTubeEmbed url={value.url}/>
        )
      },
      linkedin:({value}) => {
        return (
          <LinkedInEmbed url={value.url}/>
        )
      }
      
    },

  }
  return (
    <main className="container flex justify-center px-4 py-16 lg:py-24 mx-auto prose prose-zinc">
      <div className="space-y-8 mx-auto px-8 xl:px-96 lg:px-56 md:px-36 sm:px-20">
        {articleContent.map((item)=>(
          <React.Fragment key={item.id_}>
          <h2 className="text-2xl">{item.articleTitle}</h2>
          <p>{formatDate(item.postDate)}</p>
          <PortableText
            value={item.content}
            components={components}
          />
          </React.Fragment>
        ))}
      </div>
    </main>
  )
}