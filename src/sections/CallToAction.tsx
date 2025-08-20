import ArrowRight from "@/assets/arrow-right.svg"
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">
            Sign Up For Free Today
          </h2>
          <p className="section-description mt-5 ">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
          <Image 
            src={starImage}
            alt=""
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image 
            src={springImage}
            alt=""
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get For Free</button>
          <button className="btn btn-text gap-1">
            Learn More
            <Image 
              className="h-5 w-5"
              src={ArrowRight}
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};


