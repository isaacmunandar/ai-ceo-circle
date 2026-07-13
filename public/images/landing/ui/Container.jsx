import React from "react";

const Container = ({ children, className = "", as: Tag = "div" }) => (
  <Tag className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</Tag>
);

export default Container;
