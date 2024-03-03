"use client"
import { subscriptionRef } from "@/lib/converters/Subscription";
import { useSubscriptionStore } from "@/store/store";
import { onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function SubscriptionProvider({children}:{children: React.ReactNode}) {
  const { data: session } = useSession();

  const setSubscription=useSubscriptionStore(
    (state)=>state.setSubscription
  );

  useEffect(() => {
    if (!session) return;

    return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
      if (snapshot.empty) {
        console.log("User has NO subscription");
        // set no subscription
        setSubscription(null);
        return;
      } else {
        console.log("User has subscription");
        // set Subscription
        setSubscription(snapshot.docs[0].data());
      }
    }, (error)=>{
        console.log("error getting document:",error);
    });
  }, [session, setSubscription]); // Include session as a dependency for useEffect

  return <>{children}</>;
}

export default SubscriptionProvider;
