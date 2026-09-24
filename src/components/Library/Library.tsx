import WorkoutCard from "./WorkoutCard";
import { getWorkouts } from "@/lib/api";

const Library = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library" className="bg-black px-4 py-16 md:py-20">
            <div className="container mx-auto">
                {/* Section Heading */}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
                        The Library
                    </h2>

                    <p className="mt-3 text-gray-400">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Workout Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout) => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Library;