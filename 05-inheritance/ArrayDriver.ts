import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10,10);

let myCircle = new Circle(5, 10,20);

let myRectangle = new Rectangle(0 , 0,3,7)

//declare an array os shapes .. initially empty

let theShapes: Shape[] =[];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for( let tempShape of theShapes){
    console.log(tempShape.getInfo());

}

