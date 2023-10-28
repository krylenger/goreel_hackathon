
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
            }
        },
        ui:{
            balance: {
                staticText:{
                    text: 'BALANCE:',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "32px",

                        "fill": ['#71a5ff'],
                    },
                    anchorY: 0.5,
                    x: 0,
                    y: 0
                },
                dynamicText:{
                    text: '44',
                    postfix: '$',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "32px",
                        "fontWeight": 'bold',
                        "fill": ['#eae108'],
                    },
                    anchorY: 0.5,
                    x: 180,
                    y: 0
                },
                land:{
                    x: 140,
                    y: 700,
                },
                port:{
                    x: 20,
                    y: 1250,
                }
            },
            bet: {
                values: [0.5, 1, 2, 5, 10, 20, 50, 100],
                defaultValuesIndex: 1,
                staticText:{
                    text: 'BET:',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "32px",
                        "fontWeight": 'bold',
                        "fill": ['#71a5ff'],
                    },
                    anchorY: 0.5,
                    x: 0,
                    y: 0
                },
                dynamicText:{
                    text: '44',
                    postfix: '$',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "32px",
                        "fontWeight": 'bold',
                        "fill": ['#eae108'],
                    },
                    anchorY: 0.5,
                    x: 90,
                    y: 0
                },
                upClickArea:{
                    scaleOver: 1.3,
                    x: 100,
                    y: -40,
                    textureName: 'arrow_up',
                    // scale: 0.1
                },
                downClickArea:{
                    scaleOver: 1.3,
                    x: 20,
                    y: -40,
                    textureName: 'arrow_down',
                    // scale: 0.1
                },
                land:{
                    x: 550,
                    y: 700,
                },
                port:{
                    x: 300,
                    y: 1250,
                }
            },
            win: {
                staticText:{
                    text: 'WIN:',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "32px",
                        "fontWeight": 'bold',
                        "fill": ['#71a5ff'],
                    },
                    anchorY: 0.5,
                    x: 0,
                    y: 0
                },
                dynamicText:{
                    text: '44',
                    postfix: '$',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "32px",
                        "fontWeight": 'bold',
                        "fill": ['#eae108'],
                    },
                    anchorY: 0.5,
                    x: 90,
                    y: 0
                },
                land:{
                    x: 880,
                    y: 700,
                },
                port:{
                    x: 500,
                    y: 1250,
                }
            },
        }
    },
    loader:{
        textures:[
            {
                "name": "head",
                "srcs": "res/textures/money/head.png"
            },
            {
                "name": "tail",
                "srcs": "res/textures/money/tail.png"
            },
            {
                "name": "bg_land",
                "srcs": "res/textures/bg_land.png"
            },
            {
                "name": "bg_port",
                "srcs": "res/textures/bg_port.png"
            },
            {
                "name": "bet_text",
                "srcs": "res/textures/bet.png"
            },
            {
                "name": "arrow_down",
                "srcs": "res/textures/down.png"
            },
            {
                "name": "arrow_up",
                "srcs": "res/textures/up.png"
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
        ],
        fonts: [
            {
                "name": "Franklin",
                "srcs": "res/fonts/franklin.ttf",
            },

        ],
    }
}
