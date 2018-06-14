import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import skills from '../../../resources/json/skills';
import weapons from '../../../resources/json/weapons';
import armors from '../../../resources/json/armors';
import mobs from '../../../resources/json/mobs';
import { Character } from '../../models/character'
import { HttpClient } from "@angular/common/http";

/*
  Generated class for the GameProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameProvider {

  constructor(public storage: Storage, public http: HttpClient) {
  }

  init () {
    this.setSkills();
    this.setWeapons();
    this.setArmors();
    this.setMobs();
  }
  // Set skills
  setSkills () {
    this.storage.set('skills', skills);
  }
  // Set weapons
  setWeapons () {
    this.storage.set('weapons', weapons);
  }
  // Set armors
  setArmors () {
    this.storage.set('armors', armors);
  }
  // Set player
  setPlayer (player: Character) {
    if(player){
      player.weapons_inventory.push(player.weapon);
      player.armors_inventory.push(player.armor);
    }
    this.storage.set('player', player);
  }
  // Set current stage
  setCurrentStage (stage: any) {
    this.storage.set('currentStage', stage);
  }
  // get skills
  getSkills () {
    return this.storage.get('skills')
  }
  // get weapons
  getWeapons () {
    return this.storage.get('weapons')
  }
  // get armors
  getArmors () {
    return this.storage.get('armors')
  }
  // get player
  getPlayer () {
    return this.storage.get('player')
  }
  // get current stage
  getCurrentStage(){
    return this.storage.get('currentStage')
  }
  // get PlayerFightStats
  getFighter(){
    let getDmg = function (weapon,armor,str,agi,dex,int) {
      return Number(weapon.dmg.basic +
        ((armor.str+str)*weapon.dmg.str) +
        ((armor.dex+dex)*weapon.dmg.dex) +
        ((armor.agi+agi)*weapon.dmg.agi) +
        ((armor.int+int)*weapon.dmg.int))

    };
    let getDcc = function (weapon,armor,str,agi,dex,int) {
      return Number(weapon.dmg.crit.dmg.basic +
        ((armor.str+str)*weapon.dmg.crit.dmg.str) +
        ((armor.dex+dex)*weapon.dmg.crit.dmg.dex) +
        ((armor.agi+agi)*weapon.dmg.crit.dmg.agi) +
        ((armor.int+int)*weapon.dmg.crit.dmg.int))

    };
    let getCritChance = function (weapon,armor,str,agi,dex,int) {
      return Number(weapon.dmg.crit.chance.basic +
        ((armor.str+str)*weapon.dmg.crit.chance.str) +
        ((armor.dex+dex)*weapon.dmg.crit.chance.dex) +
        ((armor.agi+agi)*weapon.dmg.crit.chance.agi) +
        ((armor.int+int)*weapon.dmg.crit.chance.int))
    };
    let getFailChance = function (weapon,armor,str,agi,dex,int) {
      return Number(weapon.dmg.fail.basic +
        ((armor.str+str)*weapon.dmg.fail.str) +
        ((armor.dex+dex)*weapon.dmg.fail.dex) +
        ((armor.agi+agi)*weapon.dmg.fail.agi) +
        ((armor.int+int)*weapon.dmg.fail.int))
    };
    let getInit = function (armor,str,agi,dex,int) {
      return Number(
        armor.str + str +
        armor.dex + dex +
        armor.agi + agi +
        armor.int + int)
    };
    let fighter;
     return this.getPlayer().then(player => {
       console.log(player.armor.stats.hp);
      return fighter = {
        dmg: getDmg(player.weapon,player.armor.stats,player.str,player.agi,player.dex,player.int),
        dcc: getDcc(player.weapon,player.armor.stats,player.str,player.agi,player.dex,player.int),
        cc: getCritChance(player.weapon,player.armor.stats,player.str,player.agi,player.dex,player.int),
        ec: getFailChance(player.weapon,player.armor.stats,player.str,player.agi,player.dex,player.int),
        skill: player.skill,
        init: getInit(player.armor.stats,player.str,player.agi,player.dex,player.int),
        escape: player.armor.stats.agi + player.agi,
        hp: this.getHp(player.armor.stats,player.xp,player.skill)
      }
    });
  }
  // Retourne les HP totaux du personnage
  getHp(armor,xp,skill){
    console.log(Number(150 + armor.hp + (this.xpToLvl(xp)*50)));
    return Number(150 + armor.hp + (this.xpToLvl(xp)*50)) * (skill === 'SPE_HP' ? 1.2 : 1)
  }

  //get mobs
  getMobs(){
    return this.storage.get('mobs')
  }
  //set mobs
  setMobs(){
    this.storage.set('mobs', mobs);
  }
  // retourne les mobs disponible pour un étage
  async getValidMobs(floor: number) {
    let mobs = await this.storage.get('mobs');
    let validMobs = [];
    for (let mob of mobs) {
      if (mob.min_floor <= floor && mob.max_floor >= floor && ((mob.isBoss && floor%10 === 0) || !mob.isBoss)) {
        mob.currentHp = mob.hp;
        validMobs.push(mob);
      }
    }
    return validMobs;
  }

  xpToLvl(xp){
    return Math.floor(xp/1000) + 1;
  }

  endOfGame(player){
    this.newScore(player)
      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.setPlayer(null);
    this.setCurrentStage(null);
  }

  getLadder(){
    return this.http.get('http://climber.alexisjc.com/api/ladder').toPromise()
  }

  newScore(player) {
    let score = {
      "player": player.name,
      "floor": player.floor,
      "credits": player.credits,
      "xp": player.xp
    };
    return this.http.post('http://climber.alexisjc.com/api/ladder', score).toPromise();
  }
}
