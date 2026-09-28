import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function NavBar() {
 

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0d0f12] border-b border-gray-800">

      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="FitLog logo" width={28} height={28} />
        <span className="text-white font-bold text-lg tracking-wide">
          FITLOG
        </span>
      </Link>

      <div className="flex gap-8">
        <Link href="/exercise" className="">
          Workouts
        </Link>
        <Link href="/my-plan" className="">
          My Plan
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/my-plan"
          className="flex items-center gap-2 bg-[#1a1d21] px-3 py-1 rounded-full text-sm text-gray-300"
        >
          Plan

          <span className="bg-lime-400 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {0}
          </span>
        </Link>

        <Link
          href="/my-plan"
          className="flex items-center gap-2 bg-[#1a1d21] px-3 py-1 rounded-full text-sm text-gray-300"
        >
          Saved

          <span className="border border-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {0}
          </span>
        </Link>
      </div>
    </nav>
  );
}