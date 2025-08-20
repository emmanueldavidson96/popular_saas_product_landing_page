import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png";
import Image from "next/image"
import MenuIcon from "@/assets/menu.svg";

export const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex gap-4 justify-center items-center py-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <Image 
            className="h-4 w-4 inline-flex justify-center items-center invert"
            width={40}
            height={40}
            alt="Arrow Right"
            src={ArrowRight}
          />
        </div>
      </div>
      <div className="!py-5 px-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image 
              src={Logo}
              alt="SaaS Logo"
              height={40}
              width={40}
            />
            <Image 
              src={MenuIcon}
              className="h-5 w-5 md:hidden"
              alt="Menu Icon"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center ">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button 
                className="bg-black text-white px-4 py-2 rounded-lg font-medium align-items inline-flex justify-center tracking-tight"
              >Get for free</button>
            </nav>
            
          </div>
        </div>
      </div>
    </header>
  );
};
