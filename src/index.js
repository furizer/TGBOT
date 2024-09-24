import { configDotenv } from "dotenv"
import { Bot, session } from "grammy"
import { keyboards } from "./helpers/keyboards.js"
import start from "./modules/start.js"
import cards from "./modules/cards.js"

configDotenv()

const bot = new Bot(process.env.API_TOKEN)

bot.use(session({ initial: () => ({}) }))

start(bot)

cards(bot)

bot.catch(err => {
    console.log(err)
})

bot.start() 