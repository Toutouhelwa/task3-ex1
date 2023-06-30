let myInput = document.getElementById("my-input");
let text = document.getElementById("add-person");
let button = document.getElementById("button");
myInput.onkeyup = function handelChange() {
    text.innerText = myInput.value;
};
button.onclick = function() {
    let list = document.createElement("ul");
    console.log(list);
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerHTML = myInput.value.toString();
    console.log(myInput.value.toString());
    li.appendChild(h2)
    list.appendChild(li);
    document.body.appendChild(list)
}


