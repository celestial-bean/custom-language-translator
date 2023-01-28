//init stuff
let languages = 0;
let input = document.getElementById("input");
let output = document.getElementById("output");
let data = [];
let languageSelector = document.getElementById("languageSelector");



function trans(errors=[]) {
  if (!languageSelector.value) {
    alert("You need to click a language to select it.");
    return;
  }
  output.value = "";

  let In = data[languageSelector.value].input;
  let Out = data[languageSelector.value].output;

  if (!In.includes(" ")) {
    In += " ";
  }
  if (!Out.includes(" ")) {
    Out += " ";
  }

  //check for errors
  for (let i = 0; i < input.value.length; i++) {
    let char = input.value[i];

    if (!(Out.includes(char))) {
      errors.push(char);
    ;
  }
}
if (errors.length>0){
  alert("You did not include these in your output: "+errors);
  return;
}

  for (let i = 0; i < input.value.length; i++) {
    let char = input.value[i];

    

    if (char == '"') {
      output.value += '"';
    } else if (char == "'") {
      output.value += "'";
    } else if (char == '`') {
      output.value += '`';
    } else {

      console.log(input.value[i], "to", Out[In.indexOf(char)])
      output.value += Out[In.indexOf(char)];
    }

  }
  console.log();
}


function newLanguage() {


  //init things
  let div = document.createElement("div");
  let button = document.createElement("button");
  let remove = document.createElement("button");
  let name = document.getElementById("name").value;
  if (!name) {
    name = "New language";
  }


  //check if name is already taken; add a number to it to differentiate

  if (languages > 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == name) {
        return name + languages;
      }

    }
  }



  let charInput = document.getElementById("characterInput").value.split("");
  let charOutput = document.getElementById("characterOutput").value.split("");

  if (false == charInput) {
    charInput = "abcdefghijklmnopqrstuvwxyz,./;'[]-=\<>?:{}_+|`~";
  }
  if (false == charOutput) {
    charOutput = "zyxwvutsrqponmlkjihgfedcba~`|+_}{:?><\=-][';/.,";
  }

  data[`${name}`] = {
    name: name,
    input: charInput,
    output: charOutput
  };

  //apply things
  remove.textContent = "-";
  remove.style.float = "right";
  remove.style.position = "relative";
  button.classList.add("language");
  button.textContent = name;
  button.addEventListener("click", function () {
    languageSelector.value = data[name].name;
  });
  remove.addEventListener("click", function () {
    this.parentElement.remove();
  });

  //append things
  div.appendChild(button);
  div.append(remove);
  document.querySelector("#languages").appendChild(div);
  languages += 1;


}