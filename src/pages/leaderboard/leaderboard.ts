import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider} from "../../providers/game/game";

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {

 public ladder:any;

  constructor(public gameProvide: GameProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.gameProvide.getLadder()
      .then(ladder => {
      this.ladder = ladder
    })
      .catch(err => console.log(err))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');
  }

}
