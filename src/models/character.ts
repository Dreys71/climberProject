export class Character {
  constructor(public name: string = "",
              public statPoints:number = 0,
              public str: number = 0,
              public dex: number = 0,
              public agi: number = 0,
              public int: number = 0,
              public credit: number = 0,
              public xp: number = 0,
              public skill: number = 0,
              public weapon: any = {},
              public armor: any = {
                stats:{
                  hp:0,
                  str:0,
                  dex:0,
                  agi:0,
                  int:0
                }
              },
              public weapons_inventory =  [],
              public armors_inventory =  [],
              public floor = 0
              ) {
  }
}
