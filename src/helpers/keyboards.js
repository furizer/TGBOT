import { Keyboard } from "grammy"
import { getCardsMock } from "./functions.js"

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

const oldestArray = getCardsMock()['oldest']
const wandsArray = getCardsMock()['yang']['wands']
const cupsArray = getCardsMock()['yang']['cups']
const disksArray = getCardsMock()['yang']['disks']
const swordsArray = getCardsMock()['yang']['swords']

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
        .text("Жезлы")
        .text("Диски").row()
        .text("Кубки")
        .text("Мечи").row()
        .text("🔙")
        .oneTime()
        .resized()
}

