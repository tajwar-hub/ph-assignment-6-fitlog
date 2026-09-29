"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Exercise, PlanItem } from "@/types/DataTypes";


interface PlanContextType {
  plan: PlanItem[];  
  saved: Exercise[];
  isLoaded: boolean;

  addToPlan: (exercise: Exercise) => { success: boolean; message: string };
  saveForLater: (exercise: Exercise) => { success: boolean; message: string };
  markAsDone: (id: number) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const MAX_PLAN_SIZE = 5;


export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<Exercise[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {

    const storedPlan = localStorage.getItem(PLAN_KEY);
    const storedSaved = localStorage.getItem(SAVED_KEY);

    if (storedPlan) setPlan(JSON.parse(storedPlan));
    if (storedSaved) setSaved(JSON.parse(storedSaved));

    setIsLoaded(true);
  }, []);


  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
    }
  }, [plan, isLoaded]);


  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    }
  }, [saved, isLoaded]);



  function addToPlan(exercise: Exercise) {
    const alreadyInPlan = plan.some((item) => item.id === exercise.id);
    if (alreadyInPlan) {
      return { success: false, message: "Already in today's plan." };
    }

    if (plan.length >= MAX_PLAN_SIZE) {
      return { success: false, message: "Today's plan is full (5 max)." };
    }

    setPlan([...plan, { ...exercise, isDone: false }]);

    return { success: true, message: "Added to today's plan." };
  }


  function saveForLater(exercise: Exercise) {
    const alreadySaved = saved.some((item) => item.id === exercise.id);
    if (alreadySaved) {
      return { success: false, message: "Already saved." };
    }

    setSaved([...saved, exercise]);
    return { success: true, message: "Saved for later." };
  }

  function markAsDone(id: number) {
    setPlan(
      plan.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );
  }

  function removeFromPlan(id: number) {
    setPlan(plan.filter((item) => item.id !== id));
  }

  function removeFromSaved(id: number) {
    setSaved(saved.filter((item) => item.id !== id));
  }


  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        isLoaded,
        addToPlan,
        saveForLater,
        markAsDone,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside a <PlanProvider>");
  }

  return context;
}