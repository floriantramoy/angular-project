export class Game {
  id?: string;
  date: string;
  description: string;
  image: string;
  name: string;
  played: boolean;
  note: string;
  bibliotheque : boolean;


  constructor() {
    this.date = '';
    this.description = '';
    this.played = false;
    this.image = '';
    this.name = '';
    this.note = '';
    this.bibliotheque = false;

  }
}

