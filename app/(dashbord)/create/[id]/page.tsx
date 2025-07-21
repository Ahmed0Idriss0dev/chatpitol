'use client'
import React from 'react'
import { CopyBlock } from 'react-code-blocks';
type Params = {
  params: {
    id: string;
  };
};

const page = ({params}:Params) => {
    const code = `  <script src="http://localhost:3000/chatbot.js" chatbot-id="${params.id} "></script>'`
  return (
    <CopyBlock
      text={code}
      language={'js'}
      showLineNumbers={true}
      
    />
  )
}

export default page