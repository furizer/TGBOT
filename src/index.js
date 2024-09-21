import { configDotenv } from "dotenv"
import { Bot, Keyboard } from "grammy"
configDotenv()
const bot = new Bot(process.env.API_TOKEN)

// bot.api.setMyCommands(
//     [
//         {
//             command: 'start', description: 'Запуск Бота'
//         },
//         {
//             command: 'hello', description: 'Сказать'
//         },
//     ]
// )

bot.command('start', async (ctx) => {
    const keyboard = new Keyboard().text('Предсказание дня').row().text('Сделать расклад').row().text('Значения карт').resized()

    await ctx.react('❤‍🔥')
    await ctx.reply('a', {
        reply_markup: keyboard
    })

})

bot.command('hello', async (ctx) => {
    await ctx.reply('Привет')
})

bot.catch(err => {
    console.log(err)
})


bot.start() 