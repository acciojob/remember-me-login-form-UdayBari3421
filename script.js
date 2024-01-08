const form = document.querySelector("form");
const user = document.querySelector("#username");
const pass = document.querySelector("#passowrd");
const checkbox = document.querySelector("#checkbox");
const submit = document.querySelector("#submit");
let obj;
form.addEventListener("submit",(event)=>{
	obj = {
		usernam: form.username.value,
		passwor: form.password.value,
	};
	event.preventDefault();
	
	if(checkbox.checked){
		let username = localStorage.getItem("username");
		let password = localStorage.getItem("password");
		
		if (username == obj.usernam) {
			localStorage.removeItem("username");
			localStorage.removeItem("password");
			alert(`Logged in as ${obj.usernam}`);
		} 
		localStorage.setItem("username",obj.usernam);
		localStorage.setItem("password",obj.passwor);
		console.log(obj.usernam);
		console.log(obj.passwor);
		
	} else{
		alert("Logged in as username");
	}
	form.reset();
});

user.addEventListener("input",()=>{
	
	if(obj.usernam == localStorage.getItem("username")){
		existing.style.display = "block";
	} else{
		existing.style.display = "none";
	}
});
