import Link from "next/link";
import { FaDumbbell } from "react-icons/fa";


const NotFound = () => {
    return (

        <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
            <div className="flex gap-1.5 h-20 w-20 items-center justify-center rounded-full border border-gray-800 bg-[#11141a]">
                <FaDumbbell />  <FaDumbbell/>
            </div>

            <h1 className="mt-6 text-7xl font-bold text-[#ccff00] font-serif sm:text-8xl">
                404
            </h1>

            <h2 className="mt-2 text-2xl font-bold uppercase text-white font-serif">
                Page not found
            </h2>

            <p className="mt-3 max-w-md text-sm text-gray-400">
                {`The page you are looking for doesn't exist or may have been moved.`}
            </p>

            <Link
                href="/"
                className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black hover:brightness-50">
                Back to Home Page
            </Link>
        </section>
    );
}

export default NotFound