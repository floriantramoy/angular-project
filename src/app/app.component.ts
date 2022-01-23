import {Component, OnInit} from '@angular/core';
import {GameService} from "./services/game/game.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ma bibliothèque';
  games: any = [];
  constructor(private Game: GameService) {
  }

  ngOnInit() {
    const counter = interval(1000);

    counter.subscribe(
      (value) => {
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    )
  }
}
