import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() gameName?: string;
  @Input() gamePlayed?: boolean;
  @Input() gameDate?: string;
  @Input() gameBibliotheque?: boolean;
  @Input() gameDescription?: string;
  @Input() gameNote?: string;
  @Input() gameAffiche?: string;
  @Input() id?: string ;

  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
  }

  getPlayed() {
    return this.gamePlayed;
  }


  changeColor() {
    return this.gamePlayed ? 'purple' : 'red';
  }


}
