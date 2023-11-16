/* 
- Create an object representing a car with properties like make, model, and year. Print out the car details using console.log.
- Add a method to the car object that calculates the age of the car based on the current year.
*/

const car = {
    make : "bmw",
    model:'x5',
    year : '2019',
    age: function() {
        let currentdate = new Date();
        let currentyear = currentdate.getFullYear();
        // console.log(currentyear);
        return currentyear-this.year

        // console.log('the car age is ', currentyear-this.year);
    }
}

console.log(car);



console.log(car.age());
