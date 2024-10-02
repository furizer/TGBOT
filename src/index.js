import { configDotenv } from "dotenv"
import { Bot, session } from "grammy"
import start from "./modules/start.js"
import cards from "./modules/cards.js"

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
