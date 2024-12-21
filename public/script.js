const cards = document.querySelectorAll('.card')
const selectedCards = []

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped')
    })
})

// функция первоначального заполнения случайными картами
function fillCards() {

}

// завершаем выбор карт \ показываем анимацию и кнопку продолжить
function finishSelect() {

}
