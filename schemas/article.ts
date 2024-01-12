import { defineField } from "sanity";
import twitter from "./objects/twitter"

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
            type:"slug"
        },
        {
            name:"postDate",
            title:"Date of Post",
            type:"date",
            options:{
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel:'Today'
            }
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          description: "Write a full description about this project",
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
            {
              type: "twitter"
            },
            {
              type: "linkedin"
            },
            {
              type: "youtube"
            }
        ],
        }

        
    ],
}

export default article;