"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What age groups do your programs cater to?",
    answer:
      "Our programs are designed for students from kindergarten through middle school. Our Elementary Math program caters to grades K-2, our Middle-School Math program is for grades 3-8, and our Abacus Math program is suitable for students aged 5-14.",
  },
  {
    question: "How often do classes meet?",
    answer:
      "Most of our programs meet twice a week for one-hour sessions. However, we offer flexible scheduling options to accommodate busy family schedules, including once-a-week intensive sessions and weekend options.",
  },
  {
    question: "What is the student-to-teacher ratio in your classes?",
    answer:
      "We maintain a low student-to-teacher ratio of no more than 6:1 for our regular classes, ensuring personalized attention for each student. For students requiring more focused instruction, we also offer one-on-one tutoring options.",
  },
  {
    question: "How do you assess student progress?",
    answer:
      "We conduct regular assessments every 8 weeks to track student progress. Parents receive detailed progress reports highlighting achievements, areas for improvement, and personalized learning recommendations.",
  },
  {
    question: "Do you offer a trial class before enrollment?",
    answer:
      "Yes! We offer a free assessment and trial class for all new students. This allows us to understand your child's current level and learning style, while also giving your child the opportunity to experience our teaching approach.",
  },
  {
    question: "How does the Abacus Math program benefit students?",
    answer:
      "Abacus Math develops mental calculation abilities, improves concentration and focus, enhances memory, and builds number sense. These skills transfer to other academic areas, supporting overall cognitive development.",
  },
  {
    question: "Can students join mid-semester?",
    answer:
      "Yes, students can join our programs at any time. We'll conduct an initial assessment to place them in the appropriate level and provide catch-up support if needed to ensure a smooth transition.",
  },
  {
    question: "Do you assign homework?",
    answer:
      "Yes, we provide regular homework assignments to reinforce concepts learned in class. These assignments typically take 15-30 minutes to complete and are designed to be engaging rather than burdensome.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white font-source">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2  className=" -mt-10 text-3xl md:text-4xl font-bold mb-4 text-[#22abe0]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our programs, teaching
            methods, and enrollment process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="ml-2 text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have a question that's not answered here?
          </p>
          <span
            onClick={() => scrollToSection("contact-us")}
            className="inline-flex items-center text-primary font-medium hover:underline cursor-pointer"
          >
            Contact us for more information
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
