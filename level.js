const levels = [
    {
        id: 1,
        blocks: [
            'forward',
        ],
        game: {
            player: {
                direction: player_direction_right,
                x: 4,
                y: 5
            },
            goal: {
                x: 6,
                y: 5
            },
            path: [
                // [x, y]
                [4, 5],
                [5, 5],
                [6, 5],
            ]
        },
		max_blocks : 10,
    },
    {
        id: 2,
        max_blocks: 10,
        blocks: [
            'forward',
            'change_direction', 
        ],
        game: {
            player: {
                direction: player_direction_right,
                x: 3,
                y: 4
            },
            goal: {
                x: 6,
                y: 6
            },
            path: [
                // [x, y]
                [3, 4], 
				[4, 4], 
				[5, 4], 
				[6, 4],
				[6, 5], 
				[6, 6],
            ]
        }
    },
    {
        id: 3,
        max_blocks: 10,
        blocks: [
            'forward',
            'change_direction', 
        ],
        game: {
            player: {
                direction: player_direction_right,
                x: 3,
                y: 6
            },
            goal: {
                x: 7,
                y: 4
            },
            path: [
                // [x, y]
                [3, 6], 
				[4, 6], 
				[5, 6], 
				[5, 5], 
				[5, 4], 
				[6, 4], 
				[7, 4],
            ]
        }
    },
]
