import text from "../mock/text.js"
import { keyboards } from "../helpers/keyboards.js"

export default (bot) => {
    bot.api.setMyCommands([
        {
            command: 'start',
            description: 'Главное меню'
        }
    ])
    
    bot.command('start', async (ctx) => {

        await ctx.reply(text.start, {
            reply_markup: keyboards.start
        })

        ctx.session.pizzaCount--
        await ctx.reply(`У вас нет действующей подписки, осталось ${ctx.session.pizzaCount} запросов`)
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
        let decr = '\n\n Возникли проблемы? Пишите @furizer'
        let text = ctx.session.subscribe
            ? `У вас есть активная подписка до ${ctx.session.subscribeTo} ${decr}`
            : `У вас нет активной подписки ${decr}`

        await ctx.reply(text, {
            reply_markup: keyboards.subscribe
        })
    })

    bot.hears('Обратная связь💡', async (ctx) => {
        await ctx.reply(text.info)
    })

    bot.hears('🔙Назад', async (ctx) => {
        await ctx.reply(text.start, {
            reply_markup: keyboards.start
        })
    })
}