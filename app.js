const input = document.querySelector(".txt-input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

const translate = (e) => {
  fetch(
    `https://api.funtranslations.com/translate/pirate.json?text=${input.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      output.innerHTML = data.contents.translated;
    })
    .catch((err) => alert(`Error: ${err}`));
};

btn.addEventListener("click", translate);
