import React from "react";
import Header from "./Header";
import Brand from "./Branding";
import Audience from "./Audience";
import Design from "./Design";
import Testimonial from "./Testimonial";
import Images from "./Images";
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Brand />
      <Audience />
      <Design />
      <Testimonial />
      <Images />
      <Footer />
    </div>
  );
}
