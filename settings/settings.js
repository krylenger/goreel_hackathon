
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
                    x: 430,
                    y: 150,
                },
                port:{
                    x: 190,
                    y: 410,
                },
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
                }
            },

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
                }
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
                        "fontSize": "30px",
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
                        "fontSize": "30px",
                        "fill": ['#d0d0d0'],
                    },
                    anchorY: 0.5,
                    x: 120,
                    y: 0
                },
                land:{
                    x: 45,
                    y: 600,
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
                    textureName: 'bet_text',
                    x: 0,
                    y: 0
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
                    x: 970,
                    y: 200,
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
                    y: 100,
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
                    y: 500,
                },
                port:{
                    x: 524,
                    y: 1105,
                }
            }
        }
    },
    loader:{
        textures:[
            {
                "name": "bg_land",
                "srcs": "res/textures/bg_land.png"
            },
            {
                "name": "bg_port",
                "srcs": "res/textures/bg_port.png"
            },
            {
                "name": "bg_bonus_land",
                "srcs": "res/textures/bg_bonus_land.png"
            },
            {
                "name": "bg_bonus_port",
                "srcs": "res/textures/bg_bonus_port.png"
            },
            {
                "name": "bet_text",
                "srcs": "res/textures/bet_text.png"
            },
            {
                "name": "total_win_text",
                "srcs": "res/textures/total_win_text.png"
            },
            {
                "name": "arrow_down",
                "srcs": "res/textures/down.png"
            },
            {
                "name": "rectangle",
                "srcs": "res/textures/rectangle.png"
            },
            {
                "name": "arrow_up",
                "srcs": "res/textures/up.png"
            },
            {
                "name": "play_btn",
                "srcs": "res/textures/play_btn.png"
            },
            {
                "name": "heads_and_tails",
                "srcs": "res/textures/small_games/placeholders/heads_and_tails.png"
            },
            {
                "name": "thimbles",
                "srcs": "res/textures/small_games/placeholders/thimbles.png"
            },
            {
                "name": "wheel_of_fortune",
                "srcs": "res/textures/small_games/placeholders/wheel_of_fortune.png"
            },
            {
                "name": "krug",
                "srcs": "res/textures/small_games/krug.png"
            },
            {
                "name": "drum",
                "srcs": "res/textures/small_games/inside.png"
            },
            {
                "name": "lamps",
                "srcs": "res/textures/small_games/lamps.png"
            },

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
        ],
        fonts: [
            {
                "name": "Franklin",
                "srcs": "res/fonts/franklin.woff",
            },

        ],
    }
}
