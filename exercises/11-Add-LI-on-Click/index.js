let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var fullList = document.querySelector("#myList");
	var newLi = document.createElement("li");
	newLi.innerHTML = "Fourth Element";
	fullList.appendChild(newLi);
});
