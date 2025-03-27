window.addEventListener('load', () => {})

let input = document.getElementById('inputField')
let buttons = document.getElementById('actionsBody')

// document.addEventListener('keydown', clickOrPress)

buttons.addEventListener('click', clickOrPress)
let actionMemory = ''
let numberMemory = 0

function clickOrPress(event) {
    if (event.target.tagName === 'BUTTON') {
        const action = event.target.dataset.action
        console.log(`Made action: ${action}`) //Шаблонная строка

        switch (action) {
            case 'plus':
                actionMemory = '+'
                numberMemory = Number(input.value)
                input.value = ''
                break
            case 'minus':
                actionMemory = '-'
                numberMemory = Number(input.value)
                input.value = ''
                break
            case 'multiply':
                actionMemory = '*'
                numberMemory = Number(input.value)
                input.value = ''
                break
            case 'divide':
                actionMemory = '/'
                numberMemory = Number(input.value)
                input.value = ''
                break
            case 'exponent':
                actionMemory = '^'
                numberMemory = Number(input.value)
                input.value = ''
                break
            case 'factorial':
                let res = 1
                for (i = 1; i <= Number(input.value); i++) {
                    res *= i
                }
                input.value = res
                break
            case 'equals':
                switch (actionMemory) {
                    case '+':
                        input.value = numberMemory + Number(input.value)
                        break
                    case '-':
                        input.value = numberMemory - Number(input.value)
                        break
                    case '*':
                        input.value = numberMemory * Number(input.value)
                        break
                    case '/':
                        input.value = numberMemory / Number(input.value)
                        break
                    case '^':
                        input.value = Math.pow(
                            numberMemory,
                            Number(input.value)
                        )
                        break
                }

                break
            case 'addPoint':
                break
            case 'clear':
                input.value = 'C'
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
