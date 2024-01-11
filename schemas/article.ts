import { defineField } from "sanity";

const tweetEmbed = {
  name: 'tweetEmbed',
  title: 'Tweet Embed',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Tweet URL',
      type: 'url'
    }
  ]
};


const article = {
    name: "article",
    title: "Article",
    type: "document",
    icon: "",
    fields: [
        defineField({
            name: "articleTitle",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
          }),
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            validation:{
              required:true
            }
        },
        {
            name:"postDate",
            title:"Date of Post",
            type:"date",
            options:{
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel:'Today'
            },
            validation:{
              required:true
            }
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          description: "Write a full description about this project",
          validation:{
            required:true
          },
          of: [
            { 
                type: "block" 
            },
            {
                type: "image",
                fields: [
                    {
                      type: 'text',
                      name: 'alt',
                      title: 'Alternative text',
                      options: {
                        isHighlighted: true
                      }
                    }
                  ]
            },
            { type: "tweetEmbed" }
        ],
        }

        
    ],
}

export default article;