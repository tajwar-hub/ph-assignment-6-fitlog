import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 pt-10">
            <div className="flex flex-col-reverse items-center gap-8 rounded-2xl border border-gray-800 bg-[#11141a] p-8 lg:flex-row lg:justify-between lg:p-12">

                <div className="max-w-xl text-center lg:text-left">
                    <p className="text-xs font-semibold tracking-widest text-[#ccff00]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="mt-4 text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl font-serif">
                        Train with intent. Log every set.
                    </h1>

                    <p className="mt-4 text-sm text-gray-400 sm:text-base">
                        {`FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                                into today's plan, and watch the week's work add up.`}
                    </p>


                    <a href="#library"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold text-black transition hover:brightness-90"
                    >
                        BROWSE WORKOUTS

                    </a>
                </div>

                <div className="w-56 sm:w-64 lg:w-80">
                    <Image
                        src={banner}
                        alt="Athlete training on a bench"
                        priority
                        className="h-auto w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;