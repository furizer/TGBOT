const cards = document.querySelectorAll('.card')
const selectedCards = []

const data = [
    {
        "name": "Дурак",
        "img": "https://www.wiki93.ru/images/3/32/Tarot_00_Fool.jpg"
    },
    {
        "name": "Маг",
        "img": "https://www.wiki93.ru/images/3/30/Tarot_01_Magician.jpg"
    },
    {
        "name": "Жрица",
        "img": "https://www.wiki93.ru/images/a/af/Tarot_02_High_Priestess.jpg"
    },
    {
        "name": "Императрица",
        "img": "https://www.wiki93.ru/images/8/8c/Tarot_03_Empress.jpg"
    },
    {
        "name": "Император",
        "img": "https://www.wiki93.ru/images/9/9e/Tarot_04_Emperor.jpg"
    },
    {
        "name": "Жрец",
        "img": "https://www.wiki93.ru/images/2/23/Tarot_05_Hierophant.jpg"
    },
    {
        "name": "Влюбленные",
        "img": "https://www.wiki93.ru/images/4/44/Tarot_06_Lovers.jpg"
    },
    {
        "name": "Колесница",
        "img": "https://www.wiki93.ru/images/0/01/Tarot_07_Chariot.jpg"
    },
    {
        "name": "Сила",
        "img": "https://www.wiki93.ru/images/8/88/Tarot_08_Strength.jpg"
    },
    {
        "name": "Отшельник",
        "img": "https://www.wiki93.ru/images/0/01/Tarot_09_Hermit.jpg"
    },
    {
        "name": "Колесо фортуны",
        "img": "https://www.wiki93.ru/images/3/3d/Tarot_10_Wheel_of_Fortune.jpg"
    },
    {
        "name": "Справедливость",
        "img": "https://www.wiki93.ru/images/6/64/Tarot_11_Justice.jpg"
    },
    {
        "name": "Повешенный",
        "img": "https://www.wiki93.ru/images/2/2f/Tarot_12_Hanged_Man.jpg"
    },
    {
        "name": "Смерть",
        "img": "https://www.wiki93.ru/images/6/60/Tarot_13_Death.jpg"
    },
    {
        "name": "Умеренность",
        "img": "https://www.wiki93.ru/images/2/29/Tarot_14_Temperance.jpg"
    },
    {
        "name": "Дьявол",
        "img": "https://www.wiki93.ru/images/8/81/Tarot_15_Devil.jpg"
    },
    {
        "name": "Башня",
        "img": "https://www.wiki93.ru/images/9/9f/Tarot_16_Tower.jpg"
    },
    {
        "name": "Звезда",
        "img": "https://www.wiki93.ru/images/4/43/Tarot_17_Star.jpg"
    },
    {
        "name": "Луна",
        "img": "https://www.wiki93.ru/images/7/7b/Tarot_18_Moon.jpg"
    },
    {
        "name": "Солнце",
        "img": "https://www.wiki93.ru/images/0/01/Tarot_19_Sun.jpg"
    },
    {
        "name": "Суд",
        "img": "https://www.wiki93.ru/images/2/20/Tarot_20_Judgement.jpg"
    },
    {
        "name": "Мир",
        "img": "https://www.wiki93.ru/images/4/49/Tarot_21_World.jpg"
    },
    {
        "name": "Туз Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/1pw.jpg"
    },
    {
        "name": "Двойка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/2pw.jpg"
    },
    {
        "name": "Тройка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/3pw.jpg"
    },
    {
        "name": "Четверка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/4pw.jpg"
    },
    {
        "name": "Пятерка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/5pw.jpg"
    },
    {
        "name": "Шестерка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/6pw.jpg"
    },
    {
        "name": "Семерка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/7pw.jpg"
    },
    {
        "name": "Восьмерка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/8pw.jpg"
    },
    {
        "name": "Девятка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/9pw.jpg"
    },
    {
        "name": "Десятка Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/10pw.jpg"
    },
    {
        "name": "Паж Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/11pw.jpg"
    },
    {
        "name": "Рыцарь Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/12pw.jpg"
    },
    {
        "name": "Королева Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/13pw.jpg"
    },
    {
        "name": "Король Пентаклей",
        "img": "https://magya-online.ru/images/taro_raydera/14pw.jpg"
    },
    {
        "name": "Туз Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/1gw.jpg"
    },
    {
        "name": "Двойка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/2gw.jpg"
    },
    {
        "name": "Тройка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/3gw.jpg"
    },
    {
        "name": "Четверка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/4gw.jpg"
    },
    {
        "name": "Пятерка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/5gw.jpg"
    },
    {
        "name": "Шестерка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/6gw.jpg"
    },
    {
        "name": "Семерка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/7gw.jpg"
    },
    {
        "name": "Восьмерка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/8gw.jpg"
    },
    {
        "name": "Девятка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/9gw.jpg"
    },
    {
        "name": "Десятка Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/10gw.jpg"
    },
    {
        "name": "Паж Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/11gw.jpg"
    },
    {
        "name": "Рыцарь Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/12gw.jpg"
    },
    {
        "name": "Королева Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/13gw.jpg"
    },
    {
        "name": "Король Жезлов",
        "img": "https://magya-online.ru/images/taro_raydera/14gw.jpg"
    },
    {
        "name": "Туз Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/1kw.jpg"
    },
    {
        "name": "Двойка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/2kw.jpg"
    },
    {
        "name": "Тройка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/3kw.jpg"
    },
    {
        "name": "Четверка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/4kw.jpg"
    },
    {
        "name": "Пятерка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/5kw.jpg"
    },
    {
        "name": "Шестерка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/6kw.jpg"
    },
    {
        "name": "Семерка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/7kw.jpg"
    },
    {
        "name": "Восьмерка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/8kw.jpg"
    },
    {
        "name": "Девятка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/9kw.jpg"
    },
    {
        "name": "Десятка Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/10kw.jpg"
    },
    {
        "name": "Паж Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/11kw.jpg"
    },
    {
        "name": "Рыцарь Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/12kw.jpg"
    },
    {
        "name": "Королева Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/13kw.jpg"
    },
    {
        "name": "Король Кубков",
        "img": "https://magya-online.ru/images/taro_raydera/14kw.jpg"
    },
    {
        "name": "Туз Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/1mw.jpg"
    },
    {
        "name": "Двойка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/2mw.jpg"
    },
    {
        "name": "Тройка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/3mw.jpg"
    },
    {
        "name": "Четверка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/4mw.jpg"
    },
    {
        "name": "Пятерка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/5mw.jpg"
    },
    {
        "name": "Шестерка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/6mw.jpg"
    },
    {
        "name": "Семерка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/7mw.jpg"
    },
    {
        "name": "Восьмерка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/8mw.jpg"
    },
    {
        "name": "Девятка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/9mw.jpg"
    },
    {
        "name": "Десятка Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/10mw.jpg"
    },
    {
        "name": "Паж Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/11mw.jpg"
    },
    {
        "name": "Рыцарь Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/12mw.jpg"
    },
    {
        "name": "Королева Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/13mw.jpg"
    },
    {
        "name": "Король Мечей",
        "img": "https://magya-online.ru/images/taro_raydera/14mw.jpg"
    }
]

function addEventClick() {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('flipped')) return
            
            card.classList.toggle('flipped')

            if (!selectedCards.includes(card.querySelector('.card-back').getAttribute('name'))) {
                selectedCards.push(card.querySelector('.card-back').getAttribute('name'))
            }

            if (selectedCards.length === 3) finishSelect()
        })
    })
}

function shuffle() {
    let i = 0
    document.querySelector('.start-text').style.opacity = 0

    setInterval(() => {
        if (i === 8) return
        cards[i].classList.add('shuffled')
        cards[i].classList.add('disabled')
        i++
    }, 220)

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('disabled')
        })
        document.querySelector('.start-text').style.opacity = 1
        addEventClick()
    }, 2500)

}

// функция первоначального заполнения случайными картами
function fillCards() {
    const backCards = document.querySelectorAll('.card-back')

    const result = new Set()

    while (result.size < 8) {
        const randomIndex = Math.floor(Math.random() * data.length)
        result.add(data[randomIndex])
    }

    backCards.forEach((item, index) => {
        item.setAttribute('src', Array.from(result)[index].img)
        item.setAttribute('name', Array.from(result)[index].name)
    })
}

// завершаем выбор карт \ показываем анимацию и кнопку продолжить
function finishSelect() {
    setTimeout(() => {
        let cards = document.querySelectorAll('.card')
        cards.forEach(item => {
            item.classList.add('hidden')
        })
    }, 1500)


    setTimeout(() => {
        let cards = document.querySelectorAll('.card.flipped')
        cards.forEach((card, index) => {
            card.classList.toggle('selected')
            card.classList.toggle('selected-' + index)
        })
    }, 2500)

    setTimeout(() => {
        let cards = document.querySelectorAll('.card.hidden')
        cards.forEach(card => {
            if (!card.classList.contains('selected')) card.remove()
        })
    }, 3000)
}

fillCards()
shuffle()