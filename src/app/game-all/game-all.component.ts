import {Component, Input, OnInit} from '@angular/core';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'app-game-all',
  templateUrl: './game-all.component.html',
  styleUrls: ['./game-all.component.scss']
})
export class GameAllComponent implements OnInit {
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
