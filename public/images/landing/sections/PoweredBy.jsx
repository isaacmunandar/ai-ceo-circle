import React from "react";
import Marquee from "@/components/landing/ui/Marquee";
import { POWERED_BY } from "@/components/landing/data";

const PoweredBy = () => (
  <section className="relative z-10 border-y-[0.5px] border-cream-10 bg-[#0a1224]/40 py-5">
    <Marquee items={POWERED_BY} />
  </section>
);

export default PoweredBy;
