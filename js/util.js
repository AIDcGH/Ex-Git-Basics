'use strict'

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function swapElStyle(el1, el2, property) {
    const el1Prop = getComputedStyle(el1)[property]
    const el2Prop = getComputedStyle(el2)[property]
    
    el1.style[property] = el2Prop
    el2.style[property] = el1Prop
}