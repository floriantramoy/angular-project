import { Component, OnInit} from '@angular/core';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'app-game-mylist',
  templateUrl: './game-mylist.component.html',
  styleUrls: ['./game-mylist.component.scss']
})
export class GameMylistComponent implements OnInit {
  games!:any;
  constructor(
    private Game: GameService
  ) {}

  ngOnInit(): void {
    this.Game.getAllGames().subscribe((data: any) => {
      this.games = data;
    });
    console.log(this.games);
  }
}
