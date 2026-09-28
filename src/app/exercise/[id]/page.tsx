import Image from "next/image";
import { notFound } from "next/navigation";
import { Exercise } from "@/types/DataTypes";
import { CiSaveUp2 } from "react-icons/ci";
import { MdAddToPhotos } from "react-icons/md";



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

 const ExerciseDetailsPage = async({ params }: DetailsPageProps) => {
    const { id } = await params; 
    const exercise = await getExercise(id);

    if (!exercise) {
        notFound();
    }

    // Key Specs as an array of { label, value } pairs.
    // Instead of writing 7 near-identical rows by hand, we loop over this list.
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
        // TWO-COLUMN LAYOUT:
        // mobile: one column (image on top, details below)
        // large screens (lg:): two equal columns side by side
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2">
            {/* LEFT COLUMN: large workout image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gray-800">
                <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>

            {/* RIGHT COLUMN: all the information */}
            <div>
                {/* TITLE */}
                <h1 className="text-4xl font-bold uppercase text-white font-[family-name:var(--font-oswald)]">
                    {exercise.name}
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-3 text-gray-400">{exercise.description}</p>

                {/* CATEGORY TAGS */}
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

                {/* KEY SPECS PANEL */}
                <div className="mt-6 overflow-hidden rounded-xl border border-gray-800 bg-[#11141a]">
                    {specs.map((spec) => (
                        <div
                            key={spec.label}
                            // "last:border-b-0" removes the line under the final row
                            className="flex items-center justify-between border-b border-gray-800 px-5 py-3 last:border-b-0"
                        >
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                {spec.label}
                            </span>
                            <span className="text-sm text-white">{spec.value}</span>
                        </div>
                    ))}
                </div>

                {/* INSTRUCTIONS: an ordered list (<ol>) gives automatic numbering 1, 2, 3... */}
                <h2 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
                    Instructions
                </h2>
                <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-gray-300">
                    {exercise.instructions.map((step, index) => (
                        // Steps are plain strings with no id, so index is fine as the key here
                        // (this list never gets reordered).
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                {/* CALL-TO-ACTION BUTTONS
            We pass the whole exercise so each button knows WHAT to add/save. */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <button className="btn btn-outline btn-success"> <MdAddToPhotos /> {`Add to today's plan`}</button>
                    <button className="btn btn-outline"> <CiSaveUp2 /> Save for later</button>
                </div>
            </div>
        </section>
    );
}

export default ExerciseDetailsPage