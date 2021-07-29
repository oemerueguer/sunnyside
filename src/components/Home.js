import React from "react";
import Header from "./Header";
import Brand from "./Branding";
import Audience from "./Audience";
import Design from "./Design";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Brand />
      <Audience />
      <Design />
      <Testimonial />
    </div>
  );
}
