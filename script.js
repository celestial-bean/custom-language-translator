
//init stuff
let languages = 1;
let input = document.querySelector("#input");


function translate(){
  input.value
}


function newLanguage() {
  //init things
  let div = document.createElement("div");
  let button = document.createElement("button");
  let remove=document.createElement("button");

//apply things
  remove.textContent="-";
  remove.style.float="right";
  button.classList.add("language");
  button.textContent = `language ${languages}`;
  remove.addEventListener("click", function(){this.parentElement.remove(); languages--;})

  //add language
  languages++;

  //append things
  div.appendChild(button);
  div.append(remove);
  document.querySelector("#languages").appendChild(div);

}

function main() {


}

function update() {
  for (let i = 0; i < input.length; i++) {

    input.value
  }
}
