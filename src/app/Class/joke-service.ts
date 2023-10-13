import { Joke } from "./joke";

export class JokeService {

    jokes: Joke[];
    posicion!:number;
    
    constructor(){
      this.jokes = [
        new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony (Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not verymature’")];
    }

    getJokes(){
        return this.jokes;
    }
  
    addJoke(joke:Joke){
    this.jokes.push(joke);
    }

    removeJoke(joke: Joke){
    for (let i = 0; i < this.jokes.length; i++) {
        if(this.jokes[i] == joke){
            this.jokes = this.jokes.filter(objeto => objeto != joke);
        }
    }
    }

    actualJoke(joke:Joke){
    for (let i = 0; i < this.jokes.length; i++) {
        if(this.jokes[i] == joke){
        this.posicion = i;
        }
    }
    }

    
    nuevoJoke(joke:Joke){
    this.jokes.splice(this.posicion, 1, joke);
    }
  

}
