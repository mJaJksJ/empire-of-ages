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
                "attach": 7,
                "attach-distance": 6
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
            }
        ]
    }

};

export default nations;