const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volSlider = document.querySelector("volume-slider input")
const keysChecked = document.querySelector(".keys-check input")

const audio = new Audio("../tunes/a.wav")
let mapedKeys = []

const playtune = (key) =>{
    audio.src = `../tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)

    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active", 150)
    })
}

pianoKeys.forEach( (key) => {
    key.addEventListener("click", () => playtune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
})

document.addEventListener("keydown", (e) => {
    if( mapedKeys.includes(e.key)){
        playtune(e.key)
    } 
})

const hideKeys = () => {
    pianoKeys.forEach( (key) => key.classList.toggle("hide"))
}

keysChecked.addEventListener("click", hideKeys)

const handleVol = (e) => {
    audio.volume = e.target.value   
}

volSlider.addEventListener("input", handleVol)
