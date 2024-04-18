let btn = document.querySelector("button");
let characters = [];
let adding = document.querySelector(".emojis");

btn.addEventListener("click", () => {
    adding.innerHTML = "";
    getEmojis()
})

async function getEmojis() {
    let value_txt = document.querySelector("input").value;
    let url = `https://emoji-api.com/emojis?search=${value_txt}&access_key=0d83d1d826601ac964f5d75f98f98a80882443c4`;
    characters = [];

    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                characters.push(element.character);
            });
            for (i of characters) {
                adding.innerHTML += `
                <span class="text-3xl p-6">${i}</span>`
            }
        })
        .catch((err) => {
            adding.innerHTML = `<p class="text-3xl text-font-color">The Emoji <mark>${value_txt}</mark> is not Found😒</p>`
        });
}

