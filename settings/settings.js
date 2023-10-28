
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
                        name: 'headsAndTails',
                        textureName:'',
                        id: 0,
                    },
                    {
                        name: 'thimbles',
                        textureName:'',
                        id: 1,
                    },
                    {
                        name: 'wheelOfFortune',
                        textureName:'',
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
                    text: '11144',
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
                defaultValuesIndex: 1,
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
                    x: 950,
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
                    text: '44',
                    postfix: '$',
                    style:{
                        "fontFamily":'Franklin',
                        "fontSize": "100px",
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
                    x: 1090,
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
