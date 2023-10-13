import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../Class/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() joke!: Joke;

  @Output() removeJoke = new EventEmitter<any>()
  @Output() thisJoke = new EventEmitter<any>()
  @Output() newJoke = new EventEmitter<any>()

  editarJoke:boolean = false;

  remove(){
    this.removeJoke.emit(this.joke);
  }

  edicion(){
    if(!this.editarJoke){
      this.editarJoke = !this.editarJoke
    }
    else{
      this.editarJoke = !this.editarJoke
    }
  }

  aceptar(pregunta:string, respuesta:string){
    this.thisJoke.emit(this.joke);
    this.newJoke.emit(new Joke(pregunta, respuesta))
    this.edicion()
  }


}
