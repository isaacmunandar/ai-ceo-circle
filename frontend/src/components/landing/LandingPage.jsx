import React from "react";
import Navbar from "@/components/landing/sections/Navbar";
import Hero from "@/components/landing/sections/Hero";
import BuiltOnConvictions from "@/components/landing/sections/BuiltOnConvictions";
import PoweredBy from "@/components/landing/sections/PoweredBy";
import Ecosystem from "@/components/landing/sections/Ecosystem";
import Problem from "@/components/landing/sections/Problem";
import Program from "@/components/landing/sections/Program";
import Timeline from "@/components/landing/sections/Timeline";
import Testimonials from "@/components/landing/sections/Testimonials";
import Qualification from "@/components/landing/sections/Qualification";
import Mentor from "@/components/landing/sections/Mentor";
import Aftermath from "@/components/landing/sections/Aftermath";
import Faq from "@/components/landing/sections/Faq";
import FinalCta from "@/components/landing/sections/FinalCta";
import Footer from "@/components/landing/sections/Footer";

const LandingPage = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <PoweredBy />
      <BuiltOnConvictions />
      <Ecosystem />
      <Problem />
      <Program />
      <Timeline />
      <Testimonials />
      <Qualification />
      <Mentor />
      <Aftermath />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
};

export default LandingPage;
