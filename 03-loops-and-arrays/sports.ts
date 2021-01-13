let sportsOne: string[] = ["golf", "cricket", "tennis", "Swiming"];

/*for(let i=0; i< sportsOne.length; i++){
    console.log(sportsOne[i])
}*/


//lets use the simpled for loop

for(let tempSport of sportsOne){


    console.log(tempSport)

    if(tempSport == "cricket"){
        console.log(tempSport + "<< My favorute")
    }else{
        console.log(tempSport)
    }
}