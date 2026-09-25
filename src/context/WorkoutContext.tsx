"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
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
    const [hydrated, setHydrated] = useState(false);

    // localStorage থেকে data load
    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }

        setHydrated(true);
    }, []);

    // Plan localStorage-এ save
    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }, [plan, hydrated]);

    // Saved localStorage-এ save
    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }, [saved, hydrated]);

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
        throw new Error(
            "useWorkout must be used inside WorkoutProvider"
        );
    }

    return context;
};