import { Coach } from './Coach';
export class GolfCoach implements Coach{
    getDailWorkout(): string {
        return "Hit 100 balls at the golf";
    }

}