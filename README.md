# GLOCAL- AI Chat App with Real-Time Translation
### Live Link - [https://glocal-ai-deepak-kushwaha.vercel.app/](https://glocal-ai-deepak-kushwaha.vercel.app/)

## Overview
Glocal enables users to engage in conversations without the hindrance of language barriers and makes communication more accessible to individuals from different linguistic backgrounds.

Powered by Google Cloud Translation Hub and custom AutoML models. The app operates on a tiered subscription model, providing both free and pro plans tailored to user's needs. Stripe integration is used for seamless subscription handling.

## Problem It Solves

There are over 7,000 languages spoken today, yet communication barriers still limit our ability to connect. In our globalized world, where people constantly travel and interact, these barriers hinder international trade and diplomacy.

**Problems like this gave birth to GLOCAL - A TRANSLATION and CHAT app.**

Glocal is a translation and chat app that effortlessly translates your native language into any other language. It allows communication with anyone, anywhere, in any language. Incoming messages are automatically translated to your chosen language, and your outgoing messages are converted to the recipient's preferred language. This two-way translation ensures seamless conversations without the need for a common medium language.


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

Upon registration, users receive unique identifiers from Firebase Authentication to ensure secure account access. User data, including display names, messages, and profile pictures, is stored in Firebase Realtime Database or Firestore. Users can add chat partners using their Email IDs. Upon successful verification of email, a sharable link is generated, allowing the new user to join the chat room and select their preferred language for communication. <br/>
(Note : New User's must be Signed In to communicate with each other)

## Some Screenshots

### ***Chat with real-time translation of messages***
 ![demo](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/68463564-cb0b-441c-a8db-883251734fc4)

### ***Bot Integration for user's query***
![Screenshot (1152)](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/ebde8284-516b-4e63-a4ce-330fff52518c)

### ***Pricing Page***

### ***Free User has access to only free features and has to pay to unlock all features.***
![Screenshot_4-3-2024_1616_glocal-chat-deepak-kushwaha vercel app](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/c34b4fe0-de18-4d80-baea-21b1a7887aa1)


### ***PRO vs FREE User***

### ***PRO plan supports multiple languages while free supports only 4 languages.***

![312995650-8c71db28-a9d1-478c-8a4e-3c50cfa86dd5-overlay](https://github.com/deepak814795/Glocal-Nextra-Private/assets/91387970/a943bdb7-f058-40fc-ac45-2c8562d7bbe5)

### ***In Free plan users can only have two members per room while PRO plan supports unlimited members***
 ![image (1)](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/4f56b534-2118-4ca2-879a-935e215f191b)


 ### ***In Free plan users can only send only 20 messages per room while PRO plan supports unlimited text messages***

![image (2)](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/3e25ac81-60b8-46d1-8a50-49ff60dccbc2)



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
![Screenshot (1145)](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/4596bcb1-d655-4788-8dbe-18f242a905d9)

### ***Homepage***
![ppp](https://github.com/deepak814795/Glocal-Translation-Chat/assets/91387970/0ceca9a0-6cf7-4fdb-a4f0-cee07fefb943)


### Thank you for visiting! If you have any questions or suggestions, feel free to contact!!

## Contributing
### ***This Project is open to contributions***

## Getting Started


```
Set the env variables
in .env


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



