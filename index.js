const open_button = document.getElementById("outside_button");
const close_button = document.getElementById("modal_button");
const modal = document.querySelector(".modal-wrapper");
open_button.onclick = ()=>{
    modal.style.display = "flex";
};
close_button.onclick = ()=>{
    modal.style.display = "none";
};