// components/HowItWorks.js
export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Sign Up & Connect",
      description:
        "Create your free account in under 60 seconds. Securely connect your bank accounts.",
      tip: "Start with 1-2 accounts to get comfortable",
    },
    {
      step: 2,
      title: "Set Your Budget",
      description:
        "Create personalized budgets based on your income, expenses, and financial goals.",
      tip: "Use our 50/30/20 rule template to start",
    },
    {
      step: 3,
      title: "Track & Optimize",
      description:
        "Monitor your spending, receive alerts, and get personalized recommendations.",
      tip: "Check your dashboard weekly for best results",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple Steps to Financial Freedom
          </h2>
          <p className="text-lg text-gray-600">
            Getting started with BudgetMaster takes just minutes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white text-xl font-bold flex items-center justify-center mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm text-indigo-600 font-medium">
                  <i className="fas fa-lightbulb mr-2"></i> {step.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-16 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-white fade-in-section"
          style={{ animationDelay: "300ms" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to take control of your finances?
            </h3>
            <p className="text-lg">
              Sign up today and start your journey to financial freedom with
              BudgetMaster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
