import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Character } from "../../models/character";
import {GameProvider} from "../../providers/game/game";

/**
 * Generated class for the CharacterFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-form',
  templateUrl: 'character-form.html',
})
export class CharacterFormPage {

  public character: Character;
  public points: number;
  public skills: Array<Object>;
  public weapons: Array<Object>;
  public armors: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public gamePvd: GameProvider) {
    this.character = new Character();
    this.points = 10;
    gamePvd.getSkills().then(skills => this.skills = skills);
    gamePvd.getWeapons().then(weapons => this.weapons = weapons );
    gamePvd.getArmors().then( armors => this.armors = armors);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterFormPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
    this.navCtrl.push("GamePage");
  }

  registerCharacter(){
    this.gamePvd.setPlayer(this.character);
    this.dismiss();
  }

  pointLeft () {
    return (this.points - this.character.str - this.character.dex - this.character.agi - this.character.int)
  }
}
