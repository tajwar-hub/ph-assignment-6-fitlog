"use client";

import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";
import { Exercise } from "@/types/DataTypes";
import { FaRegCalendar } from "react-icons/fa";

interface AddToPlanButtonProps {
  exercise: Exercise;
}

const AddToPlanButton = ({ exercise }: AddToPlanButtonProps) => {
  const { addToPlan } = usePlan();

  function handleClick() {
    const result = addToPlan(exercise);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 rounded-full bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black transition hover:brightness-90"
    >
      <FaRegCalendar />
     {` Add to today's plan`}
    </button>
  );
}
export default AddToPlanButton