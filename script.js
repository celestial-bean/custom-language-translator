

  let languages = 1;
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  let data = {};
  let selectedLanguage = document.getElementById("languageSelector");


  function trans() {
    output.value = "";

    let In = data[selectedLanguage.value].input;
    let Out = data[selectedLanguage.value].output;
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
    for (let i = 0; i < data.length; i++) {
      if (data.name == name) {
        count += 1;
      }
    }
    if (count) {
      name = name + count.toString();
    }



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
      selectedLanguage.value = data[name].name;
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

