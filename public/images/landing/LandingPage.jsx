"use client";
import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/landing/sections/Navbar";
import Hero from "@/components/landing/sections/Hero";
import BuiltOnConvictions from "@/components/landing/sections/BuiltOnConvictions";
import PoweredBy from "@/components/landing/sections/PoweredBy";
import Ecosystem from "@/components/landing/sections/Ecosystem";
import Problem from "@/components/landing/sections/Problem";
import Program from "@/components/landing/sections/Program";
import Timeline from "@/components/landing/sections/Timeline";
import Testimonials from "@/components/landing/sections/Testimonials";
import SocialMedia from "@/components/landing/sections/SocialMedia";
import Qualification from "@/components/landing/sections/Qualification";
import Mentor from "@/components/landing/sections/Mentor";
import Aftermath from "@/components/landing/sections/Aftermath";
import Faq from "@/components/landing/sections/Faq";
import VideoSection from "@/components/landing/sections/VideoSection";
import FinalCta from "@/components/landing/sections/FinalCta";
import Footer from "@/components/landing/sections/Footer";
const LandingPage = () => {
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative min-h-screen">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[-2]"
          style={{
            background: [
              "radial-gradient(ellipse 70% 50% at 100% 18%, rgba(255,95,38,0.22), transparent 65%)",
              "radial-gradient(ellipse 55% 40% at -10% 55%, rgba(255,80,25,0.16), transparent 60%)",
              "radial-gradient(ellipse 75% 50% at 85% 92%, rgba(255,70,20,0.15), transparent 65%)",
              "linear-gradient(180deg, #070e1c 0%, #060b18 50%, #050911 100%)",
            ].join(", "),
          }}
        />
        <Navbar />
        <Hero />
        <PoweredBy />
        <BuiltOnConvictions />
        <Ecosystem />
        <Problem />
        <Program />
        {/* <Timeline /> */}
        <Testimonials />
        <SocialMedia />
        <Qualification />
        {/* <Mentor /> */}
        <Aftermath />
        <Faq />
        <VideoSection />
        <FinalCta />
        <Footer />
      </main>
    </LazyMotion>
  );
};

export default LandingPage;
