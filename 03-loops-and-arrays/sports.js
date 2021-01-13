var sportsOne = ["golf", "cricket", "tennis", "Swiming"];
/*for(let i=0; i< sportsOne.length; i++){
    console.log(sportsOne[i])
}*/
//lets use the simpled for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
    if (tempSport == "cricket") {
        console.log(tempSport + "<< My favorute");
    }
    else {
        console.log(tempSport);
    }
}
