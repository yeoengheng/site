'use client'

export interface ArticleItemsProps {
    title: string;
    date: string;
  }
  
  const ArticleItem: React.FC<ArticleItemsProps> = ({ title, date }) => (
    <div className="flex justify-between border-b border-gray-700 py-2">
      <div>{title}</div>
      <div>{date}</div>
    </div>
  );

export default ArticleItem