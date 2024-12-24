'use strict'

function onReset() {
    const elBall1 = document.querySelector('.one')
    const elBall2 = document.querySelector('.two')
    
    elBall1.style.width = elBall1.style.height =
    elBall2.style.width = elBall2.style.height = 
    elBall1.style.background = elBall2.style.background = ''

    elBall1.innerText = elBall2.innerText = 100

    document.querySelector('body').style.background = ''
}

function onBallClick(elBall, maxDiameter) {
    changeSizeRandom(elBall, maxDiameter)
    
    elBall.style.background = getRandomColor()
}

function changeSizeRandom(elBall, edgeCase, isReduce = false) {
    var size = parseInt(elBall.style.width) || 100
    size += getRandomInt(20,61) * (isReduce ? -1 : 1)
    
    if ((size >= edgeCase && !isReduce) || (size <= edgeCase && isReduce)) size = 100
    
    elBall.style.width = elBall.style.height = size + 'px'
    elBall.innerText = size
}

function onBallSwap() {
    const elBall1 = document.querySelector('.one')
    const elBall2 = document.querySelector('.two')

    swapElStyle(elBall1, elBall2, 'background')

    swapElStyle(elBall1, elBall2, 'width')
    swapElStyle(elBall1, elBall2, 'height')

    elBall1.innerText = parseInt(elBall1.style.width)
    elBall2.innerText = parseInt(elBall2.style.width)
}

function onShrink() {
    const elBall1 = document.querySelector('.one')
    const elBall2 = document.querySelector('.two')

    changeSizeRandom(elBall1, 100, true)
    changeSizeRandom(elBall2, 100, true)
}

function onRandomBackground() {
    document.querySelector('body').style.background = getRandomColor()
}