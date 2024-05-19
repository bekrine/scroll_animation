const scene = document.getElementById('scene')

const one = document.getElementById("first")
const tow = document.getElementById("tow")
const three = document.getElementById("three")
const fore = document.getElementById("for")
let firstPiont = 0
let destince = 0
let count = -1
const drage = (e) => {

    const transformValue = window.getComputedStyle(one).transform;
    const w = window.getComputedStyle(one).width;
    let matrix = new WebKitCSSMatrix(transformValue);
    let matrixX = matrix.m41 / parseInt(w) * 100


    count > 0 ? destince = matrixX : destince = e.offsetX - firstPiont





    if (destince < 100 && destince > -350) {

        moveimages(destince, 1)
    }

}

document.addEventListener("mousedown", (e) => {
    firstPiont = e.offsetX
    count = count + 1
    document.addEventListener('mousemove', drage)
})

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drage)
})


document.addEventListener('scroll', (e) => {
    let s = window.scrollY
    const d = 200
    let c = window.innerHeight;
    let scrollPercent = (s / (d - c));

    if (scrollPercent * -1000 < 350) {
        moveimages(scrollPercent, 1000)
    }


})

const moveimages = (translateX, factor) => {
    one.style.transform = `translateX(${Math.floor(translateX * factor)}%)`
    one.style.transform = `transition:2s ease-in-out`

    tow.style.transform = `translateX(${Math.floor(translateX * factor) - 100}%)`
    tow.style.transform = `transition:2s ease-in-out`

    three.style.transform = `translateX(${Math.floor(translateX * factor) - 200}%)`
    three.style.transform = `transition:2s ease-in-out`

    fore.style.transform = `translateX(${Math.floor(translateX * factor) - 300}%)`
    fore.style.transform = `transition:2s ease-in-out`
}


const transform = () => {


    tow.style.transform = `translateX(-100%)`
    tow.style.transform = `transition:2s ease-in-out`

    three.style.transform = `translateX(-200%)`
    three.style.transform = `transition:2s ease-in-out`

    fore.style.transform = `translateX(-300%)`
    fore.style.transform = `transition:2s ease-in-out`
}
transform()