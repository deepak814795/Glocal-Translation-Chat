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
        Inclusivity Matters: Making Your App Accessible to All Users
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
              Deepak Kushwaha {" "}
            </p>
            <p className="font-semibold text-gray-400 text-xs"> 12 April 2024</p>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed dark:text-gray-400">
      <p className="pb-6">
      In a world that celebrates diversity, ensuring your app is accessible to all users is not just good practice; it&apos; a fundamental commitment to inclusivity. This article explores the importance of making your app inclusive and offers insights into strategies and features that enhance accessibility for everyone.

      Understanding Accessibility:
Accessibility goes beyond compliance; it&apos; about creating an environment where everyone, regardless of ability or disability, can engage with your app seamlessly. Recognizing the diverse needs of users is the first step toward building an inclusive user experience.
      </p>
      <p className="pb-6">
      User-Centric Design:
Adopting a user-centric design approach is pivotal in creating an inclusive app. Consider the needs of users with varying abilities, ensuring that the interface is intuitive, easy to navigate, and provides alternative methods of interaction, such as voice commands or keyboard shortcuts.
      </p>
      <p className="pb-6">
      Captioning and Transcription:
For multimedia content, including videos and podcasts, provide captions and transcriptions. This benefits users who are deaf or hard of hearing and ensures that content is accessible to a wider audience.
      </p>
      <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
      Testing with Diverse Users:
Actively involve users with diverse abilities in your testing process. Conduct usability testing with individuals who have different needs and preferences to identify and address potential accessibility issues. Their feedback is invaluable in refining the inclusivity of your app.
      </div>
      
      <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4 dark:text-gray-400">
      Conclusion
      </h2>
      <p className="pb-6">
      Inclusivity isn&apos;t just a checkbox; it&apos; an ongoing commitment to creating a digital space that welcomes and serves all users. By adopting inclusive design principles, embracing user diversity, and actively seeking feedback, your app can become a beacon of accessibility in the digital landscape.
      </p>
    </div>
  </main>
  {/* main ends here */}
  <Footer />
  
</div>

  )
}

export default page