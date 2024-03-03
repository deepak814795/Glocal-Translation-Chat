
import ChatList from '@/components/ChatList';
import ChatPermissionError from '@/components/ChatPermissionError';
import React from 'react'

type Props={
  params: {};
  searchParams: {
    error: string;
  };
};


const ChatsPage = ({searchParams: {error}}: Props) => {

  return (
    <div>

      {error && (
        <div className='m-2'>
          <ChatPermissionError />
         </div> 
      )}
       
      <ChatList />

      {/* {showFooter && <Footer />} */}

    </div>
  )
}

export default ChatsPage