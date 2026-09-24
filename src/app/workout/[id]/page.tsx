import { getWorkouts } from "@/lib/api";
import WorkoutDetails from "@/components/WorkoutDetails/WorkoutDetails";

const DetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const workouts = await getWorkouts();

    const workout = workouts.find(
        (item) => item.id === Number(id)
    );

    if (!workout) {
        return (
            <main className="min-h-screen bg-black p-10 text-center text-white">
                <h1 className="text-3xl font-bold">
                    Workout Not Found
                </h1>
            </main>
        );
    }

    return <WorkoutDetails workout={workout} />;
};

export default DetailsPage;