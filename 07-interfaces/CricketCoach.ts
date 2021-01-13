import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    
    getDailWorkout(): string {
        return "Practice your spin bowling"
    }
    
}