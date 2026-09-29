"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { usePlan } from "@/context/PlanContext";
import { Exercise, PlanItem, PlanTab, SortOption } from "@/types/DataTypes";
import MarkAsDoneButton from "@/components/buttons/MarkAsDoneButton";
import RemoveButton from "@/components/buttons/RemoveButton";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { IoFlame } from "react-icons/io5";


function sortList<T extends Exercise>(list: T[], sortBy: SortOption): T[] {
  return [...list].sort((a, b) => {
    if (sortBy === "Duration") return a.duration - b.duration; 
    if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
    return b.rating - a.rating; 
  });
}

const MyPlanPage = () => {
  const { plan, saved, isLoaded } = usePlan();

  const [activeTab, setActiveTab] = useState<PlanTab>("plan");
  const [sortBy, setSortBy] = useState<SortOption>("Duration"); 

  const totalMinutes = plan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = plan.reduce((sum, item) => sum + item.caloriesBurned, 0);

  const currentList: (Exercise | PlanItem)[] = sortList(
    activeTab === "plan" ? plan : saved,
    sortBy
  );

  const stats = [
    { label: "Exercises", value: plan.length, accent: true },
    { label: "Minutes", value: totalMinutes, accent: false },
    { label: "Calories", value: totalCalories, accent: false },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      
      <h1 className="text-4xl font-bold uppercase text-white font-serif text-center">
        My Plan
      </h1>
      <p className="mt-1 text-sm text-gray-400 text-center">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6 grid grid-cols-3 rounded-2xl border border-gray-800 bg-[#11141a] p-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-xs text-gray-400">{stat.label}</p>
            
            <p
              className={`mt-1 text-3xl font-bold font-serif sm:text-5xl ${
                stat.accent ? "text-[#ccff00]" : "text-white"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex rounded-xl border border-gray-800 bg-[#11141a] p-1">
          {(["plan", "saved"] as PlanTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                activeTab === tab
                  ? "bg-[#1f232b] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "plan" ? "Today's Plan" : "Saved"}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-400">
          <label htmlFor="sort">Sort By</label>
          <div className="relative">
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none rounded-lg border border-gray-800 bg-[#11141a] py-2 pl-3 pr-9 text-xs text-white outline-none"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>
      </div>


      <div className="mt-6">
        {!isLoaded ? (
          <p className="py-16 text-center text-sm text-gray-400">
            Loading workouts…
          </p>
        ) : currentList.length === 0 ? (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-700 px-6 py-16 text-center">
            <h2 className="text-xl font-bold uppercase text-white font-serif">
              Nothing here yet
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-5 rounded-full bg-[#ccff00] px-6 py-2.5 text-sm font-bold text-black transition hover:brightness-90"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {currentList.map((item) => {
            
              const isDone = "isDone" in item && item.isDone;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#11141a] p-3 sm:flex-row sm:items-center ${
                    isDone ? "opacity-60" : ""
                  }`}
                >
                  <div className="relative h-16 w-full shrink-0 overflow-hidden rounded-lg sm:w-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-lg font-bold uppercase text-white font-serif ${
                        isDone ? "line-through" : ""
                      }`}
                    >
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500">{item.equipment}</p>

                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaRegClock />
                        {item.duration} min
                      </span>

                      <span className="flex items-center gap-1">
                        <IoFlame />
                        {item.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1">
                        <FaRegStar />
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/exercise/${item.id}`}
                      className="rounded-full border border-gray-600 px-4 py-2 text-xs text-white transition hover:border-white"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <MarkAsDoneButton id={item.id} isDone={isDone} />
                    )}

                    <RemoveButton id={item.id} from={activeTab} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
export default MyPlanPage;