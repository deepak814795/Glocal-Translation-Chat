import Image, { StaticImageData } from "next/image";
import { Tabs } from "@/components/ui/tabs";
import sol1 from '../images/customchatimage/sol1.png'
import sol2 from '../images/customchatimage/sol2.png'
import sol3 from '../images/customchatimage/sol3.png'
import sol4 from '../images/customchatimage/sol4.png'
import sol5 from '../images/customchatimage/sol5.png'
import sol6 from '../images/customchatimage/sol6.png'


interface Tab {
  title: string;
  value: string;
  content?: React.ReactNode;
  imageUrl: any;
}

interface DummyContentProps {
  imageUrl: string;
}

function TabsDemo() {
  const tabs: Tab[] = [
    {
      title: "Translation",
      value: "Translation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
        </div>
      ),
      imageUrl: sol1,
    },
    {
      title: "Web Chat",
      value: "Web Chat",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
        </div>
      ),
      imageUrl: sol2,
    },
    {
        title: "Security",
        value: "Security",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Services tab</p>
          </div>
        ),
        imageUrl: sol3,
      },
      {
        title: "Collaboration",
        value: "Collaboration",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Services tab</p>
          </div>
        ),
        imageUrl: sol4,
      },
      {
        title: "Payments",
        value: "Payments",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Services tab</p>
          </div>
        ),
        imageUrl: sol6,
      },
    // ... other tabs with their respective content and imageUrl
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
    <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent: React.FC<DummyContentProps> = ({ imageUrl }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    <p>Tab Content</p>
    <Image
      src={sol1.src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto sm:h-[100%]"
    />
  </div>
  );
};

export default TabsDemo;
