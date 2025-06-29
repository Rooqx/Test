export default function Testimonials() {
  const testimonials = [
    {
      name: "Ashiru Farooq",
      role: "FullStack Developer",
      content:
        "BudgetMaster helped me pay off $15,000 in credit card debt in just 18 months. The spending insights revealed areas I didn't realize I was overspending in.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Thompson",
      role: "Small Business Owner",
      content:
        "As a small business owner, separating personal and business expenses was a nightmare. BudgetMaster's tagging system made it effortless.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jessica Ramirez",
      role: "Freelance Designer",
      content:
        "I used to live paycheck to paycheck. With BudgetMaster, I've built a 3-month emergency fund and started investing.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Join 50,000+ users who have transformed their financial lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <i className="fas fa-trophy text-4xl text-yellow-500"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              #1 Rated Budget App in 2024
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Recognized by FinTech Awards for innovation and user experience.
            </p>
            {/* Trust badges would go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
