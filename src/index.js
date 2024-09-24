import { configDotenv } from "dotenv"
import { Bot, Keyboard, session } from "grammy"
import { getCardsMock } from "./helpers/functions.js"
import text from "./mock/text.js"
import { keyboards } from "./helpers/keyboards.js"

configDotenv()

const bot = new Bot(process.env.API_TOKEN)

bot.use(session({ initial: () => ({}) }))

const cardsMock = getCardsMock()

//
//
// 

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


bot.hears('Старший', async (ctx) => {
    await ctx.reply('Выберите карту', {
        reply_markup: keyboards.oldest
    })
})

bot.hears('Младший', async (ctx) => {
    await ctx.reply('Выберите масть', {
        reply_markup: keyboards.yang
    })
})

bot.hears('Жезлы', async (ctx) => {
    await ctx.reply('Выберите карту', {
        reply_markup: keyboards.wands
    })
})

bot.hears('Диски', async (ctx) => {
    await ctx.reply('Выберите карту', {
        reply_markup: keyboards.disks
    })
})

bot.hears('Кубки', async (ctx) => {
    await ctx.reply('Выберите карту', {
        reply_markup: keyboards.cups
    })
})

bot.hears('Мечи', async (ctx) => {
    await ctx.reply('Выберите карту', {
        reply_markup: keyboards.swords
    })
})

cardsMock['oldest'].forEach(card => {
    let string = ''
    string += `<b>${card.name}</b>\n${card.value}\n\n`
    string += `<b>Свет</b>\n${card.light}\n\n`
    string += `<b>Тень</b>\n${card.dark}\n\n`
    string += `<b>В раскладе на дела</b>\n${card.work}\n\n`
    string += `<b>В раскладе на любовь</b>\n${card.love}\n\n`
    bot.hears(card.name, async (ctx) => {
        await ctx.reply(string, { parse_mode: "HTML" },)
    })
})

for (const key in cardsMock['yang']) {
    cardsMock['yang'][key].forEach(card => {
        let string = ''
        string += `<b>${card.name}</b>\n${card.shortValue}\n`
        string += `\n${card.value}\n\n`
        string += `<b>В раскладе на дела</b>\n${card.work}\n\n`
        string += `<b>В раскладе на любовь</b>\n${card.love}\n\n`
        bot.hears(card.name, async (ctx) => {
            await ctx.reply(string, { parse_mode: "HTML", reply_markup: keyboards.yang },)
        })
    })
}

bot.hears('🔙Назад', async (ctx) => {
    await ctx.reply(text.start, {
        reply_markup: keyboards.start
    })
})

bot.catch(err => {
    console.log(err)
})

bot.start() 