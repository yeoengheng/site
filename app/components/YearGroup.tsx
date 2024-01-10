// YearGroup.tsx
import { ArticleItemsProps } from "./ArticleItems";
import ArticleItem from "./ArticleItems";

interface YearGroupProps {
    year: number;
    articles: ArticleItemsProps[];
}

const YearGroup: React.FC<YearGroupProps> = ({ year, articles }) => (
  <>
    <div className="grid grid-cols-4 gap-8">
      <p className="col-start-1 text-white text-sm py-4 m-0 font-normal font-['DM Sans'] leading-loose">{year}</p>
      <div className="col-start-2 col-span-3 divide-y divide-zinc-800">
        {articles.map((article, index) => (
          <ArticleItem key={index} title={article.title} date={article.date} url={article.url} />
        ))}
      </div>
    </div>
  </>
);

export default YearGroup;
