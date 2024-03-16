import React from 'react'
import user from '../images/customchatimage/User.png'
import Footer from '@/components/Footer'
import design from '../images/customchatimage/design.png'
import Image from 'next/image'
import persona1 from '../images/customchatimage/persona1c.png'
import persona2 from '../images/customchatimage/persona2.png'
import userflow from '../images/customchatimage/userflow.png'
import userflow1 from '../images/customchatimage/userflow1.png'
import userflow2 from '../images/customchatimage/userflow2.png'
import userflow3 from '../images/customchatimage/userflow3.png'
import wireflow1 from '../images/customchatimage/wireflow1.png'
import wireflow2 from '../images/customchatimage/wireflow2.png'
import applicationworkflow from '../images/customchatimage/applicationworkflow.png'
import sequence from '../images/customchatimage/sequence.png'
import polling from '../images/customchatimage/polling.png'
import longpolling from '../images/customchatimage/longpolling.png'
import websockets from '../images/customchatimage/websockets.png'
import metadata from '../images/customchatimage/metadata.png'
import hld from '../images/customchatimage/hld.png'
import scalibility from '../images/customchatimage/scalibility.png'
import Link from 'next/link'
import  MacbookScroll  from "@/components/ui/macbook-scroll";
import workflow from "@/images/customchatimage/workflow.png"
import sequencebg from "@/images/customchatimage/model.png"





const SystemDesign: React.FC = () => {

  const listStyle: React.CSSProperties = { listStyleType: 'disc' };


 const url=" https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
 return (
   
  <div className='bg-[#e3f3ff] dark:bg-black font-mono dark:text-[#d1d1f7]'>
      <div className='hidden lg:block'>
       <MacbookScroll
        title={
          <span>
            <h2 className="pb-10 max-w-2xl mx-auto text-5xl font-semibold tracking-tight text-gray-800 xl:text-6xl dark:text-[#d1d1f7]">
          Deep Dive{" "}
          <span className="text-blue-500">Design</span>
        </h2>
          </span>
        }
        badge={
          <Link href="">
            {/* <Badge className="h-10 w-10 transform -rotate-12" /> */}
          </Link>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
      </div>
      
    <header className='block lg:hidden'>
      <div
        className="w-full bg-center bg-cover h-[40rem]"
        style={{
          backgroundImage: `url('${url}')`
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white lg:text-6xl">
               System Design Overview
            </h1>
            
          </div>
        </div>
      </div>
    </header>

  {/* system design problem we aim to solve*/}

  <section className="bg-[#d1d1f7] dark:bg-black">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Problems We <span className='text-blue-500'> Aim to Solve</span>
        </h1>
        <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <Image
            src="https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={1200}
            height={1000}
            className="rounded-md lg:w-1/3" // Adjusted width here
        />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <h1
              className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white mt-[-30px]"
            >
              Our Objective
            </h1>

            <p className="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-md dark:text-[#d1d1f7]">
            In a rapidly globalizing world, effective communication across language barriers remains a persistent challenge. Individuals and businesses often face difficulties in expressing themselves in unfamiliar languages, hindering collaboration, understanding, and connection. To address this, we aim to develop a SaaS translation app that leverages cutting-edge technologies and enhance global communication. The app&apos;s distinctive feature lies in its real-time, two-way translation capability, ensuring that users can communicate effortlessly in their preferred language while seamlessly understanding and responding to messages in other languages.
            </p>
            

            {/* href="https://github.com/deepak814795/SaaS-Chat-App"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              target='_blank' */}
            
            <div className="inline-flex w-full mt-6 sm:w-auto">
                <Link href="https://github.com/deepak814795/Glocal-Translation-Chat" className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-mono font-semibold" target='_blank'>
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Learn More
                    </span>
                </Link>
          </div>

          </div>
        </div>
      </div>
    </section>


    <section className="bg-[#d1d1f7] dark:bg-black dark:text-[#d1d1f7]">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[40rem] lg:py-16 lg:flex-row lg:items-center dark:text-[#d1d1f7]">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
            <h1 className="text-2xl  font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Application <span className='text-blue-500'>Requirements</span></h1>
                  <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
              <div className="mt-8 space-y-5 dark:text-[#d1d1f7]">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">User Interface (Next and Typescript)</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">Authentication Service (Firebase Authentication)</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">Backend Server</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">Messaging Service</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">Language Translation Service (Google Cloud Translation AI)</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">Payment Gateway Integration (Stripe)</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">Cloud Storage (Firebase Storage)</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mx-2 dark:text-[#d1d1f7]">Deployment Service (Vercel)</span>
                </p>
               
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-100 lg:w-1/2 hidden lg:block">
            {/* <Image className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={workflow.src} alt="glasses photo"
            width={1200}
            height={1200}   
            /> */}
          </div>
        </div>
    </section>

    

    {/* hld */}

    <section className="bg-[#F8E8EE] dark:bg-black ">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-5xl font-semibold tracking-tight text-gray-800 xl:text-6xl dark:text-white">
          Glocal High Level{" "}
          <span className="text-blue-500">Design</span>
        </h2>
        <p className="dark:text-[#d1d1f7] max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        High-level design refers to the preliminary stage of system or software architecture where the overall structure and components of a system are outlined without going into detailed specifics. It provides a broad view of the system, focusing on major components, their relationships, and interactions.
        </p>
        <div className="inline-flex w-full mt-6 sm:w-auto">
        <Link href="/tutorials" className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-mono font-semibold" target='_blank'>
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
                    Learn More
                    </span>
          </Link>
        </div>
      </div>
</section>





    {/* system design */}


    {/* ---flowchart */}


    <section className="p-4 lg:p-8 dark:bg-blue-1500 dark:text-gray-100 ">
    <div className="container mx-8 space-y-8 lg:space-y-0 flex flex-col-reverse lg:flex-row rounded-md">
        <div className="flex flex-col justify-center p-6 dark:bg-gray-900 lg:w-2/3 rounded-xl"> {/* Adjusted width here */}
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Application <span className='text-blue-500'>Workflow</span></h1>
                  <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
            <p className=" dark:text-[#d1d1f7] my-4 text-gray-500 dark:text-gray-300 md:text-md">
            Upon registering or logging in, users are assigned unique identifiers by Firebase Authentication, ensuring secure access to their account information. This user data, encompassing details like display names and profile pictures, is stored in Firebase Realtime Database or Firestore, maintaining a personalized experience for each user.

            The app offers flexibility with a choice between a free plan and a paid plan. The free plan, while providing access to essential features, may impose constraints on factors like message limits , storage capacity, number of supported languages and group size. Firebase&apos;s pricing plans, tailored to usage, enable users to seamlessly transition to a paid plan for enhanced scalability and access to additional functionalities.

            This strategic approach to user plans not only allows users to tailor their experience based on their needs but also provides a scalable infrastructure, making the chat app adaptable to varying usage patterns. The seamless integration of Firebase services facilitates a smooth user journey while ensuring the app&apos;s sustainability and growth. Users can effectively manage their subscription plans through stripe payment interface and can cancel their subscription at anytime.
            </p>
        </div>
        <Image
            src={applicationworkflow.src}
            alt=""
            width={500}
            height={500}
            className="rounded-md lg:w-1/3" // Adjusted width here
        />
    </div>
</section>





{/* polling non polling web sockets */}


<section className="bg-[#F8E8EE] dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
    <div className="flex items-center justify-between">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Polling, Long Polling & <span className='text-blue-500'>Websockets</span></h1>
      {/* <div className="mt-2">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full " />
        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
      </div> */}
    </div>

   
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 mt-[40px]">
      <div>
      <Image
            src={polling.src}
            alt=""
            width={1000}
            height={1000}
            className="rounded-md" // Adjusted width here
        />
        <div className="mt-8">
          
          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Polling
          </h1>
          <p className="dark:text-[#d1d1f7] mt-2 text-gray-500 dark:text-gray-400">
          Polling is a technique that the client periodically asks the server if there are messages available. Depending on polling frequency, polling could be costly. It could consume precious server resources to answer a question that offers no as an answer most of the time.
          </p>

        </div>
      </div>

      <div>
      <Image
            src={longpolling.src}
            alt=""
            width={1000}
            height={1000}
            className="rounded-md" // Adjusted width here
        />
        <div className="mt-8">

         <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Long Polling
          </h1>
          <p className=" dark:text-[#d1d1f7] mt-2 text-gray-500 dark:text-gray-400">
          In long polling, a client holds the connection open until there are actually new messages available or a timeout threshold has been reached. Once the client receives new messages, it immediately sends another request to the server, restarting the process. 
          </p>
        </div>
      </div>


      <div>
      <Image
            src={websockets.src}
            alt=""
            width={1100}
            height={1100}
            className="rounded-md" // Adjusted width here
        />
        <div className="mt-8">

          
        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Web Sockets
          </h1>
          <p className=" dark:text-[#d1d1f7] mt-2 text-gray-500 dark:text-gray-400">
          WebSocket is the most common solution for sending asynchronous updates from server to client. WebSocket connection is initiated by the client. It is bi-directional and persistent. It starts its life as a HTTP connection and could be “upgraded” via some well-defined handshake to a WebSocket connection. 
          </p>
        </div>
      </div>


    </div>
  </div>
</section>



{/* polling non polling web sockets */}

{/* databse design */}

<section className="bg-[#F1EAFF] dark:bg-black">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Database <span className='text-blue-500'> Design</span>
        </h1>
        <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <Image
            src={sequencebg.src}
            alt=""
            width={500}
            height={500}
            className="rounded-md" // Adjusted width here
        />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
            <h1
              className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white mt-[-25px]"
            >
              Data Models
            </h1>

            <p className=" dark:text-[#d1d1f7] mt-3 text-md text-gray-500 dark:text-gray-300 md:text-md">
                In the proposed database model, the emphasis is on leveraging NoSQL databases like Firebase Firestore due to their inherent suitability for key-value storage and scalability. Firebase Firestore employs partition keys to shard or distribute records across the database, promoting efficient data distribution and retrieval.

                <br/>
                <br/>

                The uniqueness of message IDs is confined within the scope of partition keys, which means that a message ID is not globally unique but rather unique within its partition. This design choice aligns with the distributed nature of NoSQL databases and ensures efficient data organization.

                <br/>
                <br/>

                The role of `firebaseRole` within the `subscription_id` field introduces a mechanism for categorizing users into pro and non-pro members. This information is vital for determining subscription status and privileges within the system.

                <br/>
                <br/>

                The involvement of `language_to_id` and `language_from_id` points to a language translation feature facilitated by the Google Cloud Artificial Intelligence Service. These fields likely store identifiers linking to specific languages, enabling seamless translation services within the application.

                <br/>
                <br/>

                To manage relationships between users and groups, two tables are suggested. The Group Membership table is designed to support message broadcasting, a crucial functionality that involves determining the intended recipients of a message within specific user groups.

                <br/>
                <br/>

                In summary, the proposed database model is tailored for efficient key-value storage and retrieval, utilizes NoSQL databases, incorporates partition keys for data distribution, and addresses specific functionalities such as user roles, language translation, and group messaging. This design reflects a thoughtful consideration of the system&apos;s requirements and the characteristics of the chosen database technology.
            </p>
            
          </div>
        </div>
      </div>
    </section>



{/* databse design */}

{/* Final hld design */}

<section className="bg-[#F1EAFF] dark:bg-black">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
       Final High Level <span className='text-blue-500'>Design</span>
        </h1>
        <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <Image
            src={hld.src}
            alt=""
            width={800}
            height={1100}
            className="rounded-md" // Adjusted width here
        />
          <div className="dark:text-[#d1d1f7] mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <h1
              className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white mt-[-25px]"
            >
             Architecture Design <br/>
            </h1>

            <p className="dark:text-[#d1d1f7] mt-3 text-md text-gray-500 dark:text-gray-300 md:text-md">
            Finally, time for architecture design! By now we’ve laid down a solid foundation for the application — the database schema, the RPC calls. With all these in mind, we can proceed to write down the list of components in the system. <br/> <br/>
            </p>

            <ul style={listStyle}>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300 md:text-md'>
              Chat Service: each online user maintains a WebSocket connection with a WebSocket server in the Chat Service. Outgoing and incoming chat messages are exchanged here. <br/> <br/>
            </li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300 md:text-md'>
              Web Service: It handles all RPC calls except send_message(). Users talk to this service for authentication, join/leave groups, etc. No WebSocket is needed here since all calls are client-initiated and HTTP-based. <br/><br/>
            </li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300 md:text-md'>
              User Mapping Service: Our chat service is globally distributed. We need to keep track of the server ID of the user&apos;s session host. <br/> <br/>
            </li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300 md:text-md'>
              Translation Service: The messages stored inside the database get automatically translated into the receiver&apos;s preferred language for two-way translation. <br/> <br/>
            </li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300 md:text-md'>
              Subscription Management Service: This service allows users to choose between free and paid plans for our application. Based on the plan, users are provided with features corresponding to their plans.
            </li>
          </ul>

            
          </div>
        </div>
      </div>
    </section>

{/* final hld design */}


{/* sequence diagram */}

<section className="bg-[#FAF3F0] dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
  <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Sequence <span className='text-blue-500'>Diagram</span></h1>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
        </div>
    <div className="lg:flex lg:-mx-6 ">
      <div className="lg:w-full lg:px-6">
      <Image
        src={sequence.src}
        alt=""
        width={1400}
        height={2000}
        className="rounded-md"
      />
      </div>

      


      


    </div>
    <section className="bg-[#FAF3F0] dark:bg-black">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
           The Role of Sequence Diagrams in System Design and Interaction Analysis
          </h2>
          <p className="dark:text-[#d1d1f7] max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Sequence diagrams are a powerful tool in system design, offering a visual representation of how different objects or components interact over time. Lifelines, depicted as vertical dashed lines, represent the lifespan of objects involved in the interaction. Activation boxes on lifelines show when an object is active or processing a message, emphasizing the temporal aspect of interactions. Arrows denote messages exchanged between objects, indicating the flow and direction of communication. Return messages signify an object&apos;s response to a received message, illustrating the flow of control during the interaction. Sequence diagrams can showcase parallel execution, revealing concurrent activities among objects. Incorporating loop and conditional statements allows representation of repetitive or decision-based interactions. 
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
          <Link href="https://en.wikipedia.org/wiki/Sequence_diagram" className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-mono font-semibold">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Learn More
        </span>
        </Link>
          </div>
        </div>
      </section>
  </div>
</section>


 

{/* sequence diagram */}

<section className="bg-[#FAF3F0] dark:bg-black">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Scalability & <span className='text-blue-500'>Load Balancing</span>
        </h1>
        <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                  </div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
        <Image
            src={scalibility.src}
            alt=""
            width={800}
            height={1100}
            className="rounded-md" // Adjusted width here
        />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <h1
              className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white mt-[-25px]"
            >
             Need of Scalabale System
            </h1>

            <p className="dark:text-[#d1d1f7] mt-3 text-md text-gray-500 dark:text-gray-300 md:text-md">
            Scalability is a critical aspect of system design that addresses the capacity of a system to handle increased loads or growing demands. It ensures that as user traffic, data, or processing requirements increase, the system can effectively expand to meet these demands without compromising performance or user experience. There are two primary approaches to scalability : vertical scaling (scaling up) involves increasing the resources of an individual server, such as adding more CPU or RAM, but is limited by hardware constraints; horizontal scaling (scaling out) involves distributing the load across multiple servers, offering a more flexible and scalable solution.
            </p>

            <h1
              className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white"
            >
             Need of Load Balancers
            </h1>

            <p className="dark:text-[#d1d1f7] mt-3 text-md text-gray-500 dark:text-gray-300 md:text-md">
            Load balancing is a crucial strategy employed to distribute incoming network traffic across multiple servers or resources, preventing any single server from being overwhelmed. The goal is to optimize resource utilization, enhance system reliability, and avoid downtime. Load balancers can be hardware or software-based, employing various algorithms to distribute traffic, such as round-robin, least connections, or IP hash. They play a pivotal role in facilitating horizontal scaling by evenly distributing requests among multiple servers.
            </p>

            

            
          </div>
        </div>
      </div>
    </section>


{/* Server scalibility */}










{/* Server scalibility */}




{/* Glocal interface design */}


<section className="bg-[#E1F0DA] dark:bg-black">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-5xl font-semibold tracking-tight text-gray-800 xl:text-6xl dark:text-white">
          Glocal  Interface {" "}
          <span className="text-blue-500">Design</span>
        </h2>
        <p className="dark:text-[#d1d1f7] max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        Interface design refers to the process of creating visual and interactive elements that facilitate communication between users and a system, typically a software application or a website. The goal of interface design is to enhance the user experience by presenting information in an organized, aesthetically pleasing, and intuitive manner.
        </p>
        <div className="inline-flex w-full mt-6 sm:w-auto">
        <Link href="https://www.geeksforgeeks.org/software-engineering-user-interface-design/" className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-mono font-semibold">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Learn More
        </span>
    </Link>
        </div>
      </div>
</section>



{/* Glocal interface design */}














{/* etest */}

{/* sections 1 div 1 */}

<section className="bg-[#E1F0DA] dark:bg-black">
  
  <div className="container px-6 py-10 mx-auto">
  <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Understanding <span className='text-blue-500'>Application Layers</span></h1>
      <div className="mt-2">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
      </div>
    <div className="lg:flex lg:-mx-6">
      <div className="lg:w-3/4 lg:px-6">
      <Image
        src={design.src}
        alt=""
        width={800}
        height={1100}
        className="rounded-md"
      />
      </div>
      
      <div className="mt-8 lg:w-1/2 lg:mt-0 lg:px-6">
        <div className='pr-10'>
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Navigating the Design Process</h1> <br/>
          <p className='dark:text-[#d1d1f7] dark:text-gray-400'>
          The design process is a structured journey that starts by defining a problem and setting clear objectives. Through user research and competitor analysis, we gain insights and identify unique elements. Ideation leads to prototyping and user testing, refining the design. Visual design includes creating a cohesive look and feel, followed by collaboration with developers for implementation. Iterative testing and a continuous feedback loop refine the design further. The final stages involve launch, post-launch monitoring, and ongoing optimization based on user feedback and analytics. This cyclical process ensures that the design aligns with user needs and business goals effectively.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* section2 - div2 */}

<section className="bg-white dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Understanding <span className='text-blue-500'>User Persona</span></h1>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
        </div>

    <div className="lg:flex lg:-mx-6">
      <div className="lg:w-1/2 lg:px-6">
        <Image
          src={persona1.src}
          alt=""
          width={900}
          height={1000}  // Set a fixed height for consistency
          className="rounded-md"
        />
      </div>

      <div className='lg:w-1/2 lg:px-6'>
        <Image
          src={persona2.src}
          alt=""
          width={900}
          height={1000}  // Set a fixed height for consistency
          className="rounded-md"
        />  
      </div>
    </div>

    {/* <div className="mt-8 lg:w-full lg:mt-0 lg:px-6">
        <div className='pr-10'>
          <br/> <br/>
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">The Vital Role of User Personas</h1> <br/>
          <p className='dark:text-gray-400'>
          The design process is a structured journey that starts by defining a problem and setting clear objectives. Through user research and competitor analysis, we gain insights and identify unique elements. Ideation leads to prototyping and user testing, refining the design. Visual design includes creating a cohesive look and feel, followed by collaboration with developers for implementation. Iterative testing and a continuous feedback loop refine the design further. The final stages involve launch, post-launch monitoring, and ongoing optimization based on user feedback and analytics. This cyclical process ensures that the design aligns with user needs and business goals effectively.
          </p>
        </div>
    </div> */}

      <section className="bg-white dark:bg-black">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          The Vital Role of User Personas
          </h2>
          <p className="dark:text-[#d1d1f7] max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          User personas play a pivotal role in the design and development process by providing a human-centric perspective on user data. These fictional characters, representing the target audience, guide decision-making, prioritize features, and enhance communication strategies. They contribute to proactive problem-solving by identifying user pain points, ensuring solutions align with user preferences. User personas continuously inform the design process, leading to an improved user experience and mitigating risks associated with misguided decisions. Regular updates based on user feedback keep personas relevant and adaptive to changing needs and trends, making them an essential tool for creating products that resonate with users.
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
          <Link href="https://medium.com/inside-ppl-b7/four-main-keys-of-persona-in-software-development-d4df627aeb96" className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-mono font-semibold">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Learn More
        </span>
        </Link>
          </div>
        </div>
      </section>

      
  </div>
</section>


{/* section 3 - div3 */}


{/* not included user data flow heading */}

<section className="bg-[#E5D4FF] dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
  <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Users <span className='text-blue-500'>Data Flow</span></h1>
      <div className="mt-2">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
      </div>
    <div className="lg:flex lg:-mx-6">
      <div className="lg:w-3/4 lg:px-6">
      <Image
        src={userflow1.src}
        alt=""
        width={800}
        height={2000}
        className="rounded-md"
      />
      </div>

      <div className="mt-8 lg:w-1/2 lg:mt-0 lg:px-6">
        <div className='pr-10'>
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">User Interaction and Input</h1> <br/>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Encompasses the initial interaction where users register and input information such as usernames, emails, and preferences.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Includes the subscription model, allowing users to choose between free and paid plans based on their communication needs.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Involves real-time messaging, enabling users to communicate in their preferred language without the worry of a language barrier.</li>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="bg-[#E5D4FF] dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
    <div className="lg:flex lg:-mx-6">
      <div className="lg:w-3/4 lg:px-6">
      <Image
        src={userflow2.src}
        alt=""
        width={800}
        height={2000}
        className="rounded-md"
      />
       
      </div>

      <div className="mt-8 lg:w-1/2 lg:mt-0 lg:px-6">
        <div className='pr-10 mt-[15px]'>
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Translation and Processing.</h1> <br/>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Utilizes Google Cloud AI services for real-time translation of messages.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Messages are initially stored in Firebase Firestore, ensuring secure and reliable storage.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Involves the processing of stored messages, converting them into the preferred language of the receiver.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Ensures secure transmission of the translated messages, providing a seamless and efficient user experience.</li>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-[#E5D4FF] dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
    <div className="lg:flex lg:-mx-6">
      <div className="lg:w-3/4 lg:px-6">
      <Image
        src={userflow3.src}
        alt=""
        width={800}
        height={2000}
        className="rounded-md"
      />
       
      </div>

      <div className="mt-8 lg:w-1/2 lg:mt-0 lg:px-6">
        <div className='pr-10 mt-[15px]'>
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Secure Transmission and User Interface</h1> <br/>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Integrates APIs for translation services and other functionalities.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Presents translated messages in the user interface, maintaining a user-friendly experience.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Includes user interactions, profile updates, and robust security measures for authentication and data protection.</li>
            <li className='dark:text-[#d1d1f7] text-gray-500 dark:text-gray-300'>Upholds the subscription model, distinguishing between free and paid plans, to offer users a tailored experience based on their communication needs.</li>
        </div>
      </div>

     
    </div>
  </div>
</section>



<section className="bg-[#e3f3ff] dark:bg-black">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Understanding <span className='text-blue-500'>Wireframes</span></h1>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
        </div>

    <div className="lg:flex lg:-mx-6">
      <div className="lg:w-1/2 lg:px-6">
        <Image
          src={wireflow1.src}
          alt=""
          width={900}
          height={1000}  // Set a fixed height for consistency
          className="rounded-md"
        />
      </div>

      <div className='lg:w-1/2 lg:px-6'>
        <Image
          src={wireflow2.src}
          alt=""
          width={900}
          height={1000}  // Set a fixed height for consistency
          className="rounded-md"
        />  
      </div>
    </div>

      <section className="bg-[#e3f3ff] dark:bg-black">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          The Role of Mid-Fidelity Wireframes in Visualization and Iterative Refinement
          </h2>
          <p className="dark:text-[#d1d1f7] max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Mid-fidelity wireframes serve as a crucial step in the design process, offering a more detailed representation of a digital product than low-fidelity sketches while maintaining the flexibility needed for iterative refinement. These wireframes provide a visual blueprint of the user interface, incorporating placeholder images, basic styling, and precise layout details. They convey the intended look and feel of the product, outlining key elements such as buttons, navigation bars, and content areas. Additionally, mid-fidelity wireframes illustrate user flow, navigation paths, and how users interact with the interface. While not as detailed as high-fidelity designs, they hint at interaction states and provide a clearer understanding of expected user behavior. This level of detail facilitates collaboration, allowing team members and stakeholders to engage in discussions and provide feedback. Moreover, mid-fidelity wireframes serve as a foundation for iterative prototyping, enabling designers to test and refine the user experience before advancing to high-fidelity visuals. Balancing detail and speed, mid-fidelity wireframes play a pivotal role in efficiently progressing through the design process, from concept to a more refined and user-centric interface.
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
          <Link href="https://www.experienceux.co.uk/faqs/what-is-wireframing/" className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-mono font-semibold">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
          Learn More
          </span>
         </Link>
          </div>
        </div>
      </section>

      
  </div>
</section>


{/* <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
  <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Sequence <span className='text-blue-500'>Diagram</span></h1>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
        </div>
    <div className="lg:flex lg:-mx-6 ">
      <div className="lg:w-full lg:px-6">
      <Image
        src={sequence.src}
        alt=""
        width={1400}
        height={2000}
        className="rounded-md"
      />
      </div>

      


      


    </div>
    <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
           The Role of Sequence Diagrams in System Design and Interaction Analysis
          </h2>
          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
          Sequence diagrams are a powerful tool in system design, offering a visual representation of how different objects or components interact over time. Lifelines, depicted as vertical dashed lines, represent the lifespan of objects involved in the interaction. Activation boxes on lifelines show when an object is active or processing a message, emphasizing the temporal aspect of interactions. Arrows denote messages exchanged between objects, indicating the flow and direction of communication. Return messages signify an object's response to a received message, illustrating the flow of control during the interaction. Sequence diagrams can showcase parallel execution, revealing concurrent activities among objects. Incorporating loop and conditional statements allows representation of repetitive or decision-based interactions. 
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="https://en.wikipedia.org/wiki/Sequence_diagram"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              target='_blank'
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
  </div>
</section>



 */}










    {/* flowchart */}


    {/* <div className="relative max-w-screen-xl ml-60 pb-5">
      <Image
        src={design.src}
        alt=""
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    {/* <div className="relative max-w-screen-xl ml-60 pb-5">
      <Image
        src={persona1.src}
        alt=""
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    {/* <div className="relative max-w-screen-xl ml-60 pb-5">
      <Image
        src={persona2.src}
        alt=""
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    {/* <div className="relative max-w-screen-xl ml-60">
      <Image
        src={userflow.src}
        alt=''
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    {/* <div className="relative max-w-screen-xl ml-60 pb-5">
      <Image
        src={userflow1.src}
        alt=''
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    {/* <div className="relative max-w-screen-xl ml-60 pb-5">
      <Image
        src={userflow2.src}
        alt=''
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    <div className="relative max-w-screen-xl ml-60 pb-5">
      {/* <Image
        src={userflow3.src}
        alt=''
        width={1000}
        height={1000}
        className="rounded-md"
      /> */}
    <div/>

    {/* <div className="relative max-w-screen-xl ml-45 pb-5 pt-5">
      <Image
        src={wireflow1.src}
        alt=''
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    {/* <div className="relative max-w-screen-xl ml-45 pb-5">
      <Image
        src={wireflow2.src}
        alt=''
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    {/* <div className="relative max-w-screen-xl ml-45 pb-5">
      <Image
        src={sequence.src}
        alt=''
        width={1000}
        height={1000}
        className="rounded-md"
      />
    </div> */}

    



  {/* Add more divs for other images */}

  </div>
  <Footer />   
</div>

  
  );
}

export default SystemDesign