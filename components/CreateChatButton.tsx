"use client";

import React, { useState } from 'react'
import { MessageSquarePlus } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';
import { useToast } from './ui/use-toast';
import { useSubscriptionStore } from '@/store/store';
import LoadingSpinner from './LoadingSpinner';
import {v4 as uuidv4} from "uuid";
import { getDocs, serverTimestamp, setDoc } from 'firebase/firestore';
import { addChatRef, chatMembersCollectionGroupRef } from '@/lib/converters/ChatMembers';
import { ToastAction } from './ui/toast';




const CreateChatButton = ({isLarge}:{isLarge?:boolean}) => {

  const {data: session}=useSession();  
  const router=useRouter();
  const [loading, setLoading]=useState(false);
  const {toast}=useToast();
  const subscription=useSubscriptionStore((state)=>state.subscription);

  const createNewChat=async ()=>{
    if(!session?.user.id) return;

    setLoading(true);
    toast({
      title: "Creating a new chat...",
      description: "Hold tight while we create your new chat...",
      duration: 3000,
    });

    // todo check if user if pro and limit them creating new chat

    // ----
    const noOfChats = (
      await getDocs(chatMembersCollectionGroupRef(session.user.id))
    ).docs.map((doc) => doc.data()).length;
    
    // check if the user is about to exceed the PRO plan which is 3 chats
    const isPro = subscription?.role === "pro" && subscription.status === "active";
    
    if (!isPro && noOfChats >= 3) {  
      toast({
        title: "Free plan limit exceeded",
        description:
          "You've exceeded the limit of chats for the FREE plan. Please upgrade to PRO to continue adding users",
        variant: "destructive",
        action: (
          <ToastAction
            altText="Upgrade"
            onClick={() => router.push("/register")}
          >
            Upgrade to PRO
          </ToastAction>
        ),
      });
    
      setLoading(false);
      return;
    }
    
    
    

    // push document into firestore db


    // all logic here
    const chatId = uuidv4();

    await setDoc(addChatRef(chatId, session.user.id), {
      userId: session.user.id!,
      email: session.user.email!,
      timestamp: serverTimestamp(),
      isAdmin: true,
      chatId: chatId,
      image: session.user.image || "",
    })
      .then(() => {
        toast({
          title: "Success",
          description: "Your chat has been created!",
          className: "bg-green-600 text-white",
          duration: 2000,
        });
        router.push(`/chat/${chatId}`);
      })
      .catch(() => {
        //console.error(error)
        toast({
          title: "Error",
          description: "There was an error creating your chat!",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
    //router.push(`/chat/abc`);
  };

  if(isLarge)
  return (
    <div>
      <Button variant={"default"} onClick={createNewChat}>
        {loading ? <LoadingSpinner/> : "Create a New Chat"}
      </Button>
    </div>
  )

  return (
    <Button onClick={createNewChat} variant={'ghost'}>
        <MessageSquarePlus/>
        
    </Button>
  )
}

export default CreateChatButton