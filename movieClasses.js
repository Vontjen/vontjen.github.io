class Person{

    constructor(firstName ='John', lastName ='Doe'){
        this.firstName= firstName;
        this.lastName=lastName;
    }


    get fullname() {
        return this.firstName+" "+this.lastName;
    }


}

class Actor extends Person{

    constructor(firstName, lastName, ...characters){
        super(firstName, lastName);
        this.characters = characters;
    }

    toString(){
        return `${this.firstName} ${this.lastName} as [${this.characters.join(",")}]`
        //return `${this.firstName} ${this.lastName} as ${this.characters}`
    }




}

class Movie{

    constructor(title, genre='drama', runtime='120', ...actors){
        this.title = title;
        this.genre = genre;
        this.runtime = runtime;
        this.actors = actors;
    }

    get characters(){
        let c = [];
        for(let v of this.actors){
            for(let x of v.characters){
                c.push(x);
            }
        }

        return c;

    }

    toString(){
        return `${this.title}  (${this.genre})  [${this.runtime}min]`
    }

    addActor(actor){
        this.actors.push(new Actor(actor.firstName, actor.lastName, actor.characters)) ;
    }



}


let a = new Actor("Tom", "Hanks", "Forrest Gump", "Captain Miller", "Paul Edgecomb");
console.log(`Actor: ${a}`);
let m = new Movie("Forrest Gump", "drama", 135, new Actor("Tom", "Hanks", "Forrest","Gump"));
m.addActor(new Actor("Robin", "Wright", "Jenny Curran"));
console.log(`Movie: ${m}`);
let n = new Movie("Fight Club");
n.addActor(new Actor("Edward", "Norton", "The Narrator"));
n.addActor(new Actor("Brad", "Pitt", "Tyler Durden"));
console.log(`Movie ${n} staring ${n.characters.join(', ')}`);