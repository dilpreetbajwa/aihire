"use client";
import App from "@/components/home-1/App";
import Banner from "@/components/home-1/Banner";
import Categories from "@/components/home-1/Categories";
import CompanyLogo from "@/components/home-1/CompanyLogo";
import Freelancer from "@/components/home-1/Freelancer";
import GetStarted from "@/components/home-1/GetStarted";
import HowItWork from "@/components/home-1/HowItWork";
import Perform from "@/components/home-1/Perform";
import Service from "@/components/home-1/Service";
import Testimonial from "@/components/home-1/Testimonial";
import WhyChoose from "@/components/home-1/WhyChoose";
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

      {/* <!-- Company Logo Here --> */}
      <CompanyLogo />
      {/* <!-- Company Logo End --> */}

      {/* <!-- Choose Here --> */}
      <WhyChoose />
      {/* <!-- Choose End --> */}

      {/* <!-- Categoris section Here --> */}
      <Categories />
      {/* <!-- Categoris section End --> */}

      {/* <!-- Service section Here --> */}
      <Service />
      {/* <!-- Service section End --> */}

      {/* <!-- Perfoming section Here --> */}
      <Perform />
      {/* <!-- Perfoming section End --> */}

      {/* <!-- Freelancing section Here --> */}
      <Freelancer />
      {/* <!-- Freelancing section End --> */}

      {/* <!-- App Here --> */}
      <App />
      {/* <!-- App End --> */}

      {/* <!-- Get Started Section Here --> */}
      <GetStarted />
      {/* <!-- Get Started Section End --> */}

      {/* <!-- timelywork section Here --> */}
      <HowItWork />
      {/* <!-- timelywork section End --> */}

      {/* <!-- testimonial two Here --> */}
      <Testimonial />
      {/* <!-- testimonial two End --> */}

      {/* <!--Footer Section--> */}
      <Footer />
    </main>
  );
}
