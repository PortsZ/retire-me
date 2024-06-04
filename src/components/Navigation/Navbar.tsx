"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

const topVariant = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: 45, translateY: 2 },
};

const middleVariant = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottomVariant = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: -45, translateY: -2 },
};

const menuVariants = {
  open: {
    height: "auto",
    padding: 10,
    transition: { duration: 0.25 }
  },
  closed: {
    height: 0,
    transition: { duration: 0.25 }
  },
};


const itemVariants = {
  open: {
    opacity: 1,
    marginTop: 10,
    transition: { duration: 0.3, delay: 0.25 }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.1 }
  }
};


const Navbar = () => {
  const { status, data } = useSession<any>();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="w-full flex">
      <div className="hidden md:flex w-full flex-row justify-between items-center bg-gray-800 p-4 px-16">
        <div className="flex items-end gap-10">
          <a
            href="/"
            className="leading-tight text-lime-300 font-light font-logo italic text-2xl"
          >
            Retire_Me
          </a>
          <p className="italic">{data ? `Hello, user` : ""}</p>
        </div>
        <a href={status=== 'authenticated' ? "/auth/sign-out" : '/auth/sign-in'} className="text-zinc-100 italic">
          {status === "authenticated" ? "Log Out" : "Sign In"}
        </a>
      </div>

      <div className="md:hidden w-full flex flex-col justify-between items-center bg-gray-800 p-4 px-6">
        <div className="flex justify-between items-center w-full">
          <a
            href="/"
            className="leading-tight text-lime-300 font-light font-logo italic text-2xl"
          >
            Me_Aposenta
          </a>

          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1 cursor-pointer"
          >
            <motion.div
              className="h-1 w-10 bg-white rounded"
              variants={topVariant}
              animate={menuOpen ? "open" : "closed"}
            />
            <motion.div
              className="h-1 w-10 bg-white rounded"
              variants={middleVariant}
              animate={menuOpen ? "open" : "closed"}
            />
            <motion.div
              className="h-1 w-10 bg-white rounded"
              variants={bottomVariant}
              animate={menuOpen ? "open" : "closed"}
            />
          </div>
        </div>

        <motion.div
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          variants={menuVariants}
          className="w-full flex flex-col items-end gap-2"
        >
          <motion.p
            variants={itemVariants}
            className="italic text-zinc-100"
          >
            {data ? `Hello, ${data.user?.username}` : ""}
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="/auth/sign-in"
            className="text-zinc-100 italic"
          >
            {status === "authenticated" ? "Log Out" : "Sign In"}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
