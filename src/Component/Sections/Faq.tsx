"use client";
import { useState } from "react";

// components/FAQ.js
export default function FAQ() {
  const faqs = [
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely. We use bank-grade 256-bit encryption to protect your data. BudgetMaster is read-only and never stores your banking credentials.",
    },
    {
      question: "Can I use BudgetMaster with multiple currencies?",
      answer:
        "Yes, BudgetMaster fully supports multi-currency accounts. You can track accounts in different currencies.",
    },
    {
      question: "What if I need help setting up my budget?",
      answer:
        "We offer free onboarding sessions for all Pro and Business users. Our financial experts will help you set up your budget.",
    },
    {
      question: "Can I share my budget with family members?",
      answer:
        "Yes, our Pro and Business plans include family sharing features so you can collaborate on budgets.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about BudgetMaster
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <i
                  className={`fas fa-chevron-down text-indigo-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS (e.g., globals.css):
// .fade-in-section {
//   opacity: 0;
//   transform: translateY(30px);
//   animation: fadeInUp 0.7s forwards;
// }
// @keyframes fadeInUp {
//   to {
//     opacity: 1;
//     transform: none;
//   }
// }
