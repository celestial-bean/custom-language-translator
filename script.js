
//init stuff
let languages = 1;
let input = document.querySelector("#input");
let data={};


function translate(){
  
}


function newLanguage() {
  //init things
  let div = document.createElement("div");
  let button = document.createElement("button");
  let remove=document.createElement("button");
  let name=document.getElementById("name").value;
  if (!name){
    name="New language";
  }
  let seedBox=document.getElementById("languageSeed");
  let input=document.getElementById("characterInput").value;
 let output=document.getElementById("characterOutput").value;
 let seed=input+"separate"+output;

  data[`${name}`]={name: `${name}`, input: `${input}`, output: `${output}`, seed:seed};

//apply things
  remove.textContent="-";
  remove.style.float="right";
  remove.style.position="relative";
  button.classList.add("language");
  button.textContent = `${name}`;
  button.addEventListener("click", function(){seedBox.value=data[name].seed;})
  remove.addEventListener("click", function(){this.parentElement.remove();})

  //append things
  div.appendChild(button);
  div.append(remove);
  document.querySelector("#languages").appendChild(div);

}


