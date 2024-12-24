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
    var elBall1 = document.querySelector('.one')
    var elBall2 = document.querySelector('.two')

    swapElStyle(elBall1, elBall2, 'background')
    
    swapElStyle(elBall1, elBall2, 'width')
    swapElStyle(elBall1, elBall2, 'height')
    
    elBall1.innerText = parseInt(elBall1.style.width) 
    elBall2.innerText = parseInt(elBall2.style.width)
}
