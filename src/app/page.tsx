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
import Footer from "@/components/shared/Footer";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <main>
      
      <Banner />
      {/* <!-- Hero Section End --> */}

      {/* <!-- TaskCategory  Here --> */}
      {/* <TaskCategory /> */}
      {/* <!-- TaskCategory  End --> */}

      {/* <!-- About Here --> */}
      <About />
      {/* <!-- About End --> */}

      {/* <!-- Service section Here --> */}
      <Service />
      {/* <!-- Service section End --> */}

      {/* <!-- Perfoming section Here --> */}
      <Perform />
      {/* <!-- Perfoming section End --> */}

      {/* <!-- Freelancing section Here --> */}
      <Category />
      {/* <!-- Freelancing section End --> */}
      <HowItWork />
      {/* <!-- App Here --> */}
      <App />
      {/* <!-- App End --> */}

      {/* <!-- Get Started Section Here --> */}
      <Freelancer />
      {/* <!-- Get Started Section End --> */}

      {/* <!-- testimonial two Here --> */}
      <Testimonial />
      {/* <!-- testimonial two End --> */}

      {/* <!--Footer Section--> */}
      <Footer />
    </main>
  );
}
