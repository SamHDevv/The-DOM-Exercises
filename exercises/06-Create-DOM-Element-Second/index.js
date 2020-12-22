//you code here
document.body.innerHTML = "<h1>Hello World</h1>";

// document.body.innerHTML = "<img src="placehold.it/350x150" alt="">

const img = document.createElement("img");
img.src = "http://placehold.it/350x150";
document.querySelector("#myDiv").appendChild(img);
