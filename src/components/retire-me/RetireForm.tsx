"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Stats from "@/components/retire-me/Stats";

export default function RetireForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [isGoalMet, setIsGoalMet] = useState(false);
  const [endCapital, setEndCapital] = useState(0);
  const [monthlyDividend, setMonthlyDividend] = useState(0);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  //
  //
  //
  //
  //
  //
  //
  // ====================================================================================================
  const [interestType, setInterestType] = useState("monthly");

  const age = watch("age") ? parseInt(watch("age")) : 0;
  const retirementAge = watch("retirementAge")
    ? parseInt(watch("retirementAge"))
    : 0;
  const startingCapital = watch("startingCapital")
    ? parseFloat(watch("startingCapital"))
    : 0;
  const monthlyIncomeGoal = watch("monthlyIncomeGoal")
    ? parseFloat(watch("monthlyIncomeGoal"))
    : 0;
  const interestRate = watch("interest")
    ? parseFloat(watch("interest")) / 100
    : 0; // Convert percentage to decimal
  const monthlyContribution = watch("monthlyContribution");

  const formData = {
    age,
    retirementAge,
    startingCapital,
    monthlyIncomeGoal,
    interestRate: interestType === "yearly" ? interestRate : Math.pow(1+interestRate, 12)-1,
    monthlyContribution,
  };
  //
  //
  //
  //
  //
  //
  //
  //
  // ====================================================================================================

  const getMonthlyDividend = () => {
    let monthlyInterestRate;

    if (interestType === "yearly") {
      // Calculate the monthly interest rate from the annual rate
      monthlyInterestRate = Math.pow(1 + interestRate, 1 / 12) - 1;
    } else {
      monthlyInterestRate = interestRate;
    }
    const monthlyDividends = endCapital * monthlyInterestRate;
    setMonthlyDividend(endCapital * monthlyInterestRate);

    return monthlyDividends;
  };
  //
  //
  //
  //
  //
  //
  //
  // ====================================================================================================

  const getEndCapital = (altRetirementAge = null) => {
    // Use the alternative retirement age if provided, otherwise use the retirement age from the form
    const effectiveRetirementAge =
      altRetirementAge !== null ? altRetirementAge : retirementAge;

    let monthlyInterestRate;

    if (interestType === "yearly") {
      // Calculate the monthly interest rate from the annual rate
      monthlyInterestRate = Math.pow(1 + interestRate, 1 / 12) - 1;
    } else {
      monthlyInterestRate = interestRate;
    }

    // Calculate the number of compounding periods (months until retirement)
    const totalMonths = (effectiveRetirementAge - age) * 12;

    // Calculate the future value of the starting capital
    const futureValueOfCapital =
      startingCapital * Math.pow(1 + monthlyInterestRate, totalMonths);

    // Calculate the future value of the monthly contributions
    const futureValueOfContributions =
      monthlyContribution *
      ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) /
        monthlyInterestRate);

    // Calculate the total future value
    const totalFutureValue = futureValueOfCapital + futureValueOfContributions;

    return totalFutureValue;

  };

  //
  //
  //
  //
  //
  //
  //
  // ====================================================================================================

  const recommendContribution = () => {
    let monthlyInterestRate;

    if (interestType === "yearly") {
      // Calculate the monthly interest rate from the annual rate
      monthlyInterestRate = Math.pow(1 + interestRate, 1 / 12) - 1;
    } else {
      monthlyInterestRate = interestRate;
    }
    // Calculate the number of compounding periods (months until retirement)
    const totalMonths = (retirementAge - age) * 12;

    // Calculate the future value of the starting capital
    const futureValueOfCapital =
      startingCapital * Math.pow(1 + monthlyInterestRate, totalMonths);

    // Calculate the future capital needed to generate the desired monthly income
    const futureCapitalNeeded = monthlyIncomeGoal / (monthlyInterestRate || 1); // Avoid division by zero

    // if (futureCapitalNeeded <= futureValueOfCapital) {
    //   setIsGoalMet(true);
    //   return;
    // }

    // Calculate the necessary monthly contribution to reach the future capital
    const numerator =
      (futureCapitalNeeded - futureValueOfCapital) * monthlyInterestRate;
    const denominator = Math.pow(1 + monthlyInterestRate, totalMonths) - 1;
    const monthlyContribution = numerator / (denominator || 1); // Avoid division by zero

    console.log("monthlyContribution", monthlyContribution);

    // Set the value of the 'monthlyContribution' field
    setValue(
      "monthlyContribution",
      monthlyContribution > 0 ? monthlyContribution.toFixed(2) : "0.00"
    );
  };

  //
  //
  //
  //
  //
  //
  //
  // ====================================================================================================

  const onSubmit = async (data) => {
    Promise.resolve(setEndCapital(getEndCapital())).then(() => {
      setShouldUpdate(true);
    });
  };

  useEffect(() => {
    if (shouldUpdate) {
      getMonthlyDividend();
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  useEffect(() => {
    if (age && retirementAge) {
      if (retirementAge <= age) {
        setError("retirementAge", {
          type: "manual",
          message: "Retirement age must be greater than current age",
        });
      } else {
        clearErrors("retirementAge");
      }
    }
  }, [age, retirementAge, setError, clearErrors]);

  return (
    <div className="w-full gap-3 flex-col lg:flex-row flex text-white ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-1/2 w-full flex justify-center gap-6 "
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full ">
            <div className="flex w-1/2 flex-col gap-1 p-1">
              <label className="text-slate-900">Age</label>
              <input
                type="number"
                step="1"
                className="rounded bg-slate-900 px-4 py-2"
                {...register("age")}
                placeholder="Your Age"
              />
            </div>
            <div className="flex w-1/2 flex-col gap-1 p-1">
              <label className="text-slate-900">Retirement Age Goal</label>
              <input
                type="number"
                step="1"
                className="rounded bg-slate-900 px-4 py-2"
                {...register("retirementAge", {
                  required: "Retirement age is required",
                  validate: (value) =>
                    value > age ||
                    "Retirement age must be greater than current age",
                })}
                placeholder="Retirement Age"
              />
              {errors.retirementAge && (
                <p className="text-red-500">{errors.retirementAge.message}</p>
              )}
            </div>
          </div>
          <div className="flex ">
            <div className="flex  flex-col gap-1 p-1">
              <label className="text-slate-900">Interest Type</label>
              <div className=" flex text-slate-100 bg-slate-900 rounded p-1">
                <button
                  type="button"
                  className={`rounded-md px-3 py-1 ${
                    interestType === "monthly" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => setInterestType("monthly")}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className={`rounded-md  px-3 py-1 ${
                    interestType === "yearly" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => setInterestType("yearly")}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col gap-1 p-1">
              <label className="text-slate-900">Interest %</label>
              <input
                className="rounded w-full bg-slate-900 px-4 py-2"
                type="number"
                step="0.01"
                {...register("interest")}
                placeholder="Interest"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1">
            <label className="text-slate-900">Starting Capital</label>
            <input
              className="rounded bg-slate-900 px-4 py-2"
              {...register("startingCapital")}
              placeholder="Starting Capital"
            />
          </div>
          <div className="flex w-full gap-2 p-1 items-end">
            <div className="flex w-full flex-col">
              <label className="text-slate-900">Monthly Income Goal</label>
              <input
                className="rounded w-full bg-slate-900 px-4 py-2"
                {...register("monthlyIncomeGoal")}
                placeholder="Monthly Income Goal"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="text-slate-900">Recommended Contribution</label>
              <button
                type="button"
                onClick={recommendContribution}
                className="text-black rounded bg-gradient-to-tr from-fuchsia-500 to-rose-400 px-4 py-2"
              >
                Get Recommendation
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1">
            <label className="text-slate-900">Monthly Contribution</label>
            <input
              className="rounded bg-slate-900 px-4 py-2"
              {...register("monthlyContribution")}
              placeholder="Monthly Contribution"
            />
          </div>

          {/* Add other inputs and controls */}
          {/* <button
            className="text-black rounded bg-gradient-to-tr from-fuchsia-500 to-rose-400 px-4 py-2"
            type="submit"
          >
            Submit
          </button> */}
        </div>
      </form>
      <div className="md:w-1/2 w-full ">
        {/* Placeholder for charts */}
        <div className="flex w-full items-center justify-center">
          <Stats formData={formData} />
        </div>
        {/* <div>Chart 1</div> */}
      </div>
    </div>
  );
}
