const board = document.querySelector('#board')
const colors = ['#00ff00', '#ff1493', '#00ffff', '#ff4500', '#00bfff', '#ffd700', '#6a5acd', '8a2be2']
const SQUARES_NUMBER = 700

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseover', setColor)

    // square.addEventListener('mouseleave', () => removeColor(square))

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px rgba(41, 8, 8, 0.959)` 
}

// function getRandomColor() {
//     const index = Math.floor(Math.random() * colors.length)
//     return colors[index]
// }

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}