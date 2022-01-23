import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game/game.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film-modif',
  templateUrl: './game-modif.component.html',
  styleUrls: ['./game-modif.component.scss']
})
export class GameModifComponent implements OnInit {
  game: any = null;
  change: boolean = false;

  constructor(
    private Game: GameService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Game.get(id).subscribe((value: any) => {
      console.log(value)
      this.game = value;
    });
  }

  modif() {
    this.Game.update(this.game).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    })
  }
}
