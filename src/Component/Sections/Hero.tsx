import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-16 md:py-24 fade-in-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className="md:w-1/2 mb- md:mb-0 fade-in-section"
            style={{ animationDelay: "0ms" }}
          >
            <div className="flex flex-col justify-center item">
              <p className="ml-4 text-gray-600 w-full text-center text-sm">
                Join{" "}
                <span className="font-semibold text-gray-900">50,000+</span>{" "}
                users saving more every month
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-center w-[100%]">
                Master Your Money with Smart Budgeting Effortlessly.
              </h1>
              <p className="text-md md:text-lg text-gray-600 mb-8 max-w-lg">
                BudgetMaster helps you track every dollar, set realistic
                spending goals, and grow your savings without the stress.
                Whether you are managing personal expenses or running a small
                business, our intuitive tools give you full control over your
                finances in just a few clicks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/SignUp"
                className="bg-blue-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-4xl text-center transition duration-300 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/SignUp"
                className="bg-white active:scale-105 hover:bg-gray-100 text-gray-900 font-medium py-3 px-8 rounded-4xl text-center transition duration-300 border border-gray-600 shadow-sm"
              >
                Try BudgetMaster Free for 30 Days{" "}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2 w-full"></div>
            </div>
          </div>
          <div
            className=" w-[400px] md:w-[500px] flex justify-center ml-5 fade-in-section"
            style={{ animationDelay: "100ms" }}
          >
            <Image src="/mockup.png" alt="dashboard" width={300} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
