"use client";

import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio/Portfolio";
import { testTurso } from "@/services/api/user/test-turso";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const { status, data } = useSession();

  const fetchData = async () => {
    const response = await axios.get("/api/test");
    
    console.log("data: "+ response.data);
  };

  useEffect(() => {

   

    fetchData();
  }, [status]);

  return (
    <main className="flex flex-col items-center justify-start p-24 gap-10 ">
      {status === "authenticated" && (
        <section className="flex min-w-[50%] xl:p-16 md:p-10 p-8 bg-slate-900 rounded-xl">
          <Portfolio />
        </section>
      )}
      <section>
        <Features sessionData={data}/>
      </section>
    </main>
  );
}
