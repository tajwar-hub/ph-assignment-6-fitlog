import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-6 bg-[#0d0f12] border-t border-gray-800 mt-10">
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="FitLog logo" width={20} height={20} />
        <span className="text-white font-bold text-sm">FITLOG</span>
      </Link>

      <p className="text-gray-500 text-sm">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
}