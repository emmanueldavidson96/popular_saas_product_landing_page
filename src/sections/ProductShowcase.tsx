"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto ">
          <div className="flex justify-center">
            <div className="tag">
              Boost your Productivity
            </div>
          </div>
          <h2 className="section-title mt-5">
            A More Effective way to Track Progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive, SaaS Website in just minutes with this template.
          </p>
        </div>
        <div className="relative ">
          <motion.img 
            src={productImage.src}
            alt="Product Image"
            className="mt-10 "
          />
          <motion.img 
            src={pyramidImage.src}
            alt=""
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{
              translateY:translateY
            }}
          />
          <motion.img 
            src={tubeImage.src}
            alt="Tube Image"
            className="absolute bottom-24 -left-36 hidden md:block"
            style={{
              translateY:translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
