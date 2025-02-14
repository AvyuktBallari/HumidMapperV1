"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is HumidMapper and how does it work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        HumidMapper is an advanced humidity mapping tool that provides real-time humidity data across different locations. It uses sensor data and weather integrations to generate detailed humidity maps, helping users make informed decisions about air quality and environmental conditions.
      </div>
    ),
  },
  {
    question: "Who can benefit from using HumidMapper?",
    answer: (
      <p>
        HumidMapper is useful for a variety of users, including meteorologists, farmers, HVAC professionals, researchers, and anyone concerned about humidity levels affecting their environment. It provides accurate insights to optimize comfort, agriculture, and industrial processes.
      </p>
    ),
  },
  {
    question: "How accurate is the humidity data on HumidMapper?",
    answer: (
      <p>
        HumidMapper leverages high-precision sensors and integrates with trusted meteorological sources to ensure highly accurate humidity readings. Our real-time updates and predictive models provide reliable data for any location.
      </p>
    ),
  },
  {
    question: "Can I use HumidMapper for commercial applications?",
    answer: (
      <p>
        Yes! HumidMapper offers commercial solutions for businesses in industries such as agriculture, construction, and HVAC management. Our API and data insights can be integrated into your existing systems to enhance decision-making.
      </p>
    ),
  },
  {
    question: "Does HumidMapper have a mobile app?",
    answer: (
      <p>
        Currently, HumidMapper is available as a web-based platform, but we are actively developing a mobile app for on-the-go humidity tracking. Stay tuned for updates!
      </p>
    ),
  },
  {
    question: "How does HumidMapper ensure my data privacy?",
    answer: (
      <p>
        We take data privacy seriously. HumidMapper does not store personal data or share any information with third parties. All collected data is anonymized and used solely to improve accuracy and user experience.
      </p>
    ),
  },

];


const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef<HTMLDivElement>(null); // Explicitly typed ref
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="font-inter">
      <button
        className="relative flex gap-2 items-center w-full py-5 text-gray-400 font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-gray-400" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen ? "rotate-180" : ""}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen ? "rotate-180 hidden" : ""}`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion.current?.scrollHeight || 0, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-gray-400">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="font-cute" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-gray-400 mb-4">FAQ</p>
          <p className="sm:text-4xl font-cute text-[#cdd3d1] text-3xl font-extrabold text-base-content">
            Common Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;