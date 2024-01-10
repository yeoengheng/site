import { ArticleItemsProps } from "./ArticleItems";
import ArticleItem from "./ArticleItems";

interface YearGroupProps {
    year: number;
    articles: ArticleItemsProps[];
  }
  
  const YearGroup: React.FC<YearGroupProps> = ({ year, articles }) => (
    <div>
      <h2 className="text-white text-lg font-bold">{year}</h2>
      {articles.map((article, index) => (
        <ArticleItem key={index} title={article.title} date={article.date} />
      ))}
    </div>
  );

  export default YearGroup