function addtodo () {
    let input = document.querySelector("input");
    if(input.value == "")
    {
        alert ("Add some details Babu..")
        return;
    }
    document.querySelector("ul").style.color
    let list = document.createElement("li");
    // let but = document.createElement("button");
    // but.value = "remove";
    list.innerHTML=`${input.value} <button onclick="remove(this)"> remove - </button>`;
    let unol = document.querySelector("ul");
    unol.prepend(list);
    input.value = "";

    
}
function remove(ye){
    ye.parentElement.remove();
}

