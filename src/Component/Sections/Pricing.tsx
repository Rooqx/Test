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
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 ${
                plan.popular
                  ? "border-indigo-600 relative transform lg:-translate-y-4"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span
                    className={`text-3xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`ml-2 ${
                      plan.popular ? "text-indigo-200" : "text-gray-500"
                    }`}
                  >
                    / {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-2 ${
                    plan.popular ? "text-indigo-200" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {plan.included[i] ? (
                      <i
                        className={`fas fa-check-circle ${
                          plan.popular ? "text-white" : "text-green-500"
                        } mr-3`}
                      ></i>
                    ) : (
                      <i className="fas fa-times-circle text-gray-400 mr-3"></i>
                    )}
                    <span
                      className={
                        plan.popular
                          ? "text-white"
                          : plan.included[i]
                          ? "text-gray-600"
                          : "text-gray-400"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full text-center font-medium py-3 px-4 rounded-lg transition duration-300 ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-gray-100 font-bold"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            <i className="fas fa-lock mr-2"></i> All plans include bank-level
            security and 256-bit encryption
          </p>
        </div>
      </div>
    </section>
  );
}
