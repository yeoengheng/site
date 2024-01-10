import { PortableTextBlock } from "sanity";

export type ArticleType ={
    id_: string,
    articleTitle:string,
    postDate:Date,
    slug:string,

}

export type SpecificArticleType={
    id_:string,
    articleTitle:string,
    postDate:Date,
    content:PortableTextBlock
}