"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from 'react';
import Footer from '@/components/Footer'

export default function Component() {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      alert('Terms and Conditions accepted!');
    } else {
      alert('Please check the box to accept the Terms and Conditions.');
    }
  };

  return (
    <div className="flex flex-col h-screen dark:text-[#d1d1f7] font-mono">
      <header className="px-4 py-6 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800">
        <ScrollArea className="h-full bg-white p-6 rounded-md shadow dark:bg-gray-900">
       

  <section id="information-collection">
  <h2 className="font-bold text-blue-400">Information Collection</h2>
  <p>
    We collect personal information to enhance and personalize your experience with our services.
  </p>
  <p>
    <strong>Types of Information:</strong> The types of personal information we may collect include
    but are not limited to your name, email address, and other details necessary for providing our
    services.
  </p>
  <p>
    <strong>Usage of Information:</strong> The collected information is used for communication,
    account management, and to improve and customize our services to meet your needs.
  </p>
  <p>
    <strong>Voluntary Submission:</strong> You may choose to provide certain information voluntarily.
    However, not providing certain information may limit your access to specific features or services.
  </p>
  <p>
    <strong>Third-Party Sources:</strong> We may obtain information from third-party sources to
    enhance our understanding of your preferences and improve the relevance of our services.
  </p>
  <p>
    We are committed to protecting the privacy of your information. For detailed information on how we
    collect, use, and protect your data, please refer to our complete Privacy Policy.
  </p>
</section>
<br/>


<section id="information-usage">
  <h2 className="font-bold text-blue-400">Information Usage</h2>
  <p>
    We use the information we collect for various purposes to provide, maintain, and improve our services.
  </p>
  <p>
    <strong>Service Delivery:</strong> Your information is used to deliver the services you request, including
    processing transactions, providing support, and facilitating communication.
  </p>
  <p>
    <strong>Personalization:</strong> We may use your information to personalize your experience, such as tailoring
    content and recommendations based on your preferences and usage patterns.
  </p>
  <p>
    <strong>Communication:</strong> We may use your contact information to communicate with you, including sending
    important updates, newsletters, and promotional materials.
  </p>
  <p>
    <strong>Analytics:</strong> Information collected may be used for analytical purposes to understand user behavior,
    improve our services, and optimize the performance of our platform.
  </p>
  <p>
    <strong>Legal Compliance:</strong> We may process your information to comply with legal obligations and respond
    to legal requests or prevent fraudulent activity.
  </p>
  <p>
    For a comprehensive understanding of how your information is utilized, please review our complete Privacy Policy.
  </p>
</section>
<br/>


<section id="data-security">
  <h2 className="font-bold text-blue-400">Data Security</h2>
  <p>
    We prioritize the security of your data and have implemented measures to safeguard it from unauthorized access,
    disclosure, alteration, and destruction. Here&apos;s an overview of our data security practices:
  </p>
  <p>
    <strong>Encryption:</strong> We use industry-standard encryption protocols to protect data during transmission,
    ensuring secure communication between your device and our servers.
  </p>
  <p>
    <strong>Access Controls:</strong> Access to your data is restricted and limited to authorized personnel who require
    it for the provision of services. We regularly review access permissions to prevent unauthorized use.
  </p>
  <p>
    <strong>Regular Audits:</strong> We conduct regular security audits and assessments to identify and address potential
    vulnerabilities, ensuring the ongoing integrity and confidentiality of your data.
  </p>
  <p>
    <strong>Secure Storage:</strong> Your data is stored in secure environments with robust safeguards. We utilize
    industry-leading storage solutions to maintain the integrity and confidentiality of your information.
  </p>
  <p>
    Despite our best efforts, it&apos;s important to note that no method of transmission or storage on the internet is completely
    foolproof. For a detailed understanding of our data security practices, please refer to our comprehensive Privacy Policy.
  </p>
</section>
<br/>


<section id="cookies">
  <h2 className="font-bold text-blue-400">Cookies</h2>
  <p>
    Our website uses cookies to enhance your browsing experience and provide personalized services. Cookies are small text
    files stored on your device that help us analyze website usage, remember preferences, and improve functionality.
  </p>
  <p>
    <strong>Types of Cookies:</strong> We use both session and persistent cookies. Session cookies are temporary and are
    deleted when you close your browser. Persistent cookies remain on your device for a specified duration or until you
    manually delete them.
  </p>
  <p>
    <strong>Third-Party Cookies:</strong> Some third-party services integrated into our website may use cookies for various
    purposes, including analytics and personalized content. We do not have control over these cookies.
  </p>
  <p>
    <strong>Cookie Management:</strong> You have the option to manage or disable cookies through your browser settings.
    However, note that some features of our website may not function properly without certain cookies.
  </p>
  <p>
    By continuing to use our website, you consent to the use of cookies as described in this policy.
  </p>
</section>
<br/>


<section id="sharing-information">
  <h2 className="font-bold text-blue-400">Sharing Your Information</h2>
  <p>
    At [Your Company Name], we take your privacy seriously. We do not sell, rent, or trade your personal information to
    third parties for marketing or promotional purposes.
  </p>
  <p>
    <strong>Third-Party Service Providers:</strong> We may engage trusted third-party service providers to perform
    functions and provide services, such as hosting, analytics, and customer support. These service providers have access
    to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any
    other purpose.
  </p>
  <p>
    <strong>Legal Compliance:</strong> We may disclose your information if required by law, regulation, or legal
    process. We may also share information in response to a request from law enforcement or other government agencies or
    to prevent fraud or protect our rights.
  </p>
  <p>
    <strong>Business Transactions:</strong> In the event of a merger, acquisition, or sale of all or a portion of our
    assets, user information may be transferred. We will notify you through prominent notice on our website of any such
    change in ownership or control of your personal information.
  </p>
  <p>
    We take measures to ensure that any third parties with whom we share your information adhere to the same level of
    privacy protection as outlined in this Privacy Policy.
  </p>
  <br/>
</section>



<section id="data-theft">
  <h2 className="font-bold text-blue-400">Data Theft Prevention</h2>
  <p>
    Protecting your data is a top priority for us at [Your Company Name]. We employ advanced security measures to
    safeguard your personal information from unauthorized access, disclosure, alteration, and destruction.
  </p>
  <p>
    <strong>Encryption:</strong> We use industry-standard encryption protocols to secure the transmission of data between
    your device and our servers. This ensures that your information remains confidential during transfer.
  </p>
  <p>
    <strong>Access Controls:</strong> Our systems are equipped with strict access controls, limiting access to
    user information only to authorized personnel who require it for legitimate business purposes.
  </p>
  <p>
    <strong>Regular Audits:</strong> We conduct regular security audits and assessments to identify and address potential
    vulnerabilities in our systems. This proactive approach helps us stay ahead of potential threats.
  </p>
  <p>
    <strong>User Education:</strong> We provide training and awareness programs to our employees to ensure they understand
    the importance of data security and follow best practices in handling sensitive information.
  </p>
  <p>
    Despite our best efforts, it&apos;s crucial for users to take steps to secure their accounts, such as using strong,
    unique passwords and being cautious about phishing attempts.
  </p>
  <br/>
</section>


<section id="contribution-license">
  <h2 className="font-bold text-blue-400">Contribution License</h2>
  <p>
    We appreciate and welcome contributions from our users. By submitting any form of contribution, including but not
    limited to code, documentation, or feedback, you agree to the following terms:
  </p>
  <p>
    <strong>1. Ownership:</strong> You assert that you are the original creator of the contribution and have the right to
    submit it.
  </p>
  <p>
    <strong>2. License Grant:</strong> By submitting your contribution, you grant our platform a perpetual, irrevocable,
    worldwide, non-exclusive, royalty-free, sublicensable license to use, reproduce, modify, distribute, and publicly
    display the contribution.
  </p>
  <p>
    <strong>3. Compliance:</strong> Your contribution must comply with our platform&apos;s guidelines and policies.
  </p>
  <p>
    <strong>4. No Compensation:</strong> Contributions are voluntary, and you are not entitled to compensation for your
    submissions.
  </p>
  <p>
    <strong>5. Representation:</strong> You represent that your contribution is original, and you have the right to grant
    the license described in these terms.
  </p>
  <p>
    Users are encouraged to review and understand these terms before submitting any contributions.
  </p>
  <br />
</section>

<section id="user-data-privacy">
  <h2 className="font-bold text-blue-400">User Data Privacy</h2>
  <p>
    We prioritize the privacy and security of user data on our platform. The following outlines our approach to handling
    user information:
  </p>
  <p>
    <strong>1. Information Collection:</strong> We collect only the necessary information required for the proper
    functioning of our platform and services.
  </p>
  <p>
    <strong>2. Data Usage:</strong> User data is used for the purpose for which it was collected, and we do not share,
    sell, or rent user information to third parties without explicit consent.
  </p>
  <p>
    <strong>3. Security Measures:</strong> We implement industry-standard security measures to protect user data from
    unauthorized access, disclosure, alteration, and destruction.
  </p>
  <p>
    <strong>4. User Rights:</strong> Users have the right to access, correct, update, or delete their personal
    information. We provide mechanisms for users to exercise these rights.
  </p>
  <p>
    <strong>5. Consent:</strong> By using our platform, users consent to the collection, processing, and storage of
    their information as outlined in our privacy policy.
  </p>
  <p>
    We recommend that users review our full privacy policy to understand how we handle their data.
  </p>
  <br />
</section>

<section id="data-theft">
  <h2 className="font-bold text-blue-400">Data Theft Prevention</h2>
  <p>
    Protecting your data is a top priority for us at [Your Company Name]. We employ advanced security measures to
    safeguard your personal information from unauthorized access, disclosure, alteration, and destruction.
  </p>
  <p>
    <strong>Encryption:</strong> We use industry-standard encryption protocols to secure the transmission of data between
    your device and our servers. This ensures that your information remains confidential during transfer.
  </p>
  <p>
    <strong>Access Controls:</strong> Our systems are equipped with strict access controls, limiting access to
    user information only to authorized personnel who require it for legitimate business purposes.
  </p>
  <p>
    <strong>Regular Audits:</strong> We conduct regular security audits and assessments to identify and address potential
    vulnerabilities in our systems. This proactive approach helps us stay ahead of potential threats.
  </p>
  <p>
    <strong>User Education:</strong> We provide training and awareness programs to our employees to ensure they understand
    the importance of data security and follow best practices in handling sensitive information.
  </p>
  <p>
    Despite our best efforts, it&apos;s crucial for users to take steps to secure their accounts, such as using strong,
    unique passwords and being cautious about phishing attempts.
  </p>
  <br/>
</section>


<section id="changes-to-privacy-policy">
  <h2 className="font-bold text-blue-400">Changes to Privacy Policy</h2>
  <p>
    We reserve the right to update or modify this Privacy Policy at any time without prior notice. Changes to the
    Privacy Policy will be effective when posted on this page. It&apos;s advisable to review this page periodically for any
    updates.
  </p>
  <p>
    We will notify users about significant changes to the Privacy Policy through the email address associated with their
    accounts or by prominently posting a notice on our website.
  </p>
  <p>
    By continuing to use our services after any changes to this Privacy Policy, you acknowledge and agree to the
    updated terms.
  </p>
  <p>
    If you have any questions or concerns about the changes, please contact us at [your contact email].
  </p>
  <br />
</section>    
</ScrollArea>

      </main>
      <footer className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-900">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="accept"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label className="text-gray-700 dark:text-gray-300" htmlFor="accept">
            I accept the Privacy Policy
          </label>
        </div>
        <button
          className={`bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer`}
          onClick={handleAccept}
          disabled={!isChecked}
        >
          Accept
        </button>
      </footer>
    </div>
    
  );
}
