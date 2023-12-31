
export const settings = {
    'backgroundColor': '#353535',
    game:{
        main:{
            bg:{
                land:{
                    textureName: 'bg_land'
                },
                port:{
                    textureName: 'bg_port'
                }
            },
            cards:{
                name: 'card',
                placeholders:[
                    {
                        textureName:'heads_and_tails',
                        id: 0,
                    },
                    {
                        textureName:'thimbles',
                        id: 1,
                    },
                    {
                        textureName:'wheel_of_fortune',
                        id: 2,
                    },
                ],
                land: {
                    x: 500,
                    y: 180,
                },
                port:{
                    x: 190,
                    y: 410,
                },
            },
            chooseText: {
                text: 'Please select a card to play the game',
                style:{
                    "fontFamily":'Franklin',
                    "fontSize": "28px",
                    "fontWeight": 'normal',
                    "fill": ['#ffffff'],
                    align: 'center'
                },
                anchorX: 0.5,
                anchorY: 0.5,
                x: 172,
                y: 464
            }
        },
        wheelOfFortune:{
            bg:{
                land:{
                    textureName: 'bg_bonus_land'
                },
                port:{
                    textureName: 'bg_bonus_port'
                }
            },
            wheel:{
                bgFrame:{
                    textureName: 'krug'
                },
                drum:{
                    anchorX: 0.5,
                    anchorY: 0.5,
                    textureName: 'drum',
                    x: 285,
                    y: 288
                },
                underFrame:{
                    textureName: 'lamps',
                    x: -13,
                    y: 8
                },
                light:{
                  name: 'light',
                    x: 288,
                    y: 287
                },
                land:{
                    x: 350,
                    y: 50
                },
                port:{
                    x: 70,
                    y: 375
                },
                exitButtonCont: {
                    name: 'exitButtonCont',
                    land:{
                        x: 850,
                        y: 20
                    },
                    port:{
                        x: 580,
                        y: -300
                    }
                },
                exitButton:{
                    textureName: 'exit',
                    scaleOver: 1.1,
                },
            },
        },
        headAndTail:{
            bg:{
                land:{
                    textureName: 'bg_bonus_land'
                },
                port:{
                    textureName: 'bg_bonus_port'
                }
            },
            mainContainer:{
                bgFrame:{
                    textureName: 'krug'
                },
                diamondCoin:{
                    anchorX: 0.5,
                    anchorY: 0.5,
                    textureName: 'diamondCoin',
                    x: 150,
                    y: 288,
                    scaleOver: 1.1,
                },
                crownCoin:{
                    anchorX: 0.5,
                    anchorY: 0.5,
                    textureName: 'crownCoin',
                    x: 450,
                    y: 288,
                    scaleOver: 1.1,
                },
                chosenSideCont: {
                    name: 'chosenSideCont',
                    land:{
                        x: 25,
                        y: 100
                    },
                    port:{
                        x: 25,
                        y: 50
                    }
                },
                chosenDiamond:{
                    anchorX: 0.5,
                    anchorY: 0.5,
                    textureName: 'diamondCoin',
                    height: 75,
                    width: 75,
                    x: 0,
                    y: 0,
                },
                chosenCrown:{
                    anchorX: 0.5,
                    anchorY: 0.5,
                    textureName: 'crownCoin',
                    height: 75,
                    width: 75,
                    x: 0,
                    y: 0,
                },
                chooseHeader: {
                    text: 'Please choose Diamond or Crown.',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "28px",
                        "fontWeight": 'normal',
                        "fill": ['#ffffff'],
                        align: 'center'
                    },
                    anchorX: 0.5,
                    anchorY: 0.5,
                    x: 304,
                    y: 480
                },
                coinSpine: {
                    name: 'coinSpine',
                    land:{
                        x: 288,
                        y: 500
                    },
                    port:{
                        x: 288,
                        y: 450
                    }
                },
                land:{
                    x: 350,
                    y: 50
                },
                port:{
                    x: 70,
                    y: 375
                },
                exitButtonCont: {
                    name: 'exitButtonCont',
                    land:{
                        x: 850,
                        y: 30
                    },
                    port:{
                        x: 570,
                        y: -300
                    }
                },
                exitButton:{
                    textureName: 'exit',
                    scaleOver: 1.1,
                }
            }

        },
        thimbles:{
            bg:{
                land:{
                    textureName: 'bg_bonus_land'
                },
                port:{
                    textureName: 'bg_bonus_port'
                }
            },
            thimblesSpine: {
                name: 'cap',
                land:{
                    x: 643,
                    y: 530
                },
                port:{
                    x: 362,
                    y: 850
                },
            },
            exitButtonCont: {
                name: 'exitButtonCont',
                land:{
                    x: 560,
                    y: -450
                },
                port:{
                    x: 280,
                    y: -780
                }
            },
            exitButton:{
                textureName: 'exit',
                scaleOver: 1.1,
            },
            chooseText: {
                text: 'Please, choose a thimble!',
                style:{
                    "fontFamily":'Franklin',
                    "fontSize": "28px",
                    "fontWeight": 'normal',
                    "fill": ['#ffffff'],
                },
                anchorX: 0.5,
                anchorY: 0.5,
                x: 0,
                y: 100
            }

        },
        ui:{
            balance: {
                staticText:{
                    text: 'Balance:',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "34px",
                        "fill": ['#d0d0d0'],
                    },
                    anchorY: 0.5,
                    x: 0,
                    y: 0
                },
                dynamicText:{
                    text: '1000',
                    postfix: '$',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "34px",
                        "fill": ['#d0d0d0'],
                    },
                    anchorY: 0.5,
                    x: 130,
                    y: 0
                },
                land:{
                    x: 30,
                    y: 594,
                },
                port:{
                    x: 50,
                    y: 1220,
                }
            },
            bet: {
                values: [0.5, 1, 2, 5, 10, 20, 50, 100],
                defaultValuesIndex: 2,
                staticText:{
                    land:{
                        x: 150,
                        y: -120,
                        textureName: 'bet_text',
                    },
                    port:{
                        x: 0,
                        y: 0,
                        textureName: 'bet_text',
                    }
                },
                rectangle: {
                    x: 140,
                    y: -28,
                    textureName: 'rectangle'
                },
                dynamicText:{
                    text: '44',
                    postfix: '$',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "52px",
                        "fontWeight": 'bold',
                        "fill": ['#e4ac19','#f3e047', '#e4ac19'],
                    },
                    anchorX: 0.5,
                    anchorY: 0.5,
                    x: 216,
                    y: 25
                },
                upClickArea:{
                    scaleOver: 1.15,
                    x: 216,
                    y: -40,
                    textureName: 'arrow_up',
                    scale: 0.7
                },
                downClickArea:{
                    scaleOver: 1.15,
                    x: 216,
                    y: 95,
                    textureName: 'arrow_down',
                    scale: 0.7
                },
                land:{
                    x: 910,
                    y: 260,
                },
                port:{
                    x: 50,
                    y: 1080,
                }
            },
            win: {
                staticText:{
                   textureName: 'total_win_text',
                },
                dynamicText:{
                    text: '0',
                    postfix: '$',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "80px",
                        "fontWeight": 'bold',
                        "fill": ['#e4ac19','#f3e047', '#e4ac19'],
                    },
                    anchorX: 0.5,
                    anchorY: 0.5,
                    x: 110,
                    y: 90
                },
                land:{
                    x: 50,
                    y: 130,
                },
                port:{
                    x: 246,
                    y: 100,
                }
            },
            playBtn:{
                btn:{
                    scaleOver: 1.1,
                    textureName: 'play_btn'
                },
                land:{
                    x: 1120,
                    y: 590,
                },
                port:{
                    x: 524,
                    y: 1105,
                }
            },
            soundBtn: {
                textureName: 'sound_on',
                textureNames: ['sound_off', 'sound_on'],
                scaleOver: 1.1,
                land:{
                    x: 76,
                    y: 70,
                },
                port:{
                    x: 74,
                    y: 74,
                }
            }
        },
        winScenes:{
            bigWin:{
                name: 'big_win'
            },
            regularWin:{
                name: 'win'
            },
            land:{
                x: 650,
                y: 320,
                scale: 1
            },
            port:{
                x: 360,
                y: 600,
                scale: 0.8
            }
        },
        tutorial:{
            name: 'screen'
        }
    },
    loader:{
        textures:[
            {
                "name": "bg",
                "srcs": "res/textures/bg.json"
            },
            {
                "name": "bg_bonus",
                "srcs": "res/textures/bg_bonus.json"
            },
            {
                "name": "krug",
                "srcs": "res/textures/krug.png"
            },
            {
                "name": "small_games",
                "srcs": "res/textures/small_games.json"
            },
            {
                "name": "ui",
                "srcs": "res/textures/ui.json"
            }
        ],
        spines: [
            {
                "name": "cap",
                "srcs": "res/spines/cap/cap.json"
            },
            {
                "name": "card",
                "srcs": "res/spines/card/card.json"
            },
            {
                "name": "money",
                "srcs": "res/spines/money/money.json"
            },
            {
                "name": "light",
                "srcs": "res/spines/wheel/wheel.json"
            },
            {
                "name": "coinSpine",
                "srcs": "res/spines/money/money.json"
            },
            {
                "name": "big_win",
                "srcs": "res/spines/wins/big_win.json"
            },
            {
                "name": "win",
                "srcs": "res/spines/wins/win.json"
            },
            {
                "name": "screen",
                "srcs": "res/spines/tutorial/screen.json"
            }
        ],
        fonts: [
            {
                "name": "Franklin",
                "srcs": "res/fonts/franklin.woff",
            },
        ],
    }
}
