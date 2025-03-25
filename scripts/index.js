window.addEventListener('load', () => {
    const mainFieldBody = document.querySelector('#mainFieldBody')
    const heightF = getComputedStyle(mainFieldBody).height
    mainFieldBody.style.setProperty('--heightF', heightF)
})

let input = document.getElementById('inputField')
let buttons = document.getElementById('actionsBody')

document.addEventListener('keydown', clickOrPress)

buttons.addEventListener('click', clickOrPress)

function clickOrPress(event) {
    if (event.type === 'keydown') {
        const key = event.key
        if (
            [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9' /*, '.'*/,
            ].includes(key)
        ) {
            input.value += key
        }
    } else if (event.target.tagName === 'BUTTON') {
        const action = event.target.dataset.action
        console.log(`Made action: ${action}`) //Шаблонная строка

        switch (action) {
            case 'plus':
                input.value += ''
                break
            case 'minus':
                input.value += ''
                break
            case 'multiply':
                input.value += ''
                break
            case 'divide':
                input.value += ''
                break
            case 'equals':
                input.value += ''
                break
            case 'addPoint':
                break
            case 'clear':
                input.value = ''
                break
            case 'addZero':
                input.value += '0'
                break
            case 'addOne':
                input.value += '1'
                break
            case 'addTwo':
                input.value += '2'
                break
            case 'addThree':
                input.value += '3'
                break
            case 'addFour':
                input.value += '4'
                break
            case 'addFive':
                input.value += '5'
                break
            case 'addSix':
                input.value += '6'
                break
            case 'addSeven':
                input.value += '7'
                break
            case 'addEight':
                input.value += '8'
                break
            case 'addNine':
                input.value += '9'
                break
        }
    }
}
