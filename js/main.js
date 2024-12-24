'use strict'

function onBallClick(elBall, maxDiameter) {
    var size = parseInt(elBall.style.width) || 100
    size += getRandomInt(20, 61)
    if (size >= maxDiameter) size = 100
    
    elBall.style.width = elBall.style.height = size + 'px'
    elBall.innerText = size

    elBall.style.background = getRandomColor()
}

function onBallSwap() {
    var elBallOne = document.querySelector('.one')
    var elBallTwo = document.querySelector('.two')
    
    var aux = elBallOne.style.background || '#4da'
    elBallOne.style.background = elBallTwo.style.background || '#4ad'
    elBallTwo.style.background = aux

    aux = elBallOne.style.width || '100px'
    elBallOne.style.width = elBallOne.style.height = elBallTwo.style.width || '100px'
    elBallOne.innerText = parseInt(elBallTwo.style.width) || 100
    elBallTwo.style.width = elBallTwo.style.height = aux
    elBallTwo.innerText = parseInt(aux)
}