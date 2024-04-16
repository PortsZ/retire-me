"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FinancingForm = () => {
  const { register, watch, setValue, getValues, handleSubmit } = useForm({
    defaultValues: {
      amount: "",
      months: "",
      interestRate: "",
      installment: "",
      interestAmount: "",
      total: "",
    },
  });

  //
  //

  const [interestType, setInterestType] = useState("monthly");
  const [calculatingFor, setCalculatingFor] = useState("");
  const [shouldUpdate, setShouldUpdate] = useState(false);
  //
  //
  //
  //
  //
  //
  //
  // ================================================================================

  const calculateFinancing = () => {
    const { amount, months, interestRate } = getValues();
    //
    if (amount && months && interestRate) {
      //

      let interest = interestRate / 100;
      let monthlyInterestRate;

      if (interestType === "yearly") {
        // Calculate the monthly interest rate from the annual rate
        monthlyInterestRate = Math.pow(1 + interest, 1 / 12) - 1;
      } else {
        monthlyInterestRate = interest;
      }
      //
      const installment = calculateInstallment();
      //
      const total = installment * months;
      //
      const interestAmount = total - amount;

      setValue("interestAmount", interestAmount.toFixed(2));
      setValue("total", total.toFixed(2));
      //
    } else if (amount && months && installment) {
      const interestAmount = installment * months - amount;
      const total = installment * months;
      setValue("interestAmount", interestAmount.toFixed(2));
      setValue("total", total.toFixed(2));
    }
  };
  //
  //
  //
  //
  //
  //
  //
  // ================================================================================

  const calculateInstallment = () => {
    setValue("installment", "");
    const { amount, months, interestRate } = getValues();
    //
    if (amount && months && interestRate) {
      //

      let monthlyInterestRate;
      let interest = interestRate / 100;

      if (interestType === "yearly") {
        // Calculate the monthly interest rate from the annual rate
        monthlyInterestRate = Math.pow(1 + interest, 1 / 12) - 1;
      } else {
        monthlyInterestRate = interest;
      }
      //
      const installment =
        amount *
        (monthlyInterestRate /
          (1 - Math.pow(1 + monthlyInterestRate, -months)));
      //
      setValue("installment", installment.toFixed(2));
      //
      return installment;
    }
  };
  //
  //
  //
  //
  //
  //
  //calculate the compound monthly interest rate
  // using an approximation model: the iterative search method
  // ================================================================================
  const calculateInterestRate = () => {
    setValue("interestRate", "");
    const { amount, months, installment } = getValues();
    console.log("CALCULATING INTEREST RATE");

    if (amount && months && installment) {
      let minRate = 0; // Minimum interest rate (e.g., 0%)
      let maxRate = 1; // Maximum interest rate (e.g., 100%)
      let monthlyInterestRate;
      let diff;
      const tolerance = 0.01; // Convergence tolerance
      const maxIterations = 1000; // Max number of iterations for finer control

      for (let i = 0; i < maxIterations; i++) {
        //
        monthlyInterestRate = (minRate + maxRate) / 2;
        //
        const installmentCalculated =
          amount *
          (monthlyInterestRate /
            (1 - Math.pow(1 + monthlyInterestRate, -months)));
        //
        diff = Math.abs(installmentCalculated - installment);
        //
        if (diff < tolerance) {
          //
          //

          //
          let interest;
          if (interestType === "yearly") {
            // Calculate the monthly interest rate from the annual rate
            interest = Math.pow(1 + monthlyInterestRate, 12) - 1;
          } else {
            interest = monthlyInterestRate;
          }
          setValue("interestRate", (interest * 100).toFixed(2));
          //

          return interest;
          //
        } else if (installmentCalculated > installment) {
          maxRate = monthlyInterestRate;
        } else {
          minRate = monthlyInterestRate;
        }
      }
    }
  };
  //
  //
  //
  //
  //
  //
  //
  // ================================================================================
  const calculateMonths = () => {
    setValue("months", "");

    const { amount, interestRate, installment } = getValues();
    if (amount && interestRate && installment) {
      console.log("calculating months");
      let monthlyInterestRate;
      let interest = interestRate / 100;

      if (interestType === "yearly") {
        // Calculate the monthly interest rate from the annual rate
        monthlyInterestRate = Math.pow(1 + interest, 1 / 12) - 1;
      } else {
        monthlyInterestRate = interest;
      }

      if (monthlyInterestRate !== 0) {
        const n =
          Math.log(installment / (installment - monthlyInterestRate * amount)) /
          Math.log(1 + monthlyInterestRate);

        // Set the calculated months, rounding up to the nearest whole number
        setValue("months", Math.ceil(n));
      } else if (monthlyInterestRate === 0) {
        // Handle the special case where interest rate is 0
        const n = amount / installment;
        setValue("months", Math.ceil(n));
      }
    }
  };

  //
  //
  //
  //
  //
  //
  //
  // ================================================================================

  //
  //
  //
  //
  //
  //
  //
  // ================================================================================

  const onSubmit = () => {
    calculateFinancing();
  };

  const onBlurCalculate = () => {
    console.log("calculating for", calculatingFor);
    if (calculatingFor === "installment") {
      calculateInstallment();
    }
    if (calculatingFor === "interestRate") {
      calculateInterestRate();
    }
    if (calculatingFor === "months") {
      calculateMonths();
    }
    if (calculatingFor === "amount") {
      // calculateAmount();
    }
  };

  //
  //
  //
  //
  //
  //
  //
  // ================================================================================
  useEffect(() => {
    const { amount, interestRate, months, installment } = getValues();
    if (
      (amount && interestRate && months) ||
      calculatingFor === "installment"
    ) {
      setCalculatingFor("installment");
      // calculateInstallment();
    }
  }, [watch("amount"), watch("months"), watch("interestRate")]);
  //
  //
  //
  //
  useEffect(() => {
    const { amount, installment, months, interestRate } = getValues();
    if (
      (amount && installment && months) ||
      calculatingFor === "interestRate"
    ) {
      setCalculatingFor("interestRate");
      // calculateInterestRate();
    }
  }, [watch("amount"), watch("months"), watch("installment"), calculatingFor]);
  //
  //
  //
  useEffect(() => {
    const { amount, interestRate, installment, months } = getValues();
    if (
      (amount && interestRate && installment) ||
      calculatingFor === "months"
    ) {
      if (!months) {
        setCalculatingFor("months");
        // calculateMonths();
      }
    }
  }, [watch("amount"), watch("installment"), watch("interestRate")]);
  //
  //
  //
  useEffect(() => {
    const { amount, interestRate, installment, months } = getValues();
    if (
      (months && interestRate && installment) ||
      calculatingFor === "amount"
    ) {
      setCalculatingFor("amount");
      // calculateAmount();
    }
  }, [watch("interestRate"), watch("installment"), watch("months")]);

  useEffect(() => {
    if (shouldUpdate) {
      calculateInterestRate();
      setShouldUpdate(false);
    }
  }, [interestType, shouldUpdate]);
  //
  //
  //
  //
  //
  //
  //
  // ================================================================================

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-4 text-white"
    >
      <div>
        <label className="text-slate-900">Montante Financiado</label>
        <input
          step="0.01"
          type="number"
          onFocus={onBlurCalculate}
          {...register("amount")}
          placeholder="Loan Amount"
          className="rounded bg-slate-900 px-4 py-2 w-full"
        />
      </div>
      <div>
        <label className="text-slate-900">Numero de Meses</label>
        <input
          type="number"
          onFocus={onBlurCalculate}
          {...register("months")}
          placeholder="Number of Months"
          className="rounded bg-slate-900 px-4 py-2 w-full"
        />
      </div>
      <div className="flex gap-1 ">
        <div className="flex  flex-col gap-1 ">
          <label className="text-slate-900">Tipo de juros</label>
          <div className=" flex text-slate-100 bg-slate-900 rounded p-1">
            <button
              type="button"
              className={`rounded-md px-3 py-1 ${
                interestType === "monthly" ? "bg-blue-500" : ""
              }`}
              onClick={() => {
                setInterestType("monthly");
                // calculateInterestRate();

                setShouldUpdate(true);
              }}
            >
              Mensal
            </button>
            <button
              type="button"
              className={`rounded-md  px-3 py-1 ${
                interestType === "yearly" ? "bg-blue-500" : ""
              }`}
              onClick={() => {
                setInterestType("yearly");
                // calculateInterestRate();

                setShouldUpdate(true);
              }}
            >
              Anual
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-1 ">
          <label className="text-slate-900">Juros (%)</label>
          <input
            className="rounded w-full bg-slate-900 px-4 py-2"
            type="number"
            step="0.01"
            onFocus={onBlurCalculate}
            {...register("interestRate")}
            placeholder="Interest"
            // readOnly={noInterestRate()}
          />
        </div>
      </div>
      <div>
        <label className="text-slate-900">Parcelas Mensais</label>
        <input
          step="0.01"
          type="number"
          onFocus={onBlurCalculate}
          {...register("installment")}
          placeholder="Monthly Installment"
          className="rounded bg-slate-900 px-4 py-2 w-full"
          // readOnly={noInstallment()}
        />
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="text-black font-medium from-fuchsia-500 to-rose-400 bg-gradient-to-tr px-4 py-2 rounded"
        >
          Calcular
        </button>
      </div>
      <div className="flex gap-6 w-full col-span-2 text-xl">
        <div>
          <label className="text-slate-900">Montante Pago em Juros</label>
          <input
            step="0.01"
            type="number"
            {...register("interestAmount")}
            className="rounded bg-slate-900 px-4 py-2 w-full text-red-500"
            readOnly
          />
        </div>
        <div>
          <label className="text-slate-900">Montante Total Futuro Pago</label>
          <input
            step="0.01"
            type="number"
            {...register("total")}
            className="rounded bg-slate-900 px-4 py-2 w-full text-fuchsia-500"
            readOnly
          />
        </div>
      </div>
    </form>
  );
};

export default FinancingForm;
