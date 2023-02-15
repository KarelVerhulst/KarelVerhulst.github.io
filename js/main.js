const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click", ()=> {
	arr.classList.add("active_arr");

	if (left_container.classList.contains("off")) {
		left_container.classList.remove("off");
		left_container.classList.add("active");
	}
});

clc.addEventListener("click", ()=> {
	arr.classList.remove("active_arr");

	if (left_container.classList.contains("active")) {
		left_container.classList.remove("active");
		left_container.classList.add("off");
	}
});

videoSettingWithMouse("video1");
videoSettingWithMouse("video2");

function videoSettingWithMouse(id) {
	document.getElementById(id).addEventListener("mouseover", function() {
		//this.play();
		this.childNodes[5].play();
	});

	document.getElementById(id).addEventListener("mouseleave", function() {
		//this.pause();
		this.childNodes[5].pause();
	});

	document.getElementById(id).addEventListener("click", function() {
		//this.pause();
		this.childNodes[5].play();
	});
}
// change the tab view when going to another tab
let docTitle = document.title;
window.addEventListener('blur', () => {
	document.title = 'Come back &#128546'});

window.addEventListener('focus', () => {
	document.title = docTitle;
})
