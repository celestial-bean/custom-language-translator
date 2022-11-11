let languages = 1;

function newLanguage() {
  let div = document.createElement("div");
  let button = document.createElement("button");
  button.classList.add("language");
  button.textContent = `language ${languages}`;
  languages++;
  div.appendChild(button);
  document.querySelector("#languages").appendChild(div);

}

function main() {
  let input = document.querySelector("#input");


}

function update() {
  for (let i = 0; i < input.length; i++) {

    input.value
  }
}
