const boxes = document.getElementsByClassName('box')
const colorCopied = document.querySelector('.color_copied')
const colorCode = document.getElementById('color_code')
const generateBtn = document.getElementById('generate')

generateBtn.addEventListener('click', function () {
    generateColor()
});

window.addEventListener('load', function () {
    generateColor()
})

window.addEventListener('keypress', function (e) {
    if (e.keyCode === 32) {
        generateColor()
    }
});

[...boxes].forEach(box => {
    box.addEventListener('click', function (e) {
        this.children[1].select()
        document.execCommand('copy')
        showAlert(this.children[1])
    })
})

function generateColor() {
    [...boxes].forEach(box => {
        let color = hexCode()
        box.children[0].style.background = color
        box.children[1].value = color
    })
}

function hexCode() {
    let r = parseInt(Math.floor(Math.random() * 256)).toString(16)
    let g = parseInt(Math.floor(Math.random() * 256)).toString(16)
    let b = parseInt(Math.floor(Math.random() * 256)).toString(16)

    let hex1 = r.length === 1 ? '0' + r : r
    let hex2 = g.length === 1 ? '0' + g : g
    let hex3 = b.length === 1 ? '0' + b : b

    return `#${hex1}${hex2}${hex3}`
}

function showAlert(value) {
    colorCode.innerHTML = value.value

    colorCopied.style.top = '30px'
    colorCopied.style.opacity = '1'

    setTimeout(() => {
        colorCopied.style.top = '0'
        colorCopied.style.opacity = '0'
    }, 1000)
}