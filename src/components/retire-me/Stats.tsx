import React from "react";

const StatsCard = ({ title, endCapital, monthlyDividend, isMain }) => {
  const cardStyle = isMain
    ? "bg-gradient-to-tr from-green-500 to-lime-500 text-black shadow-lg"
    : "bg-gradient-to-tr from-slate-900 to-slate-800 text-white shadow";

  return (
    <div className={`${cardStyle} rounded-lg p-4 m-2`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-lg">End Capital: {endCapital.toLocaleString()}</p>
      <p className="text-lg">Monthly Dividend: {monthlyDividend.toLocaleString()}</p>
    </div>
  );
};

const Stats = ({ formData }) => {
  const {
    age,
    retirementAge,
    startingCapital,
    interestRate,
    monthlyContribution,
  } = formData;

  // Start with the user's chosen retirement age
  let retirementAges = [retirementAge];

  // Add additional investment periods, adjusting to avoid duplication with the chosen retirement age
  [5, 10, 20, 40].forEach(period => {
    const newRetirementAge = age + period;
    if (newRetirementAge !== retirementAge && newRetirementAge <= 65) {
      retirementAges.push(newRetirementAge);
    } else if (newRetirementAge + 5 <= 65) {
      // Adjust by adding 5 years if it coincides with the chosen retirement age
      retirementAges.push(newRetirementAge + 5);
    }
  });

  // Ensure the array length is always 5
  while (retirementAges.length < 5) {
    let lastAge = retirementAges[retirementAges.length - 1];
    if (lastAge + 5 <= 65) {
      retirementAges.push(lastAge + 5);
    } else {
      break; // Stop if adding 5 years exceeds 65
    }
  }

  // Remove duplicates and re-sort the ages
  retirementAges = Array.from(new Set(retirementAges)).sort((a, b) => a - b);

  // Function to calculate end capital for a given retirement age
  const getEndCapital = (altRetirementAge) => {
    const effectiveRetirementAge = altRetirementAge !== null ? altRetirementAge : retirementAge;
    const monthlyInterestRate = Math.pow(1 + interestRate, 1 / 12) - 1;
    const totalMonths = (effectiveRetirementAge - age) * 12;
    const futureValueOfCapital = startingCapital * Math.pow(1 + monthlyInterestRate, totalMonths);
    const futureValueOfContributions = monthlyContribution * ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate);
    return futureValueOfCapital + futureValueOfContributions;
  };

  // Function to calculate monthly dividend for a given end capital
  const getMonthlyDividend = (endCapital) => {
    const monthlyInterestRate = Math.pow(1 + interestRate, 1 / 12) - 1;
    return endCapital * monthlyInterestRate;
  };

  // Calculate end capital and monthly dividends for each retirement age
  const stats = retirementAges.map((retAge) => {
    const endCapital = getEndCapital(retAge);
    const monthlyDividend = getMonthlyDividend(endCapital);
    return {
      title: `Age ${retAge}`,
      endCapital,
      monthlyDividend,
      isMain: retAge === retirementAge
    };
  });

  // Render the StatsCard components

  if (!monthlyContribution) {
    return (
      <div className="text-center text-slate-900">Please fill the form</div>
    );
  }
  return (
    <div className="grid grid-cols-2 justify-center items-center flex-wrap">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          endCapital={stat.endCapital}
          monthlyDividend={stat.monthlyDividend}
          isMain={stat.isMain}
        />
      ))}
    </div>
  );
};

export default Stats;



