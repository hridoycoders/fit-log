"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Workout } from "@/types/fitlog";

interface WorkoutContextType {
    plan: Workout[];
    saved: Workout[];
    addToPlan: (workout: Workout) => void;
    saveWorkout: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(
    undefined
);

export const WorkoutProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    const addToPlan = (workout: Workout) => {
        setPlan((previous) => {
            if (previous.length >= 5) {
                return previous;
            }

            const alreadyExists = previous.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return previous;
            }

            return [...previous, workout];
        });
    };

    const saveWorkout = (workout: Workout) => {
        setSaved((previous) => {
            const alreadyExists = previous.some(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return previous;
            }

            return [...previous, workout];
        });
    };
    const removeFromPlan = (id: number) => {
        setPlan((previous) =>
            previous.filter((workout) => workout.id !== id)
        );
    };

    const removeFromSaved = (id: number) => {
        setSaved((previous) =>
            previous.filter((workout) => workout.id !== id)
        );
    };

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveWorkout,
                removeFromPlan,
                removeFromSaved,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("useWorkout must be used inside WorkoutProvider");
    }

    return context;
};