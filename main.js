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
            // p2 variables
            p2TotalScore: 0,
            p2RoundScore: 0,
            p2RoundState: false,
            dice1: 0,
            dice2: 0,
            dice3: 0,

        };
    },
    methods: {
        restartGame() {
            // do this later
        },
        roll() {
            return Math.floor(Math.random() * 6 + 1)
        },
       
    }
}).mount('#app')