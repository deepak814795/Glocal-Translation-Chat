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
    <div className=" font-mono flex flex-col h-screen dark:text-[#d1d1f7]">
      <header className="px-4 py-6 bg-gray-900 text-white dark:text-[#d1d1f7]">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800">
        <ScrollArea className="h-full bg-white p-6 rounded-md shadow dark:bg-gray-900">
        <section id="our-services">
  <h2 className="font-bold text-blue-400">Our Services-</h2> <br/>
  <p>
    Welcome to our diverse range of services designed to cater to your unique requirements. At our
    company, we take pride in delivering high-quality solutions that span various industries and
    domains. Whether you are looking for cutting-edge technology implementations, strategic
    consulting, or tailored support, our services are crafted to elevate your business to new
    heights.
  </p>
  <p>
    Our team of experts is dedicated to understanding your challenges and goals, providing
    innovative solutions that align with your vision. From software development and data analytics
    to cloud services and digital marketing, we offer a comprehensive suite of services to drive
    success for your business.
  </p>
  <p>
    As a client-focused organization, we prioritize customer satisfaction and strive to exceed
    expectations. We believe in fostering long-term partnerships, and our commitment to excellence
    ensures that you receive reliable, scalable, and future-ready solutions.
  </p>
  <p>
    Explore the full spectrum of our services, and let us be your trusted partner on the journey
    towards growth and innovation. Your success is our success!
  </p>
</section>

<br/>

<section id="intellectual-property-rights ">
  <h2 className="font-bold text-blue-400">Intellectual Property Rights-</h2> <br/>
  <p>
    Our company values intellectual property rights and is committed to respecting and protecting
    the intellectual property of others. This includes but is not limited to trademarks, patents,
    copyrights, trade secrets, and other proprietary information.
  </p>
  <p>
    Users are expected to adhere to relevant intellectual property laws and regulations. Unauthorized
    use, reproduction, or distribution of protected materials is strictly prohibited. We encourage
    collaboration and innovation while respecting the rights of creators and content owners.
  </p>
  <p>
    If you believe that your intellectual property rights have been violated, please contact us
    promptly so that we can address and resolve any concerns.
  </p>
</section>
<br/>

<section id="user-representations">
  <h2 className="font-bold text-blue-400">User Representations-</h2> <br/>
  <p>
    Users of our services are expected to adhere to certain representations to ensure a positive and
    lawful experience for everyone. By accessing and using our services, users represent and warrant
    that:
  </p>
  <ul>
    <li>They are of legal age to use our services in their jurisdiction.</li>
    <li>They will provide accurate and truthful information during registration and use.</li>
    <li>They will not engage in any activities that violate laws or regulations.</li>
    <li>They will respect the rights of other users and our company.</li>
  </ul>
  <br />
</section>

<section id="purchase-and-payments">
  <h2 className="font-bold text-blue-400">Purchase and Payments-</h2> <br/>
  <p>
    Our services may include features that allow users to make purchases or payments. By engaging in
    such transactions, users agree to the following terms:
  </p>
  <ul>
    <li>All payments must be made using valid and authorized payment methods.</li>
    <li>Users are responsible for any fees or charges associated with their transactions.</li>
    <li>Refunds or cancellations may be subject to our company&apos; policies.</li>
    <li>We reserve the right to modify prices or payment terms at our discretion.</li>
  </ul>
  <br />
</section>

<section id="cancellations">
  <h2 className="font-bold text-blue-400">Cancellations-</h2> <br/>
  <p>
    We understand that situations may arise where you need to cancel a service or product. Our cancellation policies
    are designed to provide clarity and fairness to both our users and our business. Please take a moment to review the
    following information regarding cancellations:
  </p>
  <p>
    <strong>Cancellation Process:</strong> Users who wish to cancel a service or product must follow our designated
    cancellation process. This may include filling out a cancellation form, contacting customer support, or following
    specific steps outlined in their account.
  </p>
  <p>
    <strong>Cancellation Period:</strong> The timeframe within which a cancellation request must be submitted may vary
    based on the nature of the service or product. Users are encouraged to familiarize themselves with the specific
    cancellation period associated with their transaction.
  </p>
  <p>
    <strong>Refunds:</strong> Refunds, if applicable, will be processed in accordance with our company&apos; policies. It&apos;
    important to note that certain products or services may have restrictions on refunds, and users should carefully
    review these conditions.
  </p>
  <p>
    <strong>Communication:</strong> Users are advised to communicate with our customer support team for any assistance
    related to cancellations. Our team is here to help and provide guidance through the process.
  </p>
  <br />
</section>


<section id="prohibited-activities">
  <h2 className="font-bold text-blue-400">Prohibited Activities-</h2> <br/>
  <p>
    We take the integrity and safety of our platform seriously. Users are expected to adhere to a set of guidelines to
    ensure a positive and secure experience for everyone. The following activities are strictly prohibited on our
    platform:
  </p>
  <p>
    <strong>1. Unlawful Conduct:</strong> Users must not engage in any illegal activities or conduct that violates local,
    national, or international laws.
  </p>
  <p>
    <strong>2. Fraudulent Behavior:</strong> Fraudulent activities, including but not limited to identity theft, payment
    fraud, or misrepresentation, are strictly prohibited.
  </p>
  <p>
    <strong>3. Harassment and Abuse:</strong> Harassment, bullying, or any form of abusive behavior towards other users
    or our staff will not be tolerated.
  </p>
  <p>
    <strong>4. Unauthorized Access:</strong> Attempts to access accounts, systems, or data without authorization are
    strictly prohibited.
  </p>
  <p>
    <strong>5. Malicious Software:</strong> Users must not upload or distribute any malicious software or engage in
    activities that could harm our platform or other users.
  </p>
  <p>
    <strong>6. Violation of Intellectual Property:</strong> Infringement upon intellectual property rights, including
    copyright and trademarks, is not allowed.
  </p>
  <p>
    Users found engaging in prohibited activities may face immediate account suspension or other actions as deemed
    necessary by our platform.
  </p>
  <br />
</section>

<section id="contribution-license">
  <h2 className="font-bold text-blue-400">Contribution License-</h2> <br/>
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
    <strong>3. Compliance:</strong> Your contribution must comply with our platform&apos; guidelines and policies.
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
  <h2 className="font-bold text-blue-400">User Data Privacy-</h2> <br/>
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

<section id="governing-laws">
  <h2 className="font-bold text-blue-400">Governing Laws-</h2> <br/>
  <p>
    The terms and conditions outlined herein are governed by and construed in accordance with the laws of [Your
    Jurisdiction]. Any disputes arising from these terms and conditions will be subject to the exclusive jurisdiction of
    the courts in [Your Jurisdiction].
  </p>
  <p>
    Users agree to submit to the personal jurisdiction of the courts located within [Your Jurisdiction] for the purpose
    of resolving any legal matters arising from or related to these terms and conditions.
  </p>
  <br />
</section>

<section id="dispute-resolution">
  <h2 className="font-bold text-blue-400">Dispute Resolution-</h2> <br/>
  <p>
    In the event of any dispute or claim arising out of or in connection with these terms and conditions, users agree to
    attempt to resolve the matter through negotiation and good faith discussions.
  </p>
  <p>
    If the dispute cannot be resolved through negotiation, users agree to submit the matter to mediation in accordance
    with the mediation rules of [Your Jurisdiction].
  </p>
  <p>
    Should mediation fail to resolve the dispute, users agree that the matter will be submitted to binding arbitration
    in accordance with the arbitration rules of [Your Jurisdiction]. The decision of the arbitrator(s) will be final and
    binding.
  </p>
  <p>
    This dispute resolution process is the sole and exclusive means for resolving any disputes arising out of or related
    to these terms and conditions.
  </p>
  <br />
</section>

<section id="disclaimer">
  <h2 className="font-bold text-blue-400">Disclaimer-</h2> <br/>
  <p>
    The information contained in our terms and conditions is for general information purposes only. The information is
    provided by [Your Company] and while we endeavor to keep the information up to date and correct, we make no
    representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability,
    suitability, or availability with respect to the terms and conditions or the information, products, services, or
    related graphics contained on the platform for any purpose.
  </p>
  <p>
    Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for
    any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage
    whatsoever arising from loss of data or profits arising out of, or in connection with, the use of our platform.
  </p>
  <p>
    Through our platform, you can link to other websites that are not under the control of [Your Company]. We have no
    control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily
    imply a recommendation or endorse the views expressed within them.
  </p>
  <p>
    Every effort is made to keep the platform up and running smoothly. However, [Your Company] takes no responsibility
    for, and will not be liable for, the platform being temporarily unavailable due to technical issues beyond our
    control.
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
            I accept the Terms and Conditions
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
