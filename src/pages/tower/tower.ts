import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider} from "../../providers/game/game";
import { ModalController} from "ionic-angular";

/**
 * Generated class for the TowerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tower',
  templateUrl: 'tower.html',
})
export class TowerPage {

  public currentFloor;
  public fighter;
  gameSegment:string = 'tower';


  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public gameProvid: GameProvider) {
    this.gameProvid.getPlayer().then((player) => {
      this.currentFloor = player.floor;
    });


    this.gameProvid.getFighter()
      .then((fighter) => {
        this.fighter = fighter;
        console.log('player : ' + this.fighter.dmg);
      })
      .catch(err => console.log(err));

  }

  newStage(){
    const modal = this.modalCtrl.create("FightPage");
    modal.present();
  }

}
