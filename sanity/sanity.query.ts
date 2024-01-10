import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getArticle() {
  return client.fetch(
    groq`*[_type == "article"] | order(postDate desc){
      _id,
      articleTitle,
      postDate,
      "slug":slug.current
    }`
  );
}

export async function getSpecificArticle(slugcurrent:string) {
    return client.fetch(
        groq`*[_type == "article" && slug.current == $slugcurrent] {
            _id,
            articleTitle,
            postDate,
            content
          }`,
        { slugcurrent } // Passing the variable as a parameter
    )
}
