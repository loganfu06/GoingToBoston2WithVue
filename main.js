import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
createApp({
    data() {
        return {
            gameStart: false,
            winner: false,
            // p1 variables
            p1TotalScore: 0,
            p1RoundScore: 0,
            p1RoundState: false,
            p1InitialDice: 0,
            // p2 variables
            p2InitialDice: 0,
            p2TotalScore: 0,
            p2RoundScore: 0,
            p2RoundState: false,
            dice1: 0,
            dice2: 0,
            dice3: 0,
            // round variables
            totalRounds: 1,
            currentRound: 0,
            firstPlayer: 0,
            

        };
    },
    methods: {
        restartGame() {
            this.gameStart = false
            this.winner = false
            // p1 variables
            this.p1TotalScore = 0
            this.p1RoundScore = 0
            this.p1RoundState = false
            this.p1InitialDice = 0

            // p2 variables
            this.p2TotalScore = 0
            this.p2RoundScore = 0
            this.p2RoundState = false
            this.p2InitialDice = 0

            this.dice1 = 0
            this.dice2 = 0
            this.dice3 = 0
            // round variables
            this.totalRounds = 1
            this.currentRound = 0
            this.firstPlayer = 0
        },
        startGame() {
            if (this.totalRounds <= 0) {
                alert("Please choose a positive number of rounds")
            }
            else {
                this.gameStart = true

            }
        },
        roll() {
            return Math.floor(Math.random() * 6 + 1)
        },
       
    }
}).mount('#app')