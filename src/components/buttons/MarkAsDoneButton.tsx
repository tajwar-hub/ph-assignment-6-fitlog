"use client";

import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";
import { FaCheck } from "react-icons/fa";

interface MarkAsDoneButtonProps {
  id: number;
  isDone: boolean;
}

const MarkAsDoneButton = ({ id, isDone }: MarkAsDoneButtonProps) => {
  const { markAsDone } = usePlan();

  function handleClick() {

    if (isDone) return;

    markAsDone(id);
    toast.success("Marked as done!");
  }

  return (
    <button
      onClick={handleClick}
      disabled={isDone}
      className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase transition ${
        isDone
          ? "cursor-not-allowed bg-gray-700 text-gray-400"
          : "bg-[#ccff00] text-black hover:brightness-90"
      }`}
    >
      <FaCheck />
      {isDone ? "Done" : "Mark as Done"}
    </button>
  );
}
export default MarkAsDoneButton