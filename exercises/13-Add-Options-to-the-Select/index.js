var sel = document.querySelector("#mySelect");

window.onload = function() {
	console.log("The website was loaded...");

	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let newLi = document.createElement("li");

	for (var i = 0; i < countries.length; i++) {
		var createEle = document.createElement("option");
		createEle.value = countries[i];
		createEle.innerHTML = countries[i];
		sel.appendChild(createEle);
	}
};

document.getElementById("#mySelect").addEventListener("change", function() {
	alert(sel.value);
});
