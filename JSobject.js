
/*
var BMW = {   carName: "BMW" , carModel: 2015, carColor: "Red", previousOwner : [ "Ahmad Aamer" , "Frank"   ] }    ///JS object 
var Skoda = {  carName: "Skoda" , carModel: 2024, carColor: "Silver", previousOwner : [ "Omar B" , "Nasri"   ]   }


var cars = [ BMW  , Skoda  ]            ///Array  of Cars (Object)

for( var i = 0 ; i< cars.length ; i++){
    console.log(cars[i].carName + " Car model is " + cars[i].carModel )
}
*/
//console.log(cars[0].carName + " Car model is " + cars[0].carModel )
//console.log(cars[1].carName + " Car model is " + cars[1].carModel )

console.log(calculateAttendance("1192345"))

function calculateAttendance(empId){
    var vac = getVacations("1192345");
    

// retrun numer of attendance hours 
var hours= 55;
return hours + " Vacation are " + vac;
}


function addtionNumbers(num1 , num2 ){
    var result = num1 + num2;
    return result;
}


function getVacations(empId){
    var vacations = 4;

    return  vacations;
}