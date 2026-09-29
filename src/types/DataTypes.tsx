export interface Exercise {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: string;
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number;
    description: string;
    instructions: string[];
}

export interface PlanItem extends Exercise {
  isDone: boolean; 
}


export type SortOption = "Duration" | "Calories" | "Rating";

export type PlanTab = "plan" | "saved";