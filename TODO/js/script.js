$(function(){
		$(".element").typed({
			strings: ["Liat out your tasks", "List out your tasks!"],
			typeSpeed: 30
		});
	});


var add = document.getElementById("add");
var remove = document.getElementById("remove");
var list = document.getElementById("list");

// remove all button 

remove.onclick = function() {
    list.innerHTML = "";
}

// adding new element

add.onclick = function() {
    addlist(list);
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();
}

function addlist(targetUl){
    var inputText = document.getElementById("userInput").value;
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputText + " ");
    var removeBtn = document.createElement("button");
    
    if(inputText !== ""){
        removeBtn.classList = "btn btn-xs btn-danger";
        removeBtn.innerHTML = "&times;";
        removeBtn.setAttribute('onclick','removeMe(this)');
        li.appendChild(textNode);
        li.appendChild(removeBtn);
        targetUl.appendChild(li);
    } else {
        alert("Please entera a ToDo");
    }
    
}

function removeMe(item) {
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}

