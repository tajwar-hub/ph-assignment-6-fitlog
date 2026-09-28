import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black mt-3 p-5">
      <div className="mx-auto flex max-w-350 items-center justify-between sm:px-6">

        <div className="flex items-center gap-1.5">
          <Image src={logo} alt="FitLog" width={15} height={5}/>
          <p>FITLOG</p>
        </div>

        <p className="text-right text-gray-600 sm:text-[10px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;