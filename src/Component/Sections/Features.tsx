// components/Features.js
export default function Features() {
  const features = [
    {
      icon: "fas fa-money-bill-wave",
      title: "Expense Tracking",
      description:
        "Effortlessly log and categorize every expense. Get real-time insights into where your money is going.",
      points: [
        "Automatic transaction categorization",
        "Receipt scanning technology",
        "Multi-currency support",
      ],
    },
    {
      icon: "fas fa-chart-line",
      title: "Budget Planning",
      description:
        "Create customized budgets that work for your lifestyle. Set realistic spending limits.",
      points: [
        "Customizable budget categories",
        "Rollover budgeting capabilities",
        "Family budget sharing",
      ],
    },
    {
      icon: "fas fa-chart-pie",
      title: "Smart Reports",
      description:
        "Transform your financial data into actionable insights with beautiful reports.",
      points: [
        "Customizable report templates",
        "Historical trend analysis",
        "Export to PDF/Excel",
      ],
    },
  ];

  return (
    <section id="features" className="py-16 bg-white fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Financial Control
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to take control of your finances
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
