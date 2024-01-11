import { FaTwitter } from "react-icons/fa";
import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Preview = ({ value }) => {
    const { id } = value;
    return (
      <div>
        {id ? <TwitterTweetEmbed tweetId={id} /> : <p>No tweet ID provided</p>}
      </div>
    );
  }

const twitter = {
    name: 'twitter',
    type: 'object',
    title: 'Twitter Embed',
    icon:FaTwitter,
    fields: [
        {
          name: 'id',
          type: 'string',
          title: 'Twitter tweet id'
        }
      ],
      preview: {
        select: {
           id: 'id'
        },
        component: Preview
      }
  }

  export default twitter