export default [
      {
        name:"épée de l'apprenti",
        category:"épée légère",
        dmg: {
          basic: 5,
          str: 0.25,
          dex:0.1,
          agi:0.1,
          int:0.1,
          crit: {
            dmg: {
              basic: 15,
              str: 0.4,
              dex: 0.1,
              agi:0.1,
              int:0.1
            },
            chance: {
              basic: 20,
              str: 0,
              dex: 0.1,
              agi: 0.2,
              int: 0
            }
          },
          fail : {
            basic: 5,
            str : 0.2,
            dex : 0,
            agi : -0.5,
            int : -0.1
          }
        },
        price: 0,
        rarity: 0,
        img: "weapons/lightsword/1/",
        desc: "Une simple épée, trouvable dans tous les camps d'entrainement."
      },
      {
        name:"rapière légère",
        category:"épée légère",
        dmg: {
          basic: 6,
          str: 0.15,
          dex:0.25,
          agi:0.15,
          int:0.05,
          crit: {
            dmg: {
              basic: 9,
              str: 0.15,
              dex: 0.5,
              agi:0.25,
              int:0.1
            },
            chance: {
              basic: 10,
              str: 0,
              dex: 0.25,
              agi: 0.2,
              int: 0.2
            }
          },
          fail : {
            basic: 5,
            str : 0.2,
            dex : -0.3,
            agi : -0.3,
            int : -0.1
          }
        },
        price: 100,
        rarity: 0,
        img: "weapons/lightsword/2/",
        desc: "Une simple rapière, forgé dans les traditions. Une arme fiable au potentiel limité."
      },
      {
        name:"épée lourde en fer",
        category:"épée lourde",
        dmg: {
          basic: 12,
          str: 0.25,
          dex:0.10,
          agi:0.05,
          int:0.01,
          crit: {
            dmg: {
              basic: 23,
              str: 0.5,
              dex: 0.25,
              agi:0.1,
              int:0.1
            },
            chance: {
              basic: 5,
              str: 0.25,
              dex: 0.1,
              agi: 0.1,
              int: 0.1
            }
          },
          fail : {
            basic: 15,
            str : 0.15,
            dex : -0.1,
            agi : -0.05,
            int : -0.05
          }
        },
        price: 250,
        rarity: 0,
        img: "weapons/heavysword/1/",
        desc: "En voilà une solide épée ! Avec elle, nulle doute vous serez le roi des gros bras !"
      },
      {
        name:"hallebarde du boucher",
        category:"épée lourde",
        dmg: {
          basic: 15,
          str: 0.3,
          dex:0.10,
          agi:0.05,
          int:0.01,
          crit: {
            dmg: {
              basic: 19,
              str: 0.5,
              dex: 0.25,
              agi:0.1,
              int:0.1
            },
            chance: {
              basic: 0,
              str: 0.25,
              dex: 0.1,
              agi: 0.1,
              int: 0.1
            }
          },
          fail : {
            basic: 20,
            str : 0.10,
            dex : -0.25,
            agi : -0.05,
            int : -0.05
          }
        },
        price: 750,
        rarity: 1,
        img: "weapons/heavysword/2/",
        desc: "Cette hallebrade fût l'arme de prédilection des hordes du nord durant la dernière grande guerre."
      },
      {
        name:"épée en émeraude",
        category:"épée légère",
        dmg: {
          basic: 11,
          str: 0.15,
          dex:0.15,
          agi:0.15,
          int:0.15,
          crit: {
            dmg: {
              basic: 17,
              str: 0.20,
              dex: 0.20,
              agi:0.20,
              int:0.20
            },
            chance: {
              basic: 10,
              str: 0.20,
              dex: 0.20,
              agi: 0.20,
              int: 0.20
            }
          },
          fail : {
            basic: 25,
            str : -0.25,
            dex : -0.25,
            agi : -0.25,
            int : -0.25
          }
        },
        price: 1750,
        rarity: 2,
        img: "weapons/heavysword/2/",
        desc: "Cette épée légendaire nécessite une pleine maitrise et équilibre interne de son porteur"
      },
      {
        name:"épée sacrée en ivoire",
        category:"épée légère",
        dmg: {
          basic: 19,
          str: 0.30,
          dex:0.30,
          agi:0.10,
          int:0.10,
          crit: {
            dmg: {
              basic: 34,
              str: 0.40,
              dex: 0.35,
              agi:0.20,
              int:0.20
            },
            chance: {
              basic: 0,
              str: 0.70,
              dex: 0.50,
              agi: 0.20,
              int: 0.20
            }
          },
          fail : {
            basic: 0,
            str : 0.25,
            dex : 0.25,
            agi : 0.25,
            int : 0.25
          }
        },
        price: 3250,
        rarity: 3,
        img: "weapons/lightsword/4/",
        desc: "Cette épée autrefois la propriété d'un chef croisé lors des guerres de civilisation. Elle aurait été forger dans les défenses d'un monstre de l'ancien monde."
      }
];
