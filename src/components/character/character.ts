import { Component } from '@angular/core';
import { GameProvider } from "../../providers/game/game";
import { Character } from "../../models/character";

/**
 * Generated class for the CharacterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'character',
  templateUrl: 'character.html'
})
export class CharacterComponent {

  public stats = {
    str: 0,
    dex: 0,
    agi: 0,
    int: 0
  };
 public player: Character = new Character();
 public fighter: any;


  constructor(private gamePvd: GameProvider) {
    this.gamePvd.getPlayer()
      .then(player => {
        this.player = player;
        this.stats.str = player.str;
        this.stats.dex = player.dex;
        this.stats.agi = player.agi;
        this.stats.int = player.int;
      })
      .catch(err => console.log(err))
    this.gamePvd.getFighter()
      .then(fighter => this.fighter = fighter)
      .catch(err => console.log(err))
  }

  decrementStat(el){
    if(this.player[el] > this.stats[el]){
      // ok
      this.player[el]--;
      this.player.statPoints++;
    }
  }

  incrementStat(el){
    if(this.player.statPoints > 0){
      // ok
      this.player[el]++;
      this.player.statPoints--;
    }
  }

  saveNewStats(){
    this.gamePvd.setPlayer(this.player);
  }

  statsIsDifferent () {
    let isDifferent = false;

    if (this.player.str !== this.stats.str) {
      isDifferent = true
    } else if (this.player.dex !== this.stats.dex) {
      isDifferent = true
    } else if (this.player.agi !== this.stats.agi) {
      isDifferent = true
    } else if (this.player.int !== this.stats.int) {
      isDifferent = true
    }

    return isDifferent;
  }
}
