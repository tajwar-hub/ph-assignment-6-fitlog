import Image from "next/image";
import { notFound } from "next/navigation";
import { Exercise } from "@/types/DataTypes";
import SaveForLaterButton from "@/components/buttons/SaveForLaterButton";
import AddToPlanButton from "@/components/buttons/AddToPlanButton";

const getExercise = async (id: string): Promise<Exercise | null> => {
    const res = await fetch(`${process.env.API_URL}/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch exercises")
    }
    return res.json();
}

interface DetailsPageProps {
    params: Promise<{ id: string }>;
}

const ExerciseDetailsPage = async ({ params }: DetailsPageProps) => {
    const { id } = await params;
    const exercise = await getExercise(id);

    if (!exercise) {
        notFound();
    }

    const specs = [
        { label: "Equipment", value: exercise.equipment },
        { label: "Difficulty", value: exercise.difficulty },
        { label: "Sets", value: exercise.sets },
        { label: "Reps", value: exercise.reps },
        { label: "Duration", value: `${exercise.duration} min` },
        { label: "Calories", value: `${exercise.caloriesBurned} kcal` },
        { label: "Rating", value: exercise.rating },
    ];

    return (
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2">
            <div className="relative aspect-4/5">
                <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    priority
                />
            </div>

            <div>
                <h1 className="text-4xl font-bold uppercase text-white font-serif">
                    {exercise.name}
                </h1>

                <p className="mt-3 text-gray-400">{exercise.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {exercise.muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-semibold text-black"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                <div className="mt-7 rounded-xl border-none bg-[#11141a]">
                    {specs.map((spec) => (
                        <div
                            key={spec.label}
                            className="flex items-center justify-between border-b border-gray-800 px-5 py-3 "
                        >
                            <span className="text-xs font-semibold uppercase 
                             text-gray-500">
                                {spec.label}
                            </span>

                            <span className="text-sm text-white">{spec.value}</span>
                        </div>
                    ))}
                </div>

                <h2 className="mt-8 text-sm font-bold uppercase 
                 text-white">
                    Instructions
                </h2>
                
                <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-gray-300">
                    {exercise.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                    <AddToPlanButton exercise={exercise} />
                    <SaveForLaterButton exercise={exercise} />
                </div>
            </div>
        </section>
    );
}

export default ExerciseDetailsPage