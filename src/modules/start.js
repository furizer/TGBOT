import text from "../mock/text.js"
import { keyboards } from "../helpers/keyboards.js"

export default (bot) => {
    bot.command('start', async (ctx) => {
        await ctx.reply(text.start, {
            reply_markup: keyboards.start
        })
    })

    bot.hears('Задать вопрос🧿🌟', async (ctx) => {
        await ctx.reply('Задайте свой вопрос')
    })

    bot.hears('Значения карт🃏', async (ctx) => {
        await ctx.reply('Выберите аркан', {
            reply_markup: keyboards.cardValue
        })
    })

    bot.hears('Виды раскладов⛩', async (ctx) => {
        await ctx.reply('Вот известные мне виды раскладов: ', {
            // reply_markup: keyboards.cardValue
        })
    })

    bot.hears('Подписка🪬', async (ctx) => {
        await ctx.reply('Раздел подписки в разработке, я буду вашим советником без ограничений!', {
            // reply_markup: keyboards.cardValue
        })
    })

    bot.hears('Обратная связь💡', async (ctx) => {
        await ctx.reply(text.info, {
            // reply_markup: keyboards.cardValue
        })
    })

    bot.hears('🔙Назад', async (ctx) => {
        await ctx.reply(text.start, {
            reply_markup: keyboards.start
        })
    })
}