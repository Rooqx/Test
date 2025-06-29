"use client";
import { JSX } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LineChartVisual from "@/Component/LineChartVisual";
import Footer from "@/Component/Footer";
import Image from "next/image";
import RoundedBarVisual from "@/Component/RoundedBarVisual";
import { useAuth } from "../AuthContext";
/*
interface frequency {
  daily: boolean;
  weekly: boolean;
  monthly: boolean;
  yearly: boolean;
}*/

interface UserData {
  total: number;
  expenses: number;
  savings: number;
  name: string;
  email: string;
}

export default function Dashboard(): JSX.Element {
  const router = useRouter();
  const { isLoggedIn, user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expensesFrequency, setExpensesFrequency] = useState({
    daily: true,
    weekly: false,
    monthly: false,
    yearly: false,
  });

  useEffect(() => {
    if (!isLoggedIn || !user) {
      setLoading(false);
      setError("You must be logged in to view the dashboard.");
      router.push("/Login");
      return;
    }
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/users/getuser", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });
        console.log(response);
        if (!response.ok) {
          const data = await response.json();
          setError(data.error || "Failed to fetch user data.");
          setLoading(false);
          return;
        }
        const data = await response.json();
        await setUserData(data.user);
        console.log(data);
      } catch {
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [isLoggedIn, user, router]);

  const handleExpensesFrequency = (/*type: string*/) => {
    setExpensesFrequency({ ...expensesFrequency, daily: true });
    /*  if (type === "daily") {
      setExpensesFrequency({ ...expensesFrequency, daily: true });
    }
    if (type === "wee") {
      setExpensesFrequency({ ...expensesFrequency, daily: true });
    }  if (type === "daily") {
      setExpensesFrequency({ ...expensesFrequency, daily: true });
    }  if (type === "daily") {
      setExpensesFrequency({ ...expensesFrequency, daily: true });
    }*/
  };
  console.log(userData);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <main className="w-full px-2 py-5">
        <div>
          <div className="flex w-full gap-10 text-sm text-gray-700">
            <p className="w-full -mr-[55px] font-bold text-center">
              Dashboard Overview
            </p>
            {/** Icons Here (Refresh, Search, notifications) */}
            <button>
              {" "}
              <Image src="/bell.svg" width={15} height={15} alt="bell" />
            </button>
          </div>
          {/** Main container */}
          <div className="flex flex-wrap items-center justify-center w-full">
            {/**Main Section */}
            <div className="flex flex-wrap items-center justify-center w-full gap-2 px-2 py-3">
              {/**Total income */}
              <div className="bg-blue-600 w-[170px] lg:h-[120px] sm:w-[160px] md:w-[230px] lg:w-[300px] grid-rows-1 flex-shrink-0 py-5 px-3 md:h-[120px] h-[90px] text-white rounded-2xl">
                <div className="flex justify-between">
                  <p className="text-sm font-normal">Total Income</p>
                  <Image
                    src="/icons8-income-50.png"
                    width={25}
                    height={15}
                    alt="bell"
                  />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-lg font-bold">${userData?.total}</p>
                  <p className="text-sm font-normal">11.00%</p>
                </div>
              </div>
              {/**Expense */}
              <div className=" w-[170px] lg:h-[120px] sm:w-[160px] md:w-[200px] lg:w-[300px] grid-rows-1 flex-shrink-0 py-5 px-3 md:h-[120px] h-[90px] text-white rounded-2xl bg-black">
                <div className="flex justify-between">
                  <p className="text-sm font-normal">Expense</p>
                  <Image
                    src="/icons8-decrease-24.png"
                    width={24}
                    height={10}
                    alt="bell"
                  />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-lg font-bold">${userData?.expenses}</p>
                  <p className="text-sm font-normal">1.00%</p>
                </div>
              </div>
              <div className="bg-blue-600 w-[200px] lg:h-[120px] sm:w-[160px] md:w-[230px] lg:w-[300px] grid-rows-1 flex-shrink-0 py-5 px-3 md:h-[120px] h-[90px] text-white rounded-2xl">
                <div className="flex justify-between">
                  <p className="text-sm font-normal">Saved</p>s
                  <Image
                    src="/icons8-increase-24.png"
                    width={24}
                    height={15}
                    alt="bell"
                  />
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-lg font-bold">${userData?.savings}</p>
                  <p className="text-sm font-normal">20.00%</p>
                </div>
              </div>
              <button className="bg-black cursor-pointer w-[100px] lg:h-[120px] sm:w-[160px] md:w-[98.5%] lg:w-[300px] grid-rows-1 flex-shrink-0 py-5 px-3 md:h-[120px] h-[90px] text-white rounded-2xl hover:bg-slate-900 active:scale-125 md:active:scale-105 transition-all duration-100">
                <div className="flex flex-col justify-center w-full items-center">
                  <p className="w-full -mt-4 text-5xl text-center">+</p>
                  <p className="w-full text-sm font-extrabold text-center">
                    Add Money
                  </p>
                </div>
              </button>
              {/** Expenses Chart */}
              <div className="flex flex-col w-full bg-white h-[250px] rounded-2xl shadow-md mt-2 overflow-hidden">
                <div>
                  <div className="flex justify-start gap-5 px-5 py-5 text-sm font-semibold text-gray-500 md:text-md lg:text-md">
                    <p
                      className={
                        expensesFrequency.daily
                          ? "text-black cursor-pointer"
                          : "text-gray-500 cursor-pointer"
                      }
                      onClick={() => handleExpensesFrequency}
                    >
                      Daily
                    </p>
                    <p
                      className={
                        expensesFrequency.weekly
                          ? "text-black cursor-pointer"
                          : "text-gray-500 cursor-pointer"
                      }
                      onClick={() => handleExpensesFrequency}
                    >
                      Weekly
                    </p>
                    <p
                      className={
                        expensesFrequency.monthly
                          ? "text-black cursor-pointer"
                          : "text-gray-500 cursor-pointer"
                      }
                      onClick={() => handleExpensesFrequency}
                    >
                      Monthly
                    </p>
                    <p
                      className={
                        expensesFrequency.yearly
                          ? "text-black cursor-pointer"
                          : "text-gray-500 cursor-pointer"
                      }
                      onClick={() => handleExpensesFrequency}
                    >
                      Yearly
                    </p>
                  </div>
                  <div className="w-full">
                    <LineChartVisual />
                  </div>
                </div>
              </div>
              {/**Savings Chart */}
              <div className="flex flex-col w-full bg-white h-[250px] rounded-2xl shadow-md mt-2">
                <div>
                  <div className="px-5 py-5">
                    <p>Saved</p>
                  </div>
                  <div className="w-full">
                    <RoundedBarVisual />
                  </div>
                </div>
              </div>
              {/**Transactions */}
              <div className="flex flex-col w-full bg-white h-[250px] rounded-2xl shadow-md mt-2 mb-[50px]">
                <div>
                  <div className="flex justify-between px-5 py-5">
                    <p>Transactions</p>
                    <button className="text-gray-500">See all</button>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-2 px-5 py-1 overflow-auto">
                      <li className="flex justify-between p-2 text-sm bg-slate-300 rounded-2xl">
                        <p>Food</p> <p className="font-bold">$5000</p>
                      </li>
                      <li className="flex justify-between p-2 text-sm rounded-2xl bg-slate-300">
                        <p>Charity</p> <p className="font-bold">$1000</p>
                      </li>
                      <li className="flex justify-between p-2 text-sm bg-slate-300 rounded-2xl">
                        <p>Games</p> <p className="font-bold">$880</p>
                      </li>
                      <li className="flex justify-between p-2 text-sm bg-slate-300 rounded-2xl">
                        <p>Food</p> <p className="font-bold">$900</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
