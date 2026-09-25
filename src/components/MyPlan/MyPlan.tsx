"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";
import { toast } from "react-toastify";

const MyPlan = () => {
    const { plan, saved, removeFromPlan, removeFromSaved } = useWorkout();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
    const [sortBy, setSortBy] = useState<string>("duration");
    const workouts = [...(activeTab === "plan" ? plan : saved)].sort(
        (a, b) => {
            if (sortBy === "duration") {
                return b.duration - a.duration;
            }

            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }

            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            return 0;
        }
    );

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-[#0b0f17] px-4 py-8 text-white md:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold uppercase tracking-wider md:text-4xl">
                        My Plan
                    </h1>
                    <p className="mt-2 text-sm text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="rounded-xl border border-white/10 bg-[#131823] p-4 text-center md:text-left">
                        <p className="text-xs uppercase text-gray-400">Exercises</p>
                        <p className="mt-1 text-xl font-bold md:text-2xl">{plan.length}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-[#131823] p-4 text-center md:text-left">
                        <p className="text-xs uppercase text-gray-400">Minutes</p>
                        <p className="mt-1 text-xl font-bold md:text-2xl">{totalMinutes}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-[#131823] p-4 text-center md:text-left">
                        <p className="text-xs uppercase text-gray-400">Calories</p>
                        <p className="mt-1 text-xl font-bold md:text-2xl">{totalCalories}</p>
                    </div>
                </div>

                {/* Tabs & Filter Bar */}
                <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl bg-[#131823] p-2 sm:flex-row sm:items-center">
                    {/* Tab Buttons */}
                    <div className="inline-flex rounded-xl bg-[#0b0f17] p-1">
                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "plan"
                                ? "bg-[#1f293d] text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Today's Plan
                        </button>
                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${activeTab === "saved"
                                ? "bg-[#1f293d] text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 px-2">
                        <span className="text-sm text-gray-400">Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="rounded-lg border border-white/10 bg-[#1f293d] px-3 py-1.5 text-sm font-medium text-white outline-none"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>

                {/* Workout List */}
                {workouts.length === 0 ? (
                    <div className="py-16 text-center">
                        <h2 className="text-xl font-bold uppercase text-white">
                            {activeTab === "plan"
                                ? "No Workouts in Your Plan"
                                : "No Saved Workouts"}
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                            {activeTab === "plan"
                                ? "Add workouts from the library to build your plan."
                                : "Save your favorite workouts to find them here."}
                        </p>
                        <Link
                            href="/"
                            className="mt-5 inline-block rounded-lg bg-[#ccff00] px-5 py-2.5 text-sm font-bold uppercase text-black transition hover:bg-[#b8e600]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    <div className="mt-6 space-y-4">
                        {workouts.map((workout) => (
                            <div
                                key={workout.id}
                                className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#131823] p-4 transition hover:border-white/10 sm:flex-row sm:items-center sm:justify-between"
                            >
                                {/* letf Image & Details */}
                                <div className="flex items-center gap-4">
                                    <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-800">
                                        {workout.image ? (
                                            <Image
                                                src={workout.image}
                                                alt={workout.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gray-800 text-xs text-gray-500">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                                            {workout.name}
                                        </h3>
                                        <p className="mt-0.5 text-xs text-gray-400">
                                            {workout.equipment}
                                        </p>

                                        {/* Stats */}
                                        <div className="mt-2 flex items-center gap-4 text-xs font-medium text-gray-300">
                                            <span className="flex items-center gap-1">
                                                <span className="text-gray-400">🕒</span> {workout.duration} min
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="text-yellow-500">🔥</span> {workout.caloriesBurned} kcal
                                            </span>
                                            {workout.rating && (
                                                <span className="flex items-center gap-1">
                                                    <span className="text-yellow-400">⭐</span> {workout.rating}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* right Action Buttons */}
                                <div className="flex items-center justify-end gap-3 pt-2 sm:pt-0">
                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
                                    >
                                        View Details
                                    </Link>
                                    {/* tap markdown btn  */}
                                    {activeTab === "plan" && (
                                        <button
                                            onClick={() => {
                                                removeFromPlan(workout.id);

                                                toast.success(`${workout.name} marked as done`);
                                            }}
                                            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#b8e600]"
                                        >
                                            <span>✓</span>
                                            Mark as Done
                                        </button>
                                    )}

                                    <button
                                        onClick={() => {
                                            if (activeTab === "plan") {
                                                removeFromPlan(workout.id);
                                                toast.success(`${workout.name} removed from plan`);
                                            } else {
                                                removeFromSaved(workout.id);
                                                toast.success(`${workout.name} removed from saved`);
                                            }
                                        }}
                                        className="p-1 text-gray-400 transition hover:text-white"
                                        title="Remove"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default MyPlan;