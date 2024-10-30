'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AppointmentSection = () => {
  // Define the parent animation with staggerChildren for the form
  const formAnimation = {
    hidden: {
      opacity: 0,
      y: -500,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // Adding staggerChildren to apply delay between each child
        staggerChildren: 0.2,
      },
    },
  };

  // Define individual child animations for each input
  const inputAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen w-screen p-10 flex flex-col lg:flex-row justify-evenly items-center gap-10">
      <div className=" hidden md:flex justify-center items-center">
        <motion.div className="overflow-hidden" initial={{x:-500,opacity:0}} whileInView={{x:0,opacity:1}}>
        <Image
          src="/appointment-image.png"
          width={500}
          height={500}
          alt="appointment image"
          className="h-full w-auto object-cover border-[1px] border-black rounded-3xl"
        />
        </motion.div>
      </div>
      <div>
        <h1 className="text-neutral-950 text-4xl font-medium mb-7">Book an Appointment</h1>
        <motion.form
          variants={formAnimation}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center items-center w-full max-w-lg"
        >
          <div className="grid grid-cols-2 row-auto items-start w-full text-neutral-900 gap-3 gap-y-6">
            <motion.input
              id="firstName"
              placeholder="First Name"
              type="text"
              aria-label="First Name"
              className="border-[1px] border-neutral-900 px-6 py-4 rounded-2xl"
              variants={inputAnimation}
            />
            <motion.input
              id="lastName"
              placeholder="Last Name"
              type="text"
              aria-label="Last Name"
              className="border-[1px] border-neutral-900 px-6 py-4 rounded-2xl"
              variants={inputAnimation}
            />
            <motion.input
              id="email"
              placeholder="E-mail"
              type="email"
              aria-label="Email"
              className="col-span-2 border-[1px] border-neutral-900 px-6 py-4 rounded-2xl"
              variants={inputAnimation}
            />
            <motion.input
              id="phoneNumber"
              placeholder="Phone Number"
              type="tel"
              aria-label="Phone Number"
              className="border-[1px] border-neutral-900 px-6 py-4 rounded-2xl"
              variants={inputAnimation}
            />
            <motion.input
              id="age"
              placeholder="Age"
              type="number"
              aria-label="Age"
              className="border-[1px] border-neutral-900 px-6 py-4 rounded-2xl"
              variants={inputAnimation}
            />
            <motion.textarea
              id="message"
              placeholder="Message (optional)"
              aria-label="Message (optional)"
              className="border-[1px] border-neutral-900 col-span-2 h-40 px-6 py-4 rounded-2xl resize-none"
              style={{ textAlign: "left", verticalAlign: "top" }}
              variants={inputAnimation}
            />
            <motion.button
              type="submit"
              className="col-span-2 mt-6 bg-neutral-900 text-white px-6 py-4 rounded-2xl hover:bg-neutral-800 transition duration-200"
              variants={inputAnimation}
            >
              Book Appointment
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default AppointmentSection;
