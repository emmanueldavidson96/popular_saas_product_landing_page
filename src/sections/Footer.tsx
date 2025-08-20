import logoImage from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg"
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";


export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center overflow-x-clip">
      <div className="container">
        <div className="inline-flex realtive before:content-[''] before:blur ">
          <Image
            src={logoImage}
            alt="SaaS Logo"
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Image src={SocialX} alt="" className="w-5 h-5  "/>
          <Image src={SocialInsta} alt="" className="w-5 h-5  "/>
          <Image src={SocialLinkedIn} alt="" className="w-5 h-5  "/>
          <Image src={SocialPin} alt="" className="w-5 h-5  "/>
          <Image src={SocialYoutube} alt="" className="w-5 h-5  "/>
        </div>
        <p className="mt-6 ">&copy; 2025 OsemLabs, All rights reserved.</p>
      </div>

    </footer>
  );
};


