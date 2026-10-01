import ExerciseCard from "@/components/shared/ExerciseCard";
import { Exercise } from "@/types/DataTypes";


 const getExercises = async(): Promise<Exercise[]> => {
    const res = await fetch(process.env.API_URL!);

    if (!res.ok) {
        throw new Error("Failed to fetch exercises");
    }

    return res.json();
}

const ExerciseLibrary = async () => {

    const exercises = await getExercises();

    return (
        <section id="library" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16">
            <h2 className="text-3xl font-bold uppercase text-white font-serif">
                The Library
            </h2>
            <p className="mt-1 text-sm text-gray-400">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {exercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </section>
    );
}
export default ExerciseLibrary;