import { configDotenv } from "dotenv"
import { Bot, Keyboard, session } from "grammy"
import { getCardsMock, getTextMock } from "./helpers/functions.js"
import { keyboards } from "./helpers/keyboards.js"

configDotenv()

const bot = new Bot(process.env.API_TOKEN)

bot.use(session({ initial: () => ({}) }))

const cardsMock = getCardsMock()
const textMock = getTextMock()

//
//
// 

bot.command('start', async (ctx) => {
    await ctx.reply('Привет! Я твой личный бот таролог', {
        reply_markup: keyboards.start
    })
})

bot.hears('Сделать расклад', async (ctx) => {
    await ctx.reply('Задайте свой вопрос')
})

bot.hears('Значения карт', async (ctx) => {
    await ctx.reply('Выберите аркан', {
        reply_markup: keyboards.cardValue
    })

})

bot.hears('Старший', async (ctx) => {
    await ctx.reply('Выберите карту', {
        reply_markup: keyboards.oldest
    })

})

bot.hears('Младший', async (ctx) => {
    const keyboard = new Keyboard()
        .text("Старший").row()
        .text("Младший")
        .oneTime()
        .resized()

    await ctx.reply('Выберите масть', {
        reply_markup: keyboard
    })

})

bot.catch(err => {
    console.log(err)
})


bot.start() 