import { CricketCoach } from './CricketCoach';
import { GolfCoach } from './GolfCoach';
import { Coach } from './Coach';

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();


//declare an array coaches

let theCoaches : Coach[]=[];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailWorkout())
    
}