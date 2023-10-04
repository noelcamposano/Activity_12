
document.querySelector("#addNotes").addEventListener("click",() =>{
    if(document.querySelector("#taskInput").value != ""){
   document.querySelector("#taskArea").innerHTML +=
   ` <div>
   <button class="btn markButton">🏁</button>
   <span>${document.querySelector("#taskInput").value}</span>
   </div> <hr>`;
   document.querySelector("#taskInput").value="";
}
   else {
   alert("Field is empty!");
}

const markButtons = document.querySelectorAll(".markButton");
markButtons.forEach((markButton)=>{
   markButton.addEventListener("click", (event) =>{
       event.target.parentElement.lastElementChild.style = "text-decoration-line: line-through; font-weight: 900; color: red;";
       event.target.remove();
   });
});
});
   