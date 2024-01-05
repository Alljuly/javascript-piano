const pianoKeys = document.querySelectorAll(".piano-keys .key");

const audio = new Audio("../tunes/a.wav")



const playtune = (key) =>{
    audio.src = `../tunes/${key}.wav`
    audio.play()
}



pianoKeys.forEach( (key) =>{
    key.addEventListener("click", () => playtune(key.dataset.key))
})

