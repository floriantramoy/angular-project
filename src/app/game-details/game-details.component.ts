import {Component, Input, OnInit} from '@angular/core';
import { GameService } from '../services/game/game.service';
import {ActivatedRoute} from "@angular/router";
import {window} from "rxjs/operators";
import {getOuterNodeFromInnerDeclaration} from "@angular/compiler-cli/ngcc/src/host/esm2015_host";


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  game: any = null;
  mygame: any = null
  @Input() id?: string ;

  constructor(
    private Game: GameService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Game.get(id).subscribe((value: any) => {
      console.log(value)
      this.game = value;
      this.mygame = value;
    });
  }

  suppr(): void{
    this.Game.delete(this.id);
  }

}
