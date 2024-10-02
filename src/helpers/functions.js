import fs from 'fs'
import path from 'path'

export function getCardsMock() {
    return JSON.parse(
        fs.readFileSync(path.resolve(import.meta.dirname, '../mock/cards.json'))
    )
}

export function paySubscribe(interval = true) {
    
}

export function Subscribe(interval = true) {

}

export function checkSubscribe() {  
    return false
}

