// ArticlesList.tsx
'use client'
import { ArticleItemsProps } from "./ArticleItems";
import YearGroup from "./YearGroup";

interface ArticlesListProps {
    articles: { year: number; title: string; date: string; url:string }[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  // Group articles by year
  const articlesByYear = articles.reduce((acc, article) => {
    if (!acc[article.year]) {
      acc[article.year] = [];
    }
    acc[article.year].push(article);
    return acc;
  }, {} as Record<number, ArticleItemsProps[]>);

  const years = Object.keys(articlesByYear).map(Number).sort((a, b) => b - a); // Sort years in descending order

  return (
    <div className="container m-0 px-0 pb-6">
      {years.map((year, index) => (
        <div key={year}>
          {/* Conditionally render the horizontal rule based on index */}
          {index !== 0 && <hr className="border-t border-zinc-800 w-full" />}
          <YearGroup year={year} articles={articlesByYear[year]} />
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
