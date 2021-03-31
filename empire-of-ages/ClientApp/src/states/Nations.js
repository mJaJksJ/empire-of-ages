const nations = {
    "Aztec": {
        "warriors": [
            {
                "name": "Eagle",
                "picture": "/images/Aztec/Eagle.png",
                "classes": [
                    "Infantry", "Spearman"
                ],
                "speed": 2,
                "hitpoints": 100,
                "attach": 10,
                "attach-distance": 2
            },
            {
                "name": "Jaguar",
                "picture": "/images/Aztec/Jaguar.png",
                "classes": [
                    "Infantry"
                ],
                "speed": 1,
                "hitpoints": 120,
                "attach": 12,
                "attach-distance": 1
            },
            {
                "name": "Plumed",
                "picture": "/images/Aztec/Plumed.png",
                "classes": [
                    "Infantry", "Archer"
                ],
                "speed": 1,
                "hitpoints": 80,
                "attach": 7,
                "attach-distance": 6
            }
        ]
    },
    "Hun": {
        "warriors": [
            {
                "name": "Kipchak",
                "picture": "/images/Hun/Kipchak.png",
                "classes": [
                    "Cavalry", "Archer"
                ],
                "speed": 4,
                "hitpoints": 350,
                "attach": 23,
                "attach-distance": 1
            },
            {
                "name": "Steppelancer",
                "picture": "/images/Hun/Steppelancer.png",
                "classes": [
                    "Cavalry", "Spearman"
                ],
                "speed": 3,
                "hitpoints": 320,
                "attach": 19,
                "attach-distance": 2
            },
            {
                "name": "Tarkan",
                "picture": "/images/Hun/Tarkan.png",
                "classes": [
                    "Cavalry"
                ],
                "speed": 3,
                "hitpoints": 330,
                "attach": 20,
                "attach-distance": 1
            }
        ]
    },
    "Mongol": {
        "warriors": [
            {
                "name": "CamelAssasin",
                "picture": "/images/Mongol/CamelAssasin.png",
                "classes": [
                    "Cavalry", "Camel"
                ],
                "speed": 2,
                "hitpoints": 380,
                "attach": 23,
                "attach-distance": 1
            },
            {
                "name": "Keshik",
                "picture": "/images/Mongol/Keshik.png",
                "classes": [
                    "Cavalry", "Spearman"
                ],
                "speed": 3,
                "hitpoints": 320,
                "attach": 19,
                "attach-distance": 2
            },
            {
                "name": "Tarkan",
                "picture": "/images/Mongol/Mangudai.png",
                "classes": [
                    "Cavalry", "Archer"
                ],
                "speed": 3,
                "hitpoints": 330,
                "attach": 20,
                "attach-distance": 1
            }
        ]
    },
    "Persian": {
        "warriors": [
            {
                "name": "Elephant",
                "picture": "/images/Persian/Elephant.png",
                "classes": [
                    "Cavalry"
                ],
                "speed": 2,
                "hitpoints": 800,
                "attach": 90,
                "attach-distance": 2
            },
            {
                "name": "Swordsman",
                "picture": "/images/Persian/Swordsman.png",
                "classes": [
                    "Infantry"
                ],
                "speed": 2,
                "hitpoints": 150,
                "attach": 13,
                "attach-distance": 1
            },
            {
                "name": "Savar",
                "picture": "/images/Persian/Savar.png",
                "classes": [
                    "Cavalry"
                ],
                "speed": 3,
                "hitpoints": 360,
                "attach": 24,
                "attach-distance": 1
            }
        ]
    },
    "Roman": {
        "warriors": [
            {
                "name": "Centurion",
                "picture": "/images/Roman/Centurion.png",
                "classes": [
                    "Cavalry"
                ],
                "speed": 3,
                "hitpoints": 400,
                "attach": 32,
                "attach-distance": 1
            },
            {
                "name": "Legionary",
                "picture": "/images/Roman/Legionary.png",
                "classes": [
                    "Infantry"
                ],
                "speed": 1,
                "hitpoints": 120,
                "attach": 16,
                "attach-distance": 2
            },
            {
                "name": "Skirmisher",
                "picture": "/images/Roman/Skirmisher.png",
                "classes": [
                    "Infantry", "Archer"
                ],
                "speed": 3,
                "hitpoints": 75,
                "attach": 8,
                "attach-distance": 5
            }
        ]
    },
};
export default nations;