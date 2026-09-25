"use client";

import { useState } from "react";
import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

const MyPlan = () => {
    const { plan, saved } = useWorkout();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const workouts = activeTab === "plan" ? plan : saved;

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-black px-4 py-12 md:py-16">
            <div className="container mx-auto">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
                        My Plan
                    </h1>

                    <p className="mt-3 text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Metrics */}
                <div className="mt-10 grid grid-cols-3 gap-3 md:gap-6">
                    <div className="border border-white/10 bg-[#111] p-4 md:p-6">
                        <p className="text-sm uppercase text-gray-500">Exercises</p>

                        <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
                            {plan.length}
                        </p>
                    </div>

                    <div className="border border-white/10 bg-[#111] p-4 md:p-6">
                        <p className="text-sm uppercase text-gray-500">Minutes</p>

                        <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="border border-white/10 bg-[#111] p-4 md:p-6">
                        <p className="text-sm uppercase text-gray-500">Calories</p>

                        <p className="mt-2 text-2xl font-bold text-white md:text-3xl">
                            {totalCalories}
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-10 flex gap-3 border-b border-white/10 pb-4">
                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`px-5 py-2 font-bold uppercase ${activeTab === "plan"
                                ? "bg-[#ccff00] text-black"
                                : "border border-white/20 text-white"
                            }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-5 py-2 font-bold uppercase ${activeTab === "saved"
                                ? "bg-[#ccff00] text-black"
                                : "border border-white/20 text-white"
                            }`}
                    >
                        Saved
                    </button>
                </div>

                {/* Empty State */}
                {workouts.length === 0 ? (
                    <div className="py-20 text-center">
                        <h2 className="text-2xl font-bold uppercase text-white">
                            Nothing Here Yet
                        </h2>

                        <p className="mt-3 text-gray-400">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 inline-block bg-[#ccff00] px-6 py-3 font-bold uppercase text-black"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {workouts.map((workout) => (
                            <div
                                key={workout.id}
                                className="border border-white/10 bg-[#111] p-5"
                            >
                                <h3 className="text-xl font-bold uppercase text-white">
                                    {workout.name}
                                </h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    {workout.equipment}
                                </p>

                                <div className="mt-5 flex justify-between text-sm text-gray-400">
                                    <span>{workout.duration} min</span>
                                    <span>{workout.caloriesBurned} cal</span>
                                </div>

                                <Link
                                    href={`/workout/${workout.id}`}
                                    className="mt-5 inline-block border border-[#ccff00] px-4 py-2 text-sm font-bold uppercase text-white"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default MyPlan;