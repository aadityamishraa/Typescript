// ---Class and Constructor---
    class Account {
        id: number;
        constructor (id: number){
            this.id=id;
        }
    }

    let account = new Account(1);

// Accessing Properties and methods
    account.id=1;
    account.deposit(10);

// Read-only and optional properties
    class Account {
        readonly id: number;
        nickname?:String;
    }

// Access Modifier
    class Account{
        private _balance: number;
        // protected members are inherited
        // private members are not
        protected _taxRate: number;
    }

// Parameter Properties
    class Account {
        // with parameter properties we can
        // create and initialize properties in one place
        constructor (public id: number, private _balance: number){
            
        }
    }

// Getters and Setters
class Account {
    private _balance=0;

    // getter function let users see private properties 
    // but resistes to update
    get balance(): number{
        return this._balance;
    }

    //setter function let users to update the private values if needed
    set balance(value: number){
        if(value<0){
            throw new Error();
        }
        this._balance=value;
    }
}

// Index Signature
    class SeatAssignment{
        // with index signature properties we can add
        // properties to an object dynamically
        // without loosing type saftey
        [seatNumber: string]: string;
    }

    let seats = new SeatAssignment();
    seats.A1= 'Aaditya';
    seats.A2= 'Harsh';

// Static members
    class Ride{
        static activeRides = 0;   
    }
    // these member are directly associated to the class
    // It also works even there is no objects of class
    Ride.activeRides++;

// Inheritance
    class Student extends Person{}

// method overriding
    class Student extends Person{
        override speak(){
            console.log('student speaking');
        }
    }

// Abstract classes and methods
    // abstracts classes are extend later
    abstract class Shape{
        // Abstract methods don't have body
        abstract render();
    }

    class Circle extends Shapes{
        override render(){
            console.log('rendering a circle');
        }
    }

// Interfaces
interface Calender{
    name: string;
    addEvent(): void;
}

class GoogleCalender implements Calender{
    
}