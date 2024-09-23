import { Keyboard } from "grammy"

export const keyboards = {
    start: new Keyboard()
        .text('Сделать расклад').row()
        .text('Значения карт')
        .resized(),

    cardValue: new Keyboard()
        .text("Старший").row()
        .text("Младший")
        .oneTime()
        .resized(),

    oldest: new Keyboard()
        .text("Старший").row()
        .text("Младший")
        .oneTime()
        .resized(),

    yang: new Keyboard()
        .text("Старший").row()
        .text("Младший")
        .oneTime()
        .resized()
}
