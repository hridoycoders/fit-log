import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/fitlog";

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/workout/${workout.id}`}
            className="group overflow-hidden border border-white/10 bg-[#111] transition hover:border-[#ccff00] rounded-2xl">
            {/* Image */}
            <div className="relative h-56 w-full">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full border border-[#ccff00] px-2 py-1 text-xs text-[#ccff00]"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold uppercase text-white">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-gray-400">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-gray-400">
                    <span>{workout.duration} min</span>
                    <span>{workout.caloriesBurned} cal</span>
                    <span>★ {workout.rating}</span>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;