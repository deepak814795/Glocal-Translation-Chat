import { HoverEffect } from "./ui/card-hover-effect";
 
function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 font-mono font-bold dark:text-[#d1d1f7]">
      
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Two-Way Translation",
    description:
      "Ensure a two-way communication process by translating messages not only into the recipient's language but also back into the sender's language. This bidirectional translation feature enhances understanding between users speaking different languages.",
    link: "",
  },
  {
    title: "Easy Payments",
    description:
      "Exprience easy and effortless payments through our stripe payment gateway.Users can manage their free and pro membership from manage section of their profile. Users can cancel their PRO plan at anytime they want. Cancellation will take place only after end of current billing period.",
    link: "",
  },
  {
    title: "Clean Design",
    description:
      "The user-friendly and responsive design enhances the overall experience. The intuitive interface, responsive design, and effortless navigation cater to users across various devices.",
    link: "",
  },
  {
    title: "Private Groups",
    description:
      "Take global communication to new heights with the Group Chat Translation enhancement. This feature empowers users in private groups to break language barriers by seamlessly translating group conversations in real-time.",
    link: "",
  },
  {
    title: "Free & PRO Plans",
    description:
      "To enhance user experience, we provide a fast, efficient, and secure method using the Stripe payment gateway. Users can purchase their Pro membership plans by completing the payment process through Stripe.",
    link: "",
  },
  {
    title: "End to End Encryption",
    description:
      "Communicate with other, without fear of having any data leaks. Your messages are end to end encrypted so no one can read it even if they got leaked. Google's database is highly secure so no one can ever break into your messages.",
    link: "",
  },
];

export default CardHoverEffectDemo