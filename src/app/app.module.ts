import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from "@angular/forms";
import {GameService} from "./services/game/game.service";
import { GameMylistComponent } from './game-mylist/game-mylist.component';
import { GameModifComponent } from './game-modif/game-modif.component';
import { GameNewComponent } from './game-new/game-new.component';
import { GameAllComponent } from './game-all/game-all.component';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import { GameDetailsComponent } from './game-details/game-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameMylistComponent,
    GameModifComponent,
    GameNewComponent,
    GameAllComponent,
    HomeComponent,
    GameDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
