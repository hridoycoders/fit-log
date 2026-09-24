"use client"
import Image from "next/image";
import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";

const Navbar = () => {
    const { plan, saved } = useWorkout();
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black">
            <div className="container mx-auto flex min-h-20 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/asset/logo.png"
                        alt="FitLog Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <span className="text-2xl font-bold tracking-wider text-white">
                        FIT<span className="text-[#ccff00]">LOG</span>
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="font-medium text-[#ccff00]"> Workouts </Link>

                    <Link href="/my-plan" className="font-medium text-white transition hover:text-[#ccff00]">
                        My Plan
                    </Link>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2">
                    <Link href="/my-plan" className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black">
                        Plan <span>{plan.length}</span>
                    </Link>

                    <Link href="/my-plan" className="rounded-full border border-[#ccff00] px-4 py-2 text-sm font-bold text-white">
                        Saved <span>{saved.length}</span>
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
