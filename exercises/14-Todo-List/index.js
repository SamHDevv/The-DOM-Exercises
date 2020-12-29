document.getElementById("addToDo").addEventListener("change", function() {
	var input = document.getElementById("addToDo");
	var list = document.querySelectorAll("ul");
	var item = document.createElement("li");
	item.innerHTML = '<i class="fa fa-trash"></i></span> ' + input.value;
	list.appendChild(item);
	/*item.addEventListener("click", function() {
		item.parentNode.removeChild(item);
	});*/
});
/*document.querySelectorAll("li").forEach(function(item) {
	item.addEventListener("click", function() {
		item.remove()
	});
});*/
/*var taskList = document.querySelector("ul");
taskList.addEventListener("click", function(item) {
	taskList.removeChild(item.target);
});*/
document.querySelector("ul").addEventListener("click", function(event) {
	event.target.parentNode.removeChild(event.target);
});

// var lis = document.querySelectorAll('#myList li');
// for(var i=0; li=lis[i]; i++) {
//     li.parentNode.removeChild(li);
// }
