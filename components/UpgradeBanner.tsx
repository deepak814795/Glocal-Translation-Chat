"use client";

import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import {Button} from "./ui/button";

function UpgradeBanner() {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.role === "pro";
  const router = useRouter();

  if (subscription === undefined || isPro) {
    return null;
  }

  return (
    <Button
      onClick={() => router.push("/register")}
      className="w-full rounded-none bg-gradient-to-r from-[#7775D6] to-[#E935C1] text-center text-white px-5 py-2 transition-all hover:from-[#7775D6] hover:to-[#E935C1] hover:shadow-nd hover:opacity-75"
    >
      Upgrade to Pro to unlock all features!
    </Button>
  );
}

export default UpgradeBanner;
