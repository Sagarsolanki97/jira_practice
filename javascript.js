// open - close modal
var open = document.getElementById("open-modal");
var form =  document.getElementById("form");
var closeForm =document.getElementById("closeModal");

// inside- form variables :
var Name = document.getElementById("name");
console.log(Name.innerText);

open.addEventListener("click", function() {
    form.style.display = "block";
});
closeForm.addEventListener("click",function(){
    form.style.display ="none";
});

