
//init stuff
let languages = 1;
let input = document.getElementById("input");
let output = document.getElementById("output");
let data={};
let seedBox=document.getElementById("languageSeed");


function trans(){
  output.value="";
  let array=seedBox.value.split("separate");
  let In=array[0];
  let Out=array[1];
  for (let i=0; i<input.value.length;i++){
  }
  //input.value
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


