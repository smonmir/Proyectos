import { Component } from '@angular/core';
import { Joke } from '../Class/joke';
import { JokeService } from '../Class/joke-service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  servicio!: JokeService;
  jokes!: Joke[];

  constructor(){
    this.servicio = new JokeService();
    this.jokes = this.servicio.getJokes();
  }

}
