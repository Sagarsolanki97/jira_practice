// open - close modal
var open = document.getElementById("open-modal");
var form =  document.getElementById("form");
var closeForm =document.getElementById("closeModal");

open.addEventListener("click", function() {
    form.style.display = "block";
});
closeForm.addEventListener("click",function(){
    form.style.display ="none";
});


// inside- form variables :

var formElem = document.getElementById("form");
formElem.addEventListener("submit",function(event){
    event.preventDefault();
    const Name = document.getElementById("name").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("due-Date").value;
    const Status = document.getElementById("Status").value;
    console.log(Name);
    console.log(priority);
    console.log(dueDate);

    console.log(Status);
    addTotask(Name , priority, dueDate, Status);
  

    form.style.display ="none";
});

function addTotask(Name , priority, dueDate, Status){
    if(Status =="Notstarted"){
        var column = document.getElementById("notstart");
        column.innerHTML += `<li>
                                <h3>${Name}</h3>
                                <p>${priority}</p>        
                                <p>${dueDate}</p>
                                <p>${Status}</p>
                                </li>`;   }
    if(Status =="In-progress"){
        var column = document.getElementById("in-progress");
        column.innerHTML += `<li>
                                <h3>${Name}</h3>
                                <p>${priority}</p>        
                                <p>${dueDate}</p>
                                <p>${Status}</p>
                                </li>`;
    }
    if(Status =="Completed"){
        var column = document.getElementById("completed");
        column.innerHTML += `<li>
                                <h3>${Name}</h3>
                                <p>${priority}</p>        
                                <p>${dueDate}</p>
                                <p>${Status}</p>
                                </li>`;
    }
};
