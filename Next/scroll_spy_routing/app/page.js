"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

const sectionsData = [
  { id: 1, title: "Section 1", content: "This is some random text for section 1." },
  { id: 2, title: "Section 2", content: "Section 2 has more text and maybe an image placeholder." },
  { id: 3, title: "Section 3", content: "Section 3 with grid layout below." },
  { id: 4, title: "Section 4", content: "Some paragraph for section 4 with boxes below." },
  { id: 5, title: "Section 5", content: "Section 5 text content and colorful divs." },
  { id: 6, title: "Section 6", content: "Section 6 with some cards in a flex layout." },
  { id: 7, title: "Section 7", content: "Section 7 paragraph and placeholder elements." },
  { id: 8, title: "Section 8", content: "Section 8 has grids and boxes." },
  { id: 9, title: "Section 9", content: "Section 9 text content." },
  { id: 10, title: "Section 10", content: "Section 10 final section with some items." },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(1);

  const Section = ({ id, title, content, children }) => {
    const { ref, inView } = useInView({
      threshold: 0.8, // Section considered active when 50% visible
    });

    if (inView && activeSection !== id) setActiveSection(id);

    return (
      <div ref={ref} className="min-h-screen py-16 border-b border-gray-300 px-8">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="mb-4">{content}</p>
        {children}
      </div>
    );
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed top-0 left-0 bg-gray-100 p-4 overflow-auto">
        <ul className="space-y-2">
          {sectionsData.map((sec) => (
            <li
              key={sec.id}
              className={`cursor-pointer ${
                activeSection === sec.id ? "font-bold text-blue-600" : ""
              }`}
              onClick={() =>
                document
                  .getElementById(`section-${sec.id}`)
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              {sec.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="ml-64 w-full">
        <Section id={1} title="Section 1" content="This is some random text for section 1.">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="h-24 bg-red-300"></div>
            <div className="h-24 bg-green-300"></div>
          </div>
        </Section>

        <Section id={2} title="Section 2" content="Section 2 has more text and maybe an image placeholder.">
          <div className="flex space-x-4 mt-4">
            <div className="w-32 h-32 bg-blue-300"></div>
            <div className="w-32 h-32 bg-yellow-300"></div>
          </div>
        </Section>

        <Section id={3} title="Section 3" content="Section 3 with grid layout below.">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="h-24 bg-purple-300"></div>
            <div className="h-24 bg-pink-300"></div>
            <div className="h-24 bg-orange-300"></div>
          </div>
        </Section>

        <Section id={4} title="Section 4" content="Some paragraph for section 4 with boxes below.">
          <div className="flex flex-wrap gap-4 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-32 h-32 bg-green-200"></div>
            ))}
          </div>
        </Section>

        <Section id={5} title="Section 5" content="Section 5 text content and colorful divs.">
          <div className="flex space-x-4 mt-4">
            <div className="w-40 h-24 bg-red-400"></div>
            <div className="w-40 h-24 bg-blue-400"></div>
          </div>
        </Section>

        <Section id={6} title="Section 6" content="Section 6 with some cards in a flex layout.">
          <div className="flex flex-wrap gap-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-64 h-32 p-4 bg-gray-200 rounded shadow">
                Card {i + 1}
              </div>
            ))}
          </div>
        </Section>

        <Section id={7} title="Section 7" content="Section 7 paragraph and placeholder elements.">
          <div className="grid grid-cols-4 gap-4 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-indigo-300"></div>
            ))}
          </div>
        </Section>

        <Section id={8} title="Section 8" content="Section 8 has grids and boxes.">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="h-32 bg-yellow-300"></div>
            <div className="h-32 bg-pink-300"></div>
          </div>
        </Section>

        <Section id={9} title="Section 9" content="Section 9 text content.">
          <div className="flex mt-4 gap-4">
            <div className="w-32 h-32 bg-teal-300"></div>
            <div className="w-32 h-32 bg-orange-300"></div>
          </div>
        </Section>

        <Section id={10} title="Section 10" content="Section 10 final section with some items.">
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="h-24 bg-red-200"></div>
            <div className="h-24 bg-green-200"></div>
            <div className="h-24 bg-blue-200"></div>
          </div>
        </Section>
      </div>
    </div>
  );
}
