"use client";

import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";
import { PlanTab } from "@/types/DataTypes";
import { ImCross } from "react-icons/im";

interface RemoveButtonProps {
  id: number;
  from: PlanTab; 
}

const RemoveButton = ({ id, from }: RemoveButtonProps) => {
  const { removeFromPlan, removeFromSaved } = usePlan();

  function handleClick() {
    if (from === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
    toast.info("Removed.");
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Remove" 
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition hover:border-red-400 hover:text-red-400"
    >
      <ImCross />
    </button>
  );
}
export default RemoveButton