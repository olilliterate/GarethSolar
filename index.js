// Modal script moved from index.html
// Get the modal
var modal = document.getElementById("contactModal");
var btn = document.getElementById("contact-btn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
if (btn) {
	btn.onclick = function() {
		if (modal) modal.style.display = "block";
	}
}
if (span) {
	span.onclick = function() {
		if (modal) modal.style.display = "none";
	}
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

var translate = document.getElementById("translate");
if (translate) {
	translate.onclick = function(){
	alert("Welsh translation to be added")
	}
}