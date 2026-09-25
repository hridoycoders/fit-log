"use client"
import Image from "next/image";
import { Workout } from "@/types/fitlog";
import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

interface WorkoutDetailsProps {
    workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
     const { plan, saved, addToPlan, saveWorkout } = useWorkout();
    const isAdded = plan.some((item) => item.id === workout.id);
    const isSaved = saved.some((item) => item.id === workout.id);
   
    return (
        <main className="min-h-screen bg-black px-4 py-12 md:py-16">
            <div className="container mx-auto">
                <div className="grid gap-10 md:grid-cols-2">
                    {/* Workout Image */}
                    <div className="relative h-[300px] overflow-hidden md:h-[550px] rounded-3xl">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Workout Details */}
                    <div>
                        {/* Category Tags */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full border border-[#ccff00] px-3 py-1 text-xs text-[#ccff00]"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold uppercase text-white md:text-5xl">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-5 leading-7 text-gray-400">
                            {workout.description}
                        </p>

                        {/* Specs */}
                        <div className="mt-8 grid grid-cols-2 gap-4 border-y border-white/10 py-6">
                            <div>
                                <p className="text-sm text-gray-500">Equipment</p>
                                <p className="mt-1 text-white">{workout.equipment}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Difficulty</p>
                                <p className="mt-1 text-white">{workout.difficulty}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Sets</p>
                                <p className="mt-1 text-white">{workout.sets}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Reps</p>
                                <p className="mt-1 text-white">{workout.reps}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="mt-1 text-white">{workout.duration} min</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Calories</p>
                                <p className="mt-1 text-white">
                                    {workout.caloriesBurned} cal
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Rating</p>
                                <p className="mt-1 text-white">
                                    ★ {workout.rating}
                                </p>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold uppercase text-white">
                                Instructions
                            </h2>

                            <ol className="mt-4 space-y-4">
                                {workout.instructions.map((instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 text-gray-400"
                                    >
                                        <span className="font-bold text-[#ccff00]">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* plan and save btn */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={() => {
                                    if (isAdded) {
                                        toast.warning(`${workout.name} is already in today's plan`);
                                        return;
                                    }

                                    addToPlan(workout);
                                    toast.success(`${workout.name} added to today's plan`);
                                }}
                                className="bg-[#ccff00] px-6 py-3 font-bold uppercase text-black"
                            >
                                {isAdded ? "Added ✓" : "Add to Today's Plan"}
                            </button>

                            <button
                                onClick={() => {
                                    if (isSaved) {
                                        toast.warning(`${workout.name} is already saved`);
                                        return;
                                    }

                                    saveWorkout(workout);
                                    toast.success(`${workout.name} added to saved`);
                                }}
                                className="border border-[#ccff00] px-6 py-3 font-bold uppercase text-white"
                            >
                                {isSaved ? "Added ✓" : "Save for Later"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutDetails;