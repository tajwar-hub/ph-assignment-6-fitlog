import Image from "next/image";
import { notFound } from "next/navigation";
import { Exercise } from "@/types/DataTypes";
import { CiSaveUp2 } from "react-icons/ci";
import { MdAddToPhotos } from "react-icons/md";
import SaveForLaterButton from "@/components/buttons/SaveForLaterButton";
import AddToPlanButton from "@/components/buttons/AddToPlanButton";



const getExercise = async (id: string): Promise<Exercise | null> => {
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

    if (!res.ok) {
        return null;
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
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-gray-800">
                <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
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

                <div className="mt-6 overflow-hidden rounded-xl border border-gray-800 bg-[#11141a]">
                    {specs.map((spec) => (
                        <div
                            key={spec.label}
                            className="flex items-center justify-between border-b border-gray-800 px-5 py-3 last:border-b-0"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                {spec.label}
                            </span>
                            <span className="text-sm text-white">{spec.value}</span>
                        </div>
                    ))}
                </div>

                <h2 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
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