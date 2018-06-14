import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController} from "ionic-angular";
import { GameProvider} from "../../providers/game/game";

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  public player: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              public gamePvd: GameProvider) {
    this.linkStart();
    this.gamePvd.init();
  }

  linkStart () {
    this.gamePvd.getPlayer()
      .then(player => {
        if (player) {
          this.player = player;
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  newGame(){
      const modal = this.modalCtrl.create("CharacterFormPage");
      modal.present();
  }

  resumeGame() {
    this.navCtrl.push('TowerPage');
  }

  deleteGame () {
    this.gamePvd.setPlayer(null);
    this.gamePvd.setCurrentStage(null);
    this.player = null
  }
}
