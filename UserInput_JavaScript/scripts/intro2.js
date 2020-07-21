
let show = document.getElementById("display");
let selection = document.getElementById("number");
show.innerHTML = selection.value;
selection.addEventListener("input", change);
function change(){
    show.innerHTML = this.value;
}
  