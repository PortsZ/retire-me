import React from "react";
import FinancingForm from '@/components/financing/FinancingForm'

const page = () => {


  return (
    <div className="flex h-full flex-col items-center justify-start px-16 py-16">
      <section
        className="flex flex-col flex-1 bg-gradient-to-tr from-lime-400 to-green-500 w-full h-full
      text-black p-16 justify-start items-start rounded-lg gap-6"
      >
        <div className="w-full">
          <h1 className="text-2xl font-bold">Financing calculator</h1>
        </div>
        <div>
            <FinancingForm/>
        </div>
      </section>
    </div>
  );
};

export default page;
