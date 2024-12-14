import { configDotenv } from "dotenv"
import { Bot, session } from "grammy"
import start from "./src/modules/start.js"
import cards from "./src/modules/cards.js"
import payments from './src/modules/payments.js';

configDotenv()

const bot = new Bot(process.env.API_TOKEN)

bot.use(session({
    initial: () => ({
        pizzaCount: 15,
        subscribe: false,
        subscribeTo: '',
        cardDay: ''
    })
}))

start(bot)

cards(bot)

payments(bot)

bot.catch(err => {
    console.log(err)
})

bot.start() 

