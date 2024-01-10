import { getSpecificArticle } from "@/sanity/sanity.query"
import { SpecificArticleType } from "@/types"
import {PortableText} from '@portabletext/react'

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
  return (
    <main className="container flex justify-center px-4 sm:px-8 py-16 lg:py-24 mx-auto prose prose-zinc">
      <div className="space-y-8 w-5/12">
        {articleContent.map((item)=>(
          <>
          <h2 key={item.id_} className="text-2xl">{item.articleTitle}</h2>
          <p>{formatDate(item.postDate)}</p>
          <PortableText
            value={item.content}
          />
          </>
        ))}
      </div>
    </main>
  )
}