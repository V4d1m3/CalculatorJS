window.addEventListener('load', () => {
    const mainFieldBody = document.querySelector('#mainFieldBody')
    const heightF = getComputedStyle(mainFieldBody).height
    mainFieldBody.style.setProperty('--heightF', heightF)

    // const input = document.querySelector('input')
    // const heightI = getComputedStyle(input).height
    // mainFieldBody.style.setProperty('--heightI', heightI)
})
