import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameMylistComponent} from "./game-mylist/game-mylist.component";
import {GameNewComponent} from "./game-new/game-new.component";
import {GameAllComponent} from "./game-all/game-all.component";
import {GameDetailsComponent} from "./game-details/game-details.component";
import {AppComponent} from "./app.component";
import {GameComponent} from "./game/game.component";
import {GameModifComponent} from "./game-modif/game-modif.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {GameService} from "./services/game/game.service";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:"mygames",
    component: GameMylistComponent
  },
  {
    path:"games",
    component: GameAllComponent
  },
  {
    path:"new",
    component: GameNewComponent
  },
  {
    path: "modif/:id",
    component: GameModifComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "details/:id",
    component: GameDetailsComponent
  }
];

@NgModule({
  declarations:[
  ],
  imports: [
    RouterModule.forRoot(routes)],
  providers: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
