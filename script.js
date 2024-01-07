const form = document.querySelector("form");
const user = document.querySelector("#username");
const pass = document.querySelector("#passowrd");
const checkbox = document.querySelector("#checkbox");
const submit = document.querySelector("#submit");

form.addEventListener("submit",(event)=>{
	
	event.preventDefault();
	
	if(checkbox.checked && user.value !== ""){
		let username = localStorage.getItem("username");
		let password = localStorage.getItem("password");
		
		if (username == user.value) {
			localStorage.removeItem("username");
			localStorage.removeItem("password");
			alert(`Logged in as ${user.value}`);
		} 
		localStorage.setItem("username",user.value);
		localStorage.setItem("password",pass.value);
		
	} else{
		alert("Logged in as username");
	}
	form.reset();
});

// user.addEventListener("input",()=>{
// 	if(user.value == localStorage.getItem("username")){
// 		existing.style.display = "block";
// 	} else{
// 		existing.style.display = "none";
// 	}
// });
