import fs from 'fs'
import path from 'path'

export function getCardsMock() {
    return JSON.parse(
        fs.readFileSync(path.resolve(import.meta.dirname, '../mock/cards.json'))
    )
}

export function getTextMock() {
    return JSON.parse(
        fs.readFileSync(path.resolve(import.meta.dirname, '../mock/text.json'))
    )
}
