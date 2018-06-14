import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GameProvider } from "../../providers/game/game";
import { Character} from "../../models/character";

/**
 * Generated class for the FightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fight',
  templateUrl: 'fight.html',
})
export class FightPage {

  public player = new Character();
  public fighter = {
    hp:0,
    cc:0,
    ec:0,
    dmg:0,
    dcc:0
  };
  public current_fighter_hp = 0;
  public mobs: any;
  public currentFloor = {
    mobs: []
  };
  public logs = [];


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public gameProvid: GameProvider, public navParams: NavParams) {
    this.gameProvid.getPlayer().then(player => this.player = player);
    this.gameProvid.getCurrentStage().then(floor => {
      if(floor){
        console.log('Etage déjà en cours, il va etre chargé');
        this.currentFloor = floor;
      }
      else {
        console.log('Aucun étage en cours, il va etre cr&e');
        this.createFloor(this.player.floor + 1);
      }
    });
    this.gameProvid.getFighter().then(fighter => {
      this.fighter = fighter;
      this.current_fighter_hp = fighter.hp;
      console.log(this.current_fighter_hp);
    });
  }

  async createFloor(floor: number){
      let floorValue = 0;
      this.mobs = await this.gameProvid.getValidMobs(floor);

      console.log('mobs valid:' + this.mobs);
      while (floorValue < this.getmaxValueFloor(floor)) {
        let temp_mob = this.mobs[Math.floor(Math.random() * this.mobs.length)];

        if (temp_mob.value + floorValue <= (1.2 * this.getmaxValueFloor(floor))) {
          console.log('mobs accepté');
          this.currentFloor.mobs.push(temp_mob);
          floorValue += temp_mob.value;
        } else {
          console.log('mobs pas accepté');
        }
      }

    this.gameProvid.setCurrentStage(this.currentFloor)
}

  getmaxValueFloor(floor){
    return 300 * 1.3 * floor
  }

  startFight(){
    console.log('GAME START');
    this.logs.push('Le combat commence');
    // 1 init order
    let i = 0;
    while(this.current_fighter_hp > 0 && this.currentFloor.mobs.length && i < 5000){
      i++;
      let fighterTarget = this.currentFloor.mobs[Math.floor(Math.random() * this.currentFloor.mobs.length)];
      console.log(fighterTarget);
      let isCrit = false;
      let isEc = false;
      if(Math.floor(Math.random() * 100) > this.fighter.ec){
        if(Math.floor(Math.random() * 100) < this.fighter.cc){
            // CRIT
          fighterTarget.currentHp -= this.fighter.dcc;
          this.logs.push('Vous faites un coup critique sur ' + fighterTarget.name + '(-' + this.fighter.dcc + ')');
          if(fighterTarget.currentHp <= 0){
            this.currentFloor.mobs.slice(this.currentFloor.mobs.indexOf(fighterTarget), 1);
            this.player.xp += fighterTarget.xp;
            this.player.credit += fighterTarget.gold;
            this.logs.push(fighterTarget.name + ' est mort. +' + fighterTarget.xp + 'xp, +' + fighterTarget.gold + ' golds');
          }
        }
        else {
          // NO CRIT
          fighterTarget.currentHp -= this.fighter.dmg;
          this.logs.push('Vous faites un coup critique sur ' + fighterTarget.name + '(-' + this.fighter.dcc + ')');
          if(fighterTarget.currentHp <= 0){
            this.currentFloor.mobs.splice(this.currentFloor.mobs.indexOf(fighterTarget), 1);
            this.player.xp += fighterTarget.xp;
            this.player.credit += fighterTarget.gold;
            this.logs.push(fighterTarget.name + ' est mort. +' + fighterTarget.xp + 'xp, +' + fighterTarget.gold + ' golds');
          }
        }
      }
      for(let mob of this.currentFloor.mobs){
        this.current_fighter_hp -= mob.dmg;
        this.logs.push(mob.name + ' vous ataque et vous inflige ' + mob.dmg + ' dégats.');
        if(this.current_fighter_hp <= 0){
          this.logs.push('YOU DIE');
          /*
          API CALLS
           */
          this.gameProvid.endOfGame(this.player);
        }

      }
    }

    if (this.current_fighter_hp > 0) {
      this.logs.push('Vous avez gagné !');
      this.player.floor++;
      this.player.statPoints += 5;
      this.gameProvid.setPlayer(this.player);
    }
  }

  dismiss() {

    this.viewCtrl.dismiss();
    this.navCtrl.push("GamePage");

  }
}
