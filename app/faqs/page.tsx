"use client";
import React, { useState } from 'react';
import Footer from "@/components/Footer"


type FAQ = {
  question: string;
  answer: string;
};

type FAQData = {
  [key: string]: FAQ[];
};

const FAQSection: React.FC = () => {
    const [openCategory, setOpenCategory] = useState<string | null>('general');
    const [openItem, setOpenItem] = useState<number | null>(null);

    const handleCategoryClick = (category: string) => {
        setOpenCategory((prevCategory) => (prevCategory === category ? prevCategory : category));
        setOpenItem(null); // Reset openItem when changing categories
      };
      

  const handleItemClick = (index: number) => {
    setOpenItem(index === openItem ? null : index);
  };

  const faqData: FAQData = {
    // General FAQs
general: [
    {
      question: 'Is the chat app free to use ?',
      answer: 'Yes, our chat app offers a free plan with essential features. We also provide a Pro plan for users who need advanced capabilities.',
    },
    {
      question: 'How can I start using the chat app ?',
      answer: 'Simply sign up for a free account, and you can start using the app immediately. No credit card is required for the free plan.',
    },
    {
      question: 'Is my data secure on the chat app ?',
      answer: 'Absolutely. We prioritize the security of your data. All communications are encrypted, and we follow industry best practices for data protection.',
    },
    {
      question: 'Can I invite friends to join the chat app ?',
      answer: 'Yes, you can invite friends to join the app. Just share your unique referral link, and both you and your friends may receive benefits.',
    },
  ],
  
    // Trust and Safety FAQs
Safety: [
    
    {
      question: 'Is the chat app secure for personal use ?',
      answer: 'Yes, the chat app prioritizes user privacy and employs robust security measures to ensure a secure environment for personal communication.',
    },
    {
      question: 'How can I report inappropriate content or users?',
      answer: 'If you encounter inappropriate content or behavior, you can use the reporting feature within the app. Our team will take appropriate action.',
    },
    {
      question: 'Are conversations logged or stored ?',
      answer: 'Conversations are securely stored on Firebase Firestore for real-time access, but we prioritize user privacy and do not share or analyze individual conversations.',
    },
    {
      question: 'How are payments handled securely ?',
      answer: 'Payment transactions are handled through our secure integration with Stripe. We don\'t store any sensitive payment information on our servers.',
    },
    // Add more trust and safety FAQs as needed
  ],
  
    // Services FAQs
services: [
    {
      question: 'What languages are supported for translation ?',
      answer: 'Our chat app supports a wide range of languages, ensuring effective real-time translation for users from diverse linguistic backgrounds.',
    },
    {
      question: 'Are there limitations on the free plan ?',
      answer: 'The free plan includes essential features, but for advanced capabilities like ad-free usage and additional customization, consider upgrading to our Pro plan.',
    },
    {
      question: 'How does two-way translation work in the app ?',
      answer: 'Two-way translation ensures that messages are translated not only for the recipient but also back to the sender\'s language. This bidirectional translation enhances understanding.',
    },
    {
      question: 'Can I use the app on multiple devices ?',
      answer: 'Yes, you can access the chat app on multiple devices using the same account. Your conversations and preferences will sync seamlessly across devices.',
    },
    // Add more services FAQs as needed
  ],
    // Billing FAQs
billing: [
    {
      question: 'How do I upgrade to the Pro plan ?',
      answer: 'To upgrade to the Pro plan, go to the app settings, select the subscription section, and follow the prompts to choose and activate the Pro plan.',
    },
    {
      question: 'What payment methods are accepted ?',
      answer: 'We currently accept major credit and debit cards for subscription payments through our secure payment gateway, powered by Stripe.',
    },
    {
      question: 'Can I cancel my subscription at any time ?',
      answer: 'Yes, you can cancel your subscription at any time. The cancellation will take effect at the end of the current billing period.',
    },
    {
      question: 'How are billing and subscription managed ?',
      answer: 'Billing and subscription details are managed securely through your account settings. You can update payment information, view invoices, and manage your subscription status.',
    },
    // Add more billing FAQs as needed
  ],
    // Features FAQs
features: [
    {
      question: 'What sets our chat app apart from others ?',
      answer: 'Our chat app stands out with its real-time translation feature, ensuring seamless communication across different languages for a truly global experience.',
    },
    {
      question: 'Are there additional features in the Pro plan ?',
      answer: 'Yes, the Pro plan unlocks advanced features such as ad-free usage, priority customer support, and exclusive customization options for a premium experience.',
    },
    {
      question: 'Is there a limit on users in a group chat ?',
      answer: 'Our app supports group chats with a generous number of participants. Check the app settings for specific details on group chat limitations.',
    },
    {
      question: 'How frequently are new features added ?',
      answer: 'We are committed to regular updates and improvements. New features and enhancements are rolled out periodically to enhance the overall user experience.',
    },
    // Add more features FAQs as needed
  ],
  // Pro vs Free Plan FAQs
Plans: [
    {
      question: 'What are the key features of the Free plan ?',
      answer: 'The Free plan includes essential features such as real-time translation, basic customization options, and group chat functionality. It is suitable for users with basic communication needs.',
    },
    {
      question: 'What benefits does the Pro plan offer ?',
      answer: 'The Pro plan provides an enhanced experience with advanced features, including ad-free usage, priority customer support, exclusive themes, and additional customization options for a premium chat experience.',
    },
    {
      question: 'Is there a trial period for the Pro plan ?',
      answer: 'Yes, the Pro plan comes with a trial period, allowing users to explore and experience all the advanced features before deciding to subscribe.',
    },
    {
      question: 'Are there limitations on the Free plan ?',
      answer: 'While the Free plan offers essential features, users on this plan may experience ads and have limited access to certain customization options available to Pro plan subscribers.',
    },
    // Add more Pro vs Free Plan FAQs as needed
  ],
  upcomingFeatures: [
    {
      question: 'What new features are in upcoming versions ?',
      answer: 'We have exciting updates planned for upcoming versions! Stay tuned for features such as multimedia support, advanced language options, and improved user customization.',
    },
    {
      question: 'Is there a roadmap for upcoming releases ?',
      answer: 'Yes, we are actively working on a roadmap that outlines the upcoming features and improvements. We will share the roadmap with our users soon to keep everyone informed about our development plans.',
    },
    {
      question: 'Can users suggest features for future releases ?',
      answer: 'Absolutely! We value user feedback, and we encourage users to submit feature requests and suggestions through our feedback channels. Your input helps shape the future of our chat app.',
    },
    {
      question: 'Will there be a voice translation feature ?',
      answer: 'Definately! We are currently in beta mode on voice translation and many more features. Soon it will be released to production',
    },
    // Add more upcoming features FAQs as needed
  ]
  
  
  };

  return (
    
    <section className="bg-white dark:bg-black dark:text-[#d1d1f7] font-mono pt-20 px-80">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-5xl font-semibold text-center text-gray-800 lg:text-5xl dark:text-[#d1d1f7]">Frequenty Asked Questions</h1>
        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-[#d1d1f7]">Categories</h1>
            <div className="mt-4 space-y-4 lg:mt-8">
              {Object.keys(faqData).map((category) => (
                <button
                  key={category}
                  className={`block ${category === openCategory ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300'} hover:underline`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            {openCategory && (
              <div>
                {faqData[openCategory].map((faq, index) => (
                  <div key={index}>
                    <button
                      className="flex items-center focus:outline-none"
                      onClick={() => handleItemClick(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`flex-shrink-0 w-6 h-6 text-blue-500 transform ${index === openItem ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        {index === openItem ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        )}
                      </svg>
                      <h1 className="mx-4 text-xl text-gray-700 dark:text-[#d1d1f7]">{faq.question}</h1>
                    </button>
                    {index === openItem && (
                      <div className="flex mt-8 md:mx-10">
                        <span className="border border-blue-500" />
                        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                    <hr className="my-8 border-gray-200 dark:border-gray-700" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

};

export default FAQSection;
