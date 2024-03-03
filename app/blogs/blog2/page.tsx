import React from 'react'
import Footer from '@/components/Footer'
import Image from 'next/image'

const page = () => {
  return (
  <div className="max-w-screen-xl mx-auto">
  <main className="mt-10">
    <div
      className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
      style={{ height: "24em" }}
    >
      <div
        className="absolute left-0 bottom-0 w-full h-full z-10"
        style={{
          backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
        }}
      />
      <Image
         src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         className="absolute left-0 top-0 w-full h-full z-0 object-cover"
         alt=""
        width={1200}
        height={1000}  
      />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
        Navigating a Multilingual World: Overcoming Language Barriers with Glocal
        </h2>
        <div className="flex mt-3">
          <Image
           src="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6838.jpg?w=740"
           className="h-10 w-10 rounded-full mr-2 object-cover"
           alt=""
            width={1200}
            height={1000}  
          />
          <div>
            <p className="font-semibold text-gray-200 text-sm">
              {" "}
              Deepak Kushwaha{" "}
            </p>
            <p className="font-semibold text-gray-400 text-xs"> 12 Feb 2024</p>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed dark:text-gray-400">
      <p className="pb-6">
      In a world characterized by cultural diversity and global interconnectedness, the ability to navigate a multilingual landscape is more crucial than ever. Language, a powerful expression of culture, often becomes a barrier for effective communication. This article explores the challenges presented by a multilingual world and how Glocal serves as a beacon, empowering individuals to overcome language barriers seamlessly.
      </p>
      <p className="pb-6">
      As we traverse borders and engage in cross-cultural interactions, the richness of languages becomes apparent. However, this linguistic diversity can create challenges in understanding, collaboration, and building connections.Glocal recognizes the intricate tapestry of languages and strives to unravel the complexities, turning them into threads that connect rather than divide.
      </p>
      <p className="pb-6">
      For avid travelers, exploring new places is an exhilarating experience, but language differences can pose significant hurdles. Glocal steps in as a travel companion, allowing users to communicate effortlessly in their preferred language. Whether ordering food, seeking directions, or immersing in local cultures, the app transforms the travel experience by breaking down language barriers.
      </p>
      <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
      In the business realm, effective communication is paramount. Glocal proves to be a valuable asset for multinational companies, offering a platform where teams can communicate seamlessly across language boundaries. The app&apos; real-time translation ensures that business negotiations, collaborations, and day-to-day interactions remain smooth and efficient.
      </div>
      <p className="pb-6">
      At its core, language is a bridge that connects hearts and minds. Glocal goes beyond being a mere translation tool; it facilitates the understanding of cultural nuances and expressions. The app becomes a conduit for genuine connections, fostering relationships that transcend linguistic differences.
      </p>
      <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4 dark:text-gray-400">
      Conclusion
      </h2>
      <p className="pb-6">
      In a world where diversity should be celebrated rather than hindered, Glocal emerges as a champion for overcoming language barriers. By providing a platform that seamlessly connects individuals from different linguistic backgrounds, the app transforms the way we navigate and thrive in a multilingual world. Together, let&apos; embrace the beauty of language diversity and build bridges that unite us all.
      </p>
    </div>
  </main>
  {/* main ends here */}
  <Footer />
  
</div>

  )
}

export default page