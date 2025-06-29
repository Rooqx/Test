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

  return (
    <section className="py-16 bg-white">
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
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button className="w-full flex justify-between items-center p-6 text-left">
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <i className="fas fa-chevron-down text-indigo-600"></i>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
