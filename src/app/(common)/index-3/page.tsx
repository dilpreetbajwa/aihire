"use client";
import App from "@/components/home-1/App";
import Service from "@/components/home-1/Service";
import Testimonial from "@/components/home-1/Testimonial";
import About from "@/components/home-3/About";
import Banner from "@/components/home-3/Banner";
import Category from "@/components/home-3/Category";
import Freelancer from "@/components/home-3/Freelancer";
import HowItWork from "@/components/home-3/HowItWork";
import Perform from "@/components/home-3/Perform";
import TaskCategory from "@/components/home-3/TaskCategory";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <TaskCategory />
      <About />
      <Service />
      <Perform />
      <Category />
      <HowItWork />
      <App />
      <Freelancer />
      <Testimonial />
    </>
  );
};

export default page;
