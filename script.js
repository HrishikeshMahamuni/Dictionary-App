const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const Sounds = document.getElementById("playSound")

btn.addEventListener("click", () => {
    let inputWord = document.getElementById("input-word").value;
    fetch(`${url}${inputWord}`)
    .then((response) => response.json())

    .then((data) => {
    console.log(data)
    result.innerHTML = `
    <div class="word">
        <h3>${inputWord}</h3>
        <button onClick="playSound()">
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>

    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
    </div>
    <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example"> 
        ${data[0].meanings[0].definitions[0].example || ""}
    </p>`;
    
    sound.setAttribute("src", `https:${data[1].phonetics[1].audio} `);
    
    })
    .catch(() => {
        result.innerHTML=`<h3 class="Error">Couldn't Find Word</h3>`
    })
    
});

function playSound(){
    sound.play
};







