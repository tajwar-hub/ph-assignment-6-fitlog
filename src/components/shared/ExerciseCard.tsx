import Link from "next/link";
import Image from "next/image";
import { Exercise } from "@/types/DataTypes";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { IoFlame } from "react-icons/io5";


interface ExerciseCardProps {
    exercise: Exercise;
}

 const ExerciseCard = ({ exercise }: ExerciseCardProps) => {

    const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = exercise;

    return (
        <Link
            href={`/exercise/${id}`}
            className="group block overflow-hidden rounded-xl border border-gray-800 bg-[#11141a] transition hover:-translate-y-1"
        >
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill                   
                />
            </div>

            <div className="p-4">
                <div className="flex gap-2">
                    {muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full bg-[#ccff00] px-3 py-0.5 text-[10px] font-bold uppercase text-black"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                <h3 className="mt-3 text-lg font-bold uppercase text-white font-serif">
                    {name}
                </h3>

                <p className="text-xs text-gray-500">{equipment}</p>

                <div className="mt-4 flex items-center gap-4 border-t border-gray-800 pt-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        <FaRegClock />
                        {duration} min
                    </span>

                    <span className="flex items-center gap-1">
                        <IoFlame />
                        {caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <FaRegStar />
                        {rating}
                    </span>
                </div>
            </div>
        </Link>
    );
}
export default ExerciseCard