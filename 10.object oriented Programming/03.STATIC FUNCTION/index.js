
//static function can't call with object it should be call with class. 
class Person{
    constructor(fn,ln){
        this.firstName=fn;
        this.lastName=ln;
    }

    greetings(){
        console.log(this.firstName,this.lastName);
    }

    static fullName(){
        console.log("static text");
    }
}
let hridoy= new Person("hridoy","khan");
hridoy.greetings();
Person.fullName();
