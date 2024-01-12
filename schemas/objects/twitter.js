import { FaTwitter } from "react-icons/fa";
import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TweetPreview = ({ value }) => {
    console.log(value);
    const { id } = value;
    return (
      <div>
        hello
        {id ? <TwitterTweetEmbed tweetId={id} /> : <p>No tweet ID provided</p>}
      </div>
    );
  }

const twitter = {
    name: 'twitter',
    type: 'object',
    title: 'Twitter',
    icon:FaTwitter,
    fields: [
        {
          name: 'id',
          type: 'string',
          title: 'Twitter tweet ID'
        }
      ],
      preview: {
        select: {
           id: 'id'
        },
        component: TweetPreview,
      },
  }

  export default twitter