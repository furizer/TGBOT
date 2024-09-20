import { configDotenv } from "dotenv"
import { Bot } from "grammy"
configDotenv()
const bot = new Bot(process.env.API_TOKEN)


bot.api.setMyCommands(
    [
        {
            command: 'start', description: 'Запуск Бота'
        },
        {
            command: 'hello', description: 'Сказать'
        },
    ]
)

bot.command('start', async (ctx) => {
    await ctx.reply('Я бот')
})

bot.command('hello', async (ctx) => {
    await ctx.reply('Привет')
})

bot.catch(err => {
    console.log(err)
})


bot.start()