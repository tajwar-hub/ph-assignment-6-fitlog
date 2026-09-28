import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const NavBar = () => {
    return (
        <nav className="mt-4 bg-black px-4 py-3 sm:mt-6 sm:px-6">
            <div className="mx-auto flex max-w-350 items-center justify-between">
                <Link href="/" className="flex items-center gap-1.5">
                    <Image src={logo} alt="FitLog" width={22} height={22} priority className="h-4.5 w-4.5 object-contain sm:h-5 sm:w-5" />

                    <span className="text-[11px] font-bold tracking-tight text-white sm:text-xs">
                        FITLOG
                    </span>
                </Link>

                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex">
                    <Link href="/" className="rounded-full bg-[#baff00] px-3 py-1.5 text-[9px] font-semibold  text-black transition hover:bg-[#c8ff33]">
                        Workouts
                    </Link>

                    <Link href="/my-plan" className=" rounded-full px-3 py-1.5 text-[9px] font-medium  text-gray-500 transition  hover:text-white">
                        My Plan
                    </Link>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                    <div className="flex items-center gap-1.5">
                        <button className="btn btn-outline border-none">Plan</button>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#baff00] text-[8px] font-bold  text-black ">
                            0
                        </span>
                    </div>

                    <div className="hidden items-center gap-1.5 sm:flex">
                        <button className="btn btn-outline border-none">Saved</button>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#34373c] text-[8px] text-gray-400">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;