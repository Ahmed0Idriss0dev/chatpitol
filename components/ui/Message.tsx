import React from 'react'
type Message = {
  sender: 'user' | 'bot'
  content: string
}

const Message = ({content ,sender}:Message) => {
   switch(sender){
      case 'bot':
    return (
      <div className="flex  justify-start items-center">
            <div className="w-max p-2 rounded-2xl max-w-[70%] min-h-14 border border-neutral-200  ">
               <p>{content}  </p>
            </div>

    </div>  )
    case 'user':
   return (
       <div className="flex  justify-end  items-center">
            <div className="w-max p-2 rounded-2xl min-h-14 max-w-[70%] bg-blue-700 text-white  ">
                      <p>{content}  </p>

          </div>

    </div>
   )  
      
      

   }
}

export default Message