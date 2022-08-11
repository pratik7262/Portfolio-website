let navBar=document.querySelector('nav');
let ham=document.getElementById("ham")
let loader=document.getElementById('loader')
let isClicked = true;

ham.addEventListener("click", function () {
	if (isClicked) {
		navBar.style.height = "260px";
		isClicked = false;
	}
	else {
		isClicked = true;
		navBar.style.height = "80px";
	}
});

window.addEventListener('load',()=>{
	loader.style.display='none'
})

