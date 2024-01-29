// 1,

// (a)

class movie {

    constructor (Title , Studio , Rating='PG'){
      
        this.Title = Title
        this.Studio = Studio
        this.Rating =  Rating
    }
    }
    const movie1 = new movie ('KGF', 'Hombale', 'PG12' )
    const movie2 = new movie ('Casino Royale', 'Eon Productions', 'PG13' )
    const movie3 = new movie ('leo', 'seven screen studio', 'PG15' )
    const movie4 = new movie ('spider', 'seven screen studio')
    console.log(movie1)
// (b)

console.log(movie4.Rating)

// (c)

        console.log(movie3.Rating)
// (d)

        console.log(movie2)


// (2)
        var Circle = /** @class */ (function () {
            function Circle(radius, color) {
                this.radius = 1.0;
                this.color = "Red";
                if (typeof (radius) !== "undefined") {
                    this.radius = radius;
                }
                if (typeof (color) !== "undefined") {
                    this.color = color;
                }
            }
            Circle.prototype.getRadius = function () {
                return this.radius;
            };
            Circle.prototype.setRadius = function (radius) {
                this.radius = radius;
            };
            Circle.prototype.getColor = function () {
                return this.color;
            };
            Circle.prototype.setColor = function (color) {
                this.color = color;
            };
            Circle.prototype.toString = function () {
                return "Radius: " + this.radius + " Color: " + this.color;
            };
            Circle.prototype.getArea = function () {
                return (2 * (Math.PI) * this.radius);
            };
            Circle.prototype.getCircumference = function () {
                return (2 * this.radius);
            };
            return Circle;
        }());
        var c1 = new Circle();
        console.log("Constructor with no params: " + c1.toString());
        var c2 = new Circle(3.5);
        console.log("Constructor with one param: " + c2.toString());
        var c3 = new Circle(2.2, 'Yellow');
        console.log("getRadius: " + c3.getRadius());
        c3.setRadius(3.3);
        console.log("Radius value after setRadius: " + c3.getRadius());
        console.log("getColor: " + c3.getColor());
        c3.setColor("Blue");
        console.log("Color Value after setColor: " + c3.getColor());
        console.log(c3.toString());
        console.log("Area: " + c3.getArea());
        console.log("Circumference: " + c3.getCircumference());
        
        

// 3,

class person {

constructor (firstName , lastName , Age){
  
    this.firstName = firstName
    this.lastName = lastName
    this.Age = Age
}
}
const person1 = new person ('Dinesh', 'Kumar s', 27 )

console.log(person1)

// 4,

// UBER PRICE

class uber {
    constructor ( distance , waitingPeriod , Rate){

        this.distance=distance;
        this.waitingPeriod=waitingPeriod;
        this.Rate=Rate;
    }

    setDistance(Dist){

        this.Distance=Dist
    }
    getRideDetails(){
        return(`the distance of the ride is ${this.distance} with waiting of period of ${this.waitingPeriod} and rate of ${this.Rate}`)
    }

    getRate(){
        let totalRate = (this.distance+this.Rate)+(this.waitingPeriod*5)
        return totalRate;
        
    }

}

let customer1 = new uber (199,10,15)
console.log(customer1.getRate())
customer1.setDistance(180);
console.log(customer1.getRate())
console.log(customer1.getRideDetails())

