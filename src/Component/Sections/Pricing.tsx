// components/Pricing.js
export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 0,
      period: "forever",
      description: "Perfect for getting started with budgeting",
      features: [
        "Unlimited expense tracking",
        "3 budget categories",
        "Basic reports",
        "Bank account sync",
        "Savings goals",
      ],
      included: [true, true, true, false, false],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: 5,
      period: "month",
      description: "Everything you need for complete financial control",
      features: [
        "Unlimited everything",
        "Unlimited budget categories",
        "Advanced reports & analytics",
        "Bank & credit card sync",
        "Savings goals with projections",
      ],
      included: [true, true, true, true, true],
      cta: "Try Free for 30 Days",
      popular: true,
    },
    {
      name: "Business",
      price: 12,
      period: "month",
      description: "For business owners and freelancers",
      features: [
        "All Pro features",
        "Unlimited collaborators",
        "Invoice management",
        "Tax preparation tools",
        "Dedicated account manager",
      ],
      included: [true, true, true, true, true],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 shadow-2xl border-2 transition-transform duration-300 hover:-translate-y-2 hover:shadow-indigo-200 fade-in-section ${
                plan.popular
                  ? "bg-gradient-to-br from-indigo-600 to-blue-500 text-white border-indigo-600"
                  : "bg-white border-gray-100"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-xl font-bold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span className="bg-white text-indigo-700 px-3 py-1 rounded-full text-xs font-bold shadow">
                    Most Popular
                  </span>
                )}
              </div>
              <div className="mb-6">
                <span className="text-3xl font-extrabold">${plan.price}</span>
                <span className="text-lg font-medium ml-1">/{plan.period}</span>
              </div>
              <p
                className={`mb-6 ${
                  plan.popular ? "text-indigo-100" : "text-gray-700"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      plan.included[i]
                        ? plan.popular
                          ? "text-white"
                          : "text-gray-900"
                        : "text-gray-300 line-through"
                    }`}
                  >
                    <i
                      className={`fas fa-${
                        plan.included[i] ? "check-circle" : "times-circle"
                      } ${
                        plan.included[i] ? "text-green-400" : "text-red-200"
                      }`}
                    ></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-2xl font-bold transition duration-300 shadow-lg ${
                  plan.popular
                    ? "bg-white text-indigo-700 hover:bg-indigo-100"
                    : "bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-blue-700 hover:to-indigo-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
