import React from "react";

const LavaFlowBackdrop = ({ className = "" }) => {
  const base = `pointer-events-none absolute inset-0 overflow-hidden ${className}`;

  return (
    <div aria-hidden className={base}>
      <div
        className="absolute -top-32 right-[-15%] h-[820px] w-[820px] rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, rgba(201,146,10,0.45), rgba(138,102,8,0.28) 35%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute -bottom-32 -left-32 h-[760px] w-[760px] rounded-full"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(31,49,96,0.6), rgba(13,23,41,0.38) 40%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute top-1/3 right-1/3 h-[520px] w-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(214,58,10,0.35), rgba(255,93,42,0.15) 40%, transparent 75%)",
          filter: "blur(70px)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#070e1c]" />
    </div>
  );
};

export default LavaFlowBackdrop;
