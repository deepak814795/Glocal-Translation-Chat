"use client"

import * as React from "react"
import Link from "next/link"
import Image from 'next/image'

import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const robourl="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1707128142~exp=1707128742~hmac=736bde93e112e3ade0d525dc47e8854a477171acc9140af13015624a5fc8fb3d"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Creator",
    href: "/about-creator",
    description:
      "Tech enthusiast turning ideas into impactful solutions.",
  },
  {
    title: "Mission and Vision",
    href: "/mission-vision",
    description:
      "To empower global communication by providing a seamless, AI-driven chat experience that transcends language barriers, fostering connections and understanding among people worldwide.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description:
      "Our team is a diverse group of passionate individuals who are always ready to help",
  },
  {
    title: "Roadmap - Coming Soon",
    href: "/roadmap",
    description: "From foundational research and development to a feature-rich launch, our roadmap ensures a seamless journey in building and evolving our SaaS chat app.",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    description:
      "Our commitment to safeguarding your data is embedded in our privacy policy, ensuring transparency, security, and trust throughout your experience with our SaaS chat app.",
  },
  {
    title: "Terms and Conditions",
    href: "/tnc",
    description:
      " Explore the terms and conditions that govern your usage of our SaaS chat app, outlining the rules, responsibilities, and expectations to foster a positive and secure environment.",
  },
]

const resources: { title: string; href: string; description: string }[] = [
    {
      title: "Knowledge Center",
      href: "/tutorials",
      description:
        "Deep Dive and Learn about new and emerging technologies.",
    },
    {
      title: "Frequently Asked Questions",
      href: "/faqs",
      description:
        "Discover answers to commonly asked questions about our SaaS chat app.",
    },
    {
      title: "Blogs",
      href: "/blogs",
      description:
        "Dive into our blog section for thought-provoking articles, industry trends, and expert opinions on the latest in the world of chat applications and SaaS solutions.",
    },
    {
      title: "Source Code",
      href: "https://github.com/deepak814795/SaaS-Chat-App/tree/main",
      description: "Delve into the intricacies of our well-crafted codebase, understand the architecture, and leverage the flexibility to customize and extend the functionality to suit your unique needs.",
    },
    {
      title: "System Design",
      href: "/system-design",
      description:
        "Empower yourself with our step-by-step tutorials, designed to guide you through the process of building and optimizing your SaaS chat application.",
    },
    {
      title: "Documentation",
      href: "https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk?r=IG2XYR2GIXtuirTq6Byq",
      description:
        "Explore detailed guides, API references, and examples that will streamline your development journey and ensure seamless integration with our platform.",
    }, 
  ]



  const explore: { title: string; href: string; description: string }[] = [
    {
      title: "About Creator",
      href: "/about-creator",
      description:
        "Tech enthusiast turning ideas into impactful solutions.",
    },
    {
      title: "Documentation",
      href: "https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk?r=IG2XYR2GIXtuirTq6Byq",
      description:
        "Explore detailed guides and API references",
    },
    {
      title: "Frequently Asked Questions",
      href: "/faqs",
      description:
        "Discover commonly asked questions",
    },
    {
      title: "Blogs",
      href: "/blogs",
      description:
        "Dive into our blog section",
    },
    {
      title: "System Design",
      href: "/system-design",
      description:
        "Deep Dive Design",
    },
    {
      title: "Knowledge Center",
      href: "/tutorials",
      description:
        "Explore essential lessons",
    },
    
   
  ]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>


      <div className="">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> 
        </div>

       <div className="hidden lg:block">
        <NavigationMenuItem >
          <NavigationMenuTrigger>About</NavigationMenuTrigger> 
          {/* This about us is comming from component array above */}
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">

              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </div>
 
        <div className="hidden lg:block">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources.map((resources) => (
                <ListItem
                  key={resources.title}
                  title={resources.title}
                  href={resources.href}
                >
                  {resources.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </div>


        <div className="hidden lg:block">
        <NavigationMenuItem>
          <Link href="https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk?r=IG2XYR2GIXtuirTq6Byq" rel="noopener noreferrer" target="_blank" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> 
        </div>

        <div className="hidden lg:block">
        <NavigationMenuItem>
          <Link href="/system-design" rel="noopener noreferrer" target="_blank" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              System Design
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> 
        </div>

        {/* only render on smaller screens  */}

        <div className="block lg:hidden">
        <NavigationMenuItem >
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger> 
          {/* This about us is comming from component array above */}
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] sm:w-[200px]">

              {explore.map((explore) => (
                <ListItem
                  key={explore.title}
                  title={explore.title}
                  href={explore.href}
                >
                  {explore.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </div>

        
      </NavigationMenuList>
    </NavigationMenu>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"














// "use client"

// import * as React from "react"
// import Link from "next/link"
// import Image from 'next/image'

// import { cn } from "@/lib/utils"
// import { Icons } from "@/components/Icons"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// const robourl="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=740&t=st=1707128142~exp=1707128742~hmac=736bde93e112e3ade0d525dc47e8854a477171acc9140af13015624a5fc8fb3d"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "About Creator - Coming Soon",
//     href: "/about-creator",
//     description:
//       "Tech enthusiast turning ideas into impactful solutions.",
//   },
//   {
//     title: "Mission and Vision",
//     href: "/mission-vision",
//     description:
//       "To empower global communication by providing a seamless, AI-driven chat experience that transcends language barriers, fostering connections and understanding among people worldwide.",
//   },
//   {
//     title: "Contact Us",
//     href: "/contact",
//     description:
//       "Our team is a diverse group of passionate individuals who are always ready to help",
//   },
//   {
//     title: "Roadmap - Coming Soon",
//     href: "/roadmap",
//     description: "From foundational research and development to a feature-rich launch, our roadmap ensures a seamless journey in building and evolving our SaaS chat app.",
//   },
//   {
//     title: "Privacy Policy",
//     href: "/privacy-policy",
//     description:
//       "Our commitment to safeguarding your data is embedded in our privacy policy, ensuring transparency, security, and trust throughout your experience with our SaaS chat app.",
//   },
//   {
//     title: "Terms and Conditions",
//     href: "/tnc",
//     description:
//       " Explore the terms and conditions that govern your usage of our SaaS chat app, outlining the rules, responsibilities, and expectations to foster a positive and secure environment.",
//   },
// ]

// const resources: { title: string; href: string; description: string }[] = [
//     {
//       title: "Frequently Asked Questions",
//       href: "/faqs",
//       description:
//         "Discover answers to commonly asked questions about our SaaS chat app.",
//     },
//     {
//       title: "System Design",
//       href: "/system-design",
//       description:
//         "Uncover the intricate details of our system design, illustrating the robust architecture and scalable foundation that powers our SaaS chat app.",
//     },
//     {
//       title: "Blogs",
//       href: "/blogs",
//       description:
//         "Dive into our blog section for thought-provoking articles, industry trends, and expert opinions on the latest in the world of chat applications and SaaS solutions.",
//     },
//     {
//       title: "Source Code",
//       href: "https://github.com/deepak814795/SaaS-Chat-App/tree/main",
//       description: "Delve into the intricacies of our well-crafted codebase, understand the architecture, and leverage the flexibility to customize and extend the functionality to suit your unique needs.",
//     },
//     {
//       title: "Tutorials - Coming Soon",
//       href: "/tutorials",
//       description:
//         "Empower yourself with our step-by-step tutorials, designed to guide you through the process of building and optimizing your SaaS chat application.",
//     },
//     {
//       title: "Documentation",
//       href: "https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk?r=IG2XYR2GIXtuirTq6Byq",
//       description:
//         "Explore detailed guides, API references, and examples that will streamline your development journey and ensure seamless integration with our platform.",
//     },
//   ]

// export default function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     {/* <Icons.logo className="h-6 w-6" /> */}
//                     <div className="mb-0 mt-0 text-lg font-medium">
//                     Hello, I am Your Global Chat Companion
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Empower Conversations, Break Language Barriers
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk/overview" title="Introduction" target="_blank" rel="noopener noreferrer">
//                Get familiar with objective of the software and it's implementation.
//               </ListItem>
//               <ListItem href="https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk/getting-started/installation" title="Installation" target="_blank" rel="noopener noreferrer">
//                 How to install dependencies and set up your app.
//               </ListItem>
//               <ListItem href="https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk/user-interface/key-features" title="Key Features" target="_blank" rel="noopener noreferrer">
//                Explore the key functionalities of our application.
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>


//         <NavigationMenuItem>
//           <NavigationMenuTrigger>About Us</NavigationMenuTrigger> 
//           {/* This about us is comming from component array above */}
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {resources.map((resources) => (
//                 <ListItem
//                   key={resources.title}
//                   title={resources.title}
//                   href={resources.href}
//                 >
//                   {resources.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>



//         <NavigationMenuItem>
//           <Link href="https://deepaks-organization-4.gitbook.io/saas-app-docs/~/changes/HBTDL3rRtqnMuPQW3uZk?r=IG2XYR2GIXtuirTq6Byq" rel="noopener noreferrer" target="_blank" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem> 

        


//       </NavigationMenuList>
//     </NavigationMenu>

//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"













