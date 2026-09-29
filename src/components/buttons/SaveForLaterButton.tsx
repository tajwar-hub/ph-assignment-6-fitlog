"use client";

import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";
import { Exercise } from "@/types/DataTypes";
import { CiBookmark } from "react-icons/ci";

interface SaveForLaterButtonProps {
    exercise: Exercise;
}

const SaveForLaterButton = ({ exercise }: SaveForLaterButtonProps) => {
    const { saveForLater } = usePlan();

    function handleClick() {
        const result = saveForLater(exercise);

        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    }

    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-2 rounded-full border border-gray-600 px-5 py-3 text-xs font-bold uppercase text-white transition hover:border-white"
        >
           <CiBookmark />
            Save for later
        </button>
    );
}
export default SaveForLaterButton