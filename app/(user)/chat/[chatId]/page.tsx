import React from 'react'
import ChatInput from '@/components/ChatInput';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { sortedMessagesRef } from '@/lib/converters/Message';
import { getDocs } from 'firebase/firestore';
import ChatMessages from '@/components/ChatMessages';
import ChatMembersBadges from '@/components/ChatMembersBadges';
import AdminControls from '@/components/AdminControls';
import { chatMembersRef } from '@/lib/converters/ChatMembers';
import { redirect } from 'next/navigation';


type Props={
  params:{
    chatId: string;
  };
};

const ChatPage = async({params : {chatId}}: Props) => {
  const session=await getServerSession(authOptions);
  const initialMessages=(await getDocs(sortedMessagesRef(chatId))).docs.map((doc)=>doc.data());

    const hasAccess=(await getDocs(chatMembersRef(chatId))).docs
      .map((doc)=>doc.id)
      .includes(session?.user.id!);

    if(!hasAccess) redirect("/chat?error=permission");



  return (
    <>
      {/* admin controls */}
      <AdminControls chatId={chatId} />
      {/* chatmember badge */}
      <ChatMembersBadges chatId={chatId} />
        <div className='flex-1'>
          <ChatMessages 
            chatId={chatId}
            session={session}
            initialMessages={initialMessages}
          />

        </div>
        <ChatInput chatId={chatId }/>
     
    </>
  );
}

export default ChatPage