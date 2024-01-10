'use client'
import { ArticleItemsProps } from "./ArticleItems";
import YearGroup from "./YearGroup";

interface ArticlesListProps {
    articles: { year: number; title: string; date: string }[];
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
  
    return (
      <div className="container mx-auto px-4 py-12">
        {Object.entries(articlesByYear).map(([year, articles]) => (
          <YearGroup key={year} year={Number(year)} articles={articles} />
        ))}
      </div>
    );
  };

  export default ArticlesList
