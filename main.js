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
            // round variables
            totalRounds: 1,
            currentRound: 0,
            firstPlayer: 0,
            currentDiceRolled: 0,
            dice1: 0,
            dice2: 0,
            dice3: 0,


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


            // round variables
            this.totalRounds = 1
            this.currentRound = 0
            this.firstPlayer = 0
            this.currentDiceRolled = 0
            this.dice1 = 0
            this.dice2 = 0
            this.dice3 = 0

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
            if (this.p1RoundState == true) {
                if (this.currentDiceRolled == 0) {
                    this.dice1 = Math.floor(Math.random() * 6 + 1)
                    this.dice2 = Math.floor(Math.random() * 6 + 1)
                    this.dice3 = Math.floor(Math.random() * 6 + 1)
                    this.p1RoundScore += Math.max(this.dice1, this.dice2, this.dice3)
                    this.currentDiceRolled++
                }
                else if(this.currentDiceRolled == 1) {
                    this.dice1 = Math.floor(Math.random() * 6 + 1)
                    this.dice2 = Math.floor(Math.random() * 6 + 1)
                    this.p1RoundScore += Math.max(this.dice1, this.dice2)
                    this.currentDiceRolled++
                }
                else if(this.currentDiceRolled == 2) {
                    this.dice1 = Math.floor(Math.random() * 6 + 1)
                    this.p1RoundScore += this.dice1
                    this.currentDiceRolled++
                    if(this.firstPlayer == 2) {
                        this.endRound()
                    }
                }
            }
            else if (this.p2RoundState) {
                if (this.currentDiceRolled == 0) {
                    this.dice1 = Math.floor(Math.random() * 6 + 1)
                    this.dice2 = Math.floor(Math.random() * 6 + 1)
                    this.dice3 = Math.floor(Math.random() * 6 + 1)
                    this.p2RoundScore += Math.max(this.dice1, this.dice2, this.dice3)
                    this.currentDiceRolled++
                }
                else if(this.currentDiceRolled == 1) {
                    this.dice1 = Math.floor(Math.random() * 6 + 1)
                    this.dice2 = Math.floor(Math.random() * 6 + 1)
                    this.p2RoundScore += Math.max(this.dice1, this.dice2)
                    this.currentDiceRolled++
                }
                else if(this.currentDiceRolled == 2) {
                    this.dice1 = Math.floor(Math.random() * 6 + 1)
                    this.p2RoundScore += this.dice1
                    this.currentDiceRolled++
                    if(this.firstPlayer == 1) {
                        this.endRound()
                    }
                }
            }
            console.log(this.dies)
        },
        resetInitialDice() {
            this.p1InitialDice = 0
            this.p2InitialDice = 0
        },
        startRound() {
            if (this.p1InitialDice > this.p2InitialDice) {
                this.firstPlayer = 1
                this.p1RoundState = true
                this.p2RoundState = false
                this.currentDiceRolled = 0
            }
            else if(this.p1InitialDice < this.p2InitialDice){
                this.firstPlayer = 2
                this.p1RoundState = false
                this.p2RoundState = true
                this.currentDiceRolled = 0
            }
            this.currentRound++
            this.p1RoundScore = 0
            this.p2RoundScore = 0
        },
        continueRound() {
            if(this.p1RoundState == true) {
                this.p1RoundState = false
                this.p2RoundState = true
            }
            else {
                this.p1RoundState = true
                this.p2RoundState = false
            }
            this.currentDiceRolled = 0
        },
        endRound() {
            if(this.p1RoundScore > this.p2RoundScore) {
                this.p1TotalScore++
            }
            else if(this.p1RoundScore < this.p2RoundScore) {
                this.p2TotalScore++
            }
        }
       
    }
}).mount('#app')