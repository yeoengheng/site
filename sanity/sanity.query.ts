import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getArticle() {
  return client.fetch(
    groq`*[_type == "article"] | order(postDate){
      _id,
      articleTitle,
      postDate,
      "slug":slug.current
    }`
  );
}