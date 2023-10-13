import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Joke } from '../Class/joke';

@Component({
  selector: 'app-form-joke',
  templateUrl: './form-joke.component.html',
  styleUrls: ['./form-joke.component.css']
})
export class FormJokeComponent {

  @Output() jokeCreated = new EventEmitter<Joke>()

  createJoke(pregunta:String, respuesta:String){
    if(pregunta != "" && respuesta != ""){
      this.jokeCreated.emit(new Joke(pregunta, respuesta));
    }
  }

}
