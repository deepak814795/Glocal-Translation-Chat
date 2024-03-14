# GLOCAL- AI SaaS Chat App with Real-Time Translation
### Live Link - [https://glocal-chat-deepak-kushwaha.vercel.app/](https://glocal-chat-deepak-kushwaha.vercel.app/)

## Overview

Welcome to our SaaS chat app developed using Next.js and TypeScript, bringing global communication to the next level with real-time translation powered by Google Cloud Artificial Intelligence services. The app operates on a tiered subscription model, providing both free and pro plans tailored to users' needs. Stripe integration is employed for seamless subscription handling.

## Problem It Solves

There are over 7,000 languages spoken today but despite the diversity of languages, communication barriers continue to limit our ability to connect and understand each other.This is especially true in a globalized world where people are constantly travelling and connecting with others from different parts of the world.In fact, language barriers are often cited as a major hindrance to international trade and diplomacy. <br/> <br/> **Problems like this gave birth to GLOCAL - A TRANSLATION and also a CHAT app**.</span><br/> <br/>Glocal is a translation and chat app that helps you translate your native language into any other language in the world with relative ease.It also helps to communicate with anyone, anywhere in the world with a different language. When you receive a message in any language, it automatically translates to your chosen language. Similarly, when you send a message in any language to another person, it is converted to their preferred language. This two-way translation not only ensures seamless conversation but also eliminates the need for a common medium language.

## Techstack Used


- [Next.js](https://nextjs.org/) - The React framework for building web applications.
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Framer Motion](https://www.framer.com/motion/) - A library for creating smooth animations in React applications.
- [Google Cloud Platform](https://cloud.google.com/) - A suite of cloud computing services provided by Google.
- [Artificial Intelligence](https://cloud.google.com/translate) - Google Cloud AI for language translation
- [Firebase](https://firebase.google.com/) & [Firestore](https://firebase.google.com/docs/firestore) - Firebase is a mobile and web application development platform. Firestore is a NoSQL cloud database.
- [Stripe](https://stripe.com/) - A platform for online payment processing.
- [Zustand](https://zustand.surge.sh/) - A small, fast, and scalable state management library for React.
- [Docker](https://www.docker.com/) - Docker is a platform designed to help developers build, share, and run container applications.

## Application Workflow

Upon registering or logging in, users are assigned unique identifiers by Firebase Authentication, ensuring secure access to their account information. This user data, encompassing details like display names and profile pictures, is stored in Firebase Realtime Database or Firestore, maintaining a personalized experience for each user. The app offers flexibility with a choice between a free plan and a paid plan. The free plan, while providing access to essential features, may impose constraints on factors like message limits or storage capacity. Firebase's pricing plans, tailored to usage, enable users to seamlessly transition to a paid plan for enhanced scalability and access to additional functionalities. This strategic approach to user plans not only allows users to tailor their experience based on their needs but also provides a scalable infrastructure, making the chat app adaptable to varying usage patterns. The seamless integration of Firebase services facilitates a smooth user journey while ensuring the app's sustainability and growth.

## Some Screenshots

### ***Homepage***
![i2 (1)](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/95d104c7-e64c-4043-ac08-7de0f2dde951)


### ***Pricing Page***

### ***Free User has access to only free features and has to pay to unlock all features.***
![Screenshot_4-3-2024_1616_glocal-chat-deepak-kushwaha vercel app](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/c34b4fe0-de18-4d80-baea-21b1a7887aa1)


### ***PRO vs FREE User***

### ***PRO plan supports multiple languages while free supports only two languages.***

  ![imgonline-com-ua-twotoone-36hRmU5BQb](https://github.com/deepak814795/saas-app-chat/assets/91387970/098d7ccf-7a3a-432b-a429-77dce05c26c5)

### ***In Free plan users can only have two members per room***
 ![Screenshot (903)](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/6b462d2b-a4d6-4ad9-817b-861dea1fb43e)


 ### ***In Free plan users can only send only 20 messages per room***

![Screenshot (904)](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/28dd30dc-d9d7-4109-b72d-db1013b95bcc)


### ***Stripe Payment to Purchase Pro Plan***
 **Test Card Number**: 4242 4242 4242 4242 <br/>
 **Expiry Date**: Any future date <br/>
 **CVC**: Any 3-digit number <br/> <br/>
 **Note**: Please note that this is a test card number provided by Stripe for testing purposes. It will simulate a successful payment.
 In the current development phase, our Stripe integration is in test mode. In this mode, Stripe accepts payments for addresses outside India for testing purposes. You can use the below given test address or any 
 other address outside India <br/> <br/>
 ***Test Address***: 
 **Country: Switzerland   
 PinCode: 8010   
 City: Zurich**
 
 ![Screenshot_4-3-2024_21324_checkout stripe com](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/92bc53f5-d444-491f-88e8-e2a9d3592318)



### ***Add user to chat and get a sharable link***
 ![Screenshot (891)](https://github.com/deepak814795/saas-app-chat/assets/91387970/45716422-81c2-4a73-a873-f77e9962b910)
  
### ***Documentation page***
 ![Screenshot (912)](https://github.com/deepak814795/SaaS-Chat-App/assets/91387970/21556998-2bb3-4e85-aafc-5cb0f248980e)

### ***Chat with real-time translation of messages***
 ![demo](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/68463564-cb0b-441c-a8db-883251734fc4)

### Thank you for visiting! If you have any questions or suggestions, feel free to contact!!

## Contributing
### ***This Project is open to contributions***

## Getting Started

Set the env variables
```

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

NEXTAUTH_SECRET=

FIREBASE_PROJECT_ID=

FIREBASE_CLIENT_EMAIL=

STRIPE_SECRET_KEY=

STRIPE_PRICE_KEY=

STRIPE_WEBHOOK_SECRET=

NEXTAUTH_URL=http://localhost:3000


```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



