import { Keyboard, InlineKeyboard } from "grammy"
import { getCardsMock } from "./functions.js"

const oldestArray = getCardsMock()['oldest']
const wandsArray = getCardsMock()['yang']['wands']
const cupsArray = getCardsMock()['yang']['cups']
const disksArray = getCardsMock()['yang']['disks']
const swordsArray = getCardsMock()['yang']['swords']

function prepareNameArray(fromArray) {
    const result = []
    fromArray.forEach((item, index) => {
        if (index % 2 !== 0) {
            return
        }
        result.push([item.name, fromArray[index + 1]?.name])
    })
    result.push(['🔙Назад'])
    return result
}

export const keyboards = {
    start: new Keyboard()
        .text('Задать вопрос🧿🌟').row()
        .text('Значения карт🃏')
        .text('Виды раскладов⛩').row()
        .text('Карта дня🌞')
        .text('Подписка🪬').row()
        .text('Обратная связь💡')
        .resized().oneTime(),

    cardValue: new Keyboard()
        .text("Старший").row()
        .text("Младший").row()
        .text("🔙Назад")
        .oneTime()
        .resized(),

    oldest: Keyboard.from(prepareNameArray(oldestArray)),

    wands: Keyboard.from(prepareNameArray(wandsArray)),

    cups: Keyboard.from(prepareNameArray(cupsArray)),

    disks: Keyboard.from(prepareNameArray(disksArray)),

    swords: Keyboard.from(prepareNameArray(swordsArray)),

    yang: new Keyboard()
        .text("Жезлы 🪄")
        .text("Пентакли 💿").row()
        .text("Кубки 🍷")
        .text("Мечи ⚔️").row()
        .text("🔙Назад")
        .oneTime()
        .resized(),
    
    subscribe: new InlineKeyboard()
        .text('10 запросов 99 рублей').row()
        .text('Безлимит 7 дней 199 рублей').row()
        .text('Безлимит 14 дней 299 рублей').row()
        .text('Безлимит 30 дней 399 рублей').row()
}

