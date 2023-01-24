//init stuff

let languages = 0;
let input = document.getElementById("input");
let output = document.getElementById("output");
let data = {};
let seedBox = document.getElementById("languageSelector");


function trans(data) {
  output.value = "";

  let In = data[seedBox.value].input;
  let Out = data[seedBox.value].output;
  if (!In.includes(" ")) {
    In += " ";
  }
  if (!Out.includes(" ")) {
    Out += " ";
  }

  for (let i = 0; i < input.value.length; i++) {
    let char = input.value[i];
    output.value += Out[In.indexOf(char)];
  }

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
  //check if name is already taken; add a number to it 
  let count = 0;
  console.log(Object.keys(data).length);
  if (languages > 0) {
    for (let i = 0; i < Object.keys(data).length; i++) {
      if (data[i].name == name) {
        count += 1;
        console.log(name);

      }
    }

    if (count) {
      name += count.toString();
    }
  }


  console.log(name);

  let charInput = document.getElementById("characterInput").value.split("");
  let charOutput = document.getElementById("characterOutput").value.split("");


  data[name] = {
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
  button.addEventListener("click", function() {
    seedBox.value = data[name].name;
  });
  remove.addEventListener("click", function() {
    this.parentElement.remove();
  });

  //append things
  div.appendChild(button);
  div.append(remove);
  document.querySelector("#languages").appendChild(div);
  languages += 1;


}
