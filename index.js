import { configDotenv } from "dotenv"
import { Bot, session } from "grammy"
import start from "./src/modules/start.js"
import cards from "./src/modules/cards.js"

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

bot.catch(err => {
    console.log(err)
})

bot.start() 
