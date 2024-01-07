const username = document.querySelector("#username");
const password = document.querySelector("#password");
const checkbox = document.querySelector("#checkbox");
const form = document.querySelector("form");
const submit = document.querySelector("#submit");

form.addEventListener("submit",(event)=>{
	event.preventDefault();
	let btn = document.createElement("input");
	if (checkbox.checked && username.value !== "") {
		if (localStorage.getItem("username") === username.value) {
				let user = localStorage.getItem("username");
				let pass = localStorage.getItem("password");

			username.addEventListener("input",()=>{
				btn.setAttribute("value", "Login as exiting user");
				btn.setAttribute("type", "submit");
				btn.setAttribute("id", "btn");
				form.appendChild(btn);
				password.value = pass.value;
				checkbox.checked = true;
				submit.style.display = "none";
			});
			username.value = user.value;
			alert(`Logged in as ${user}`);
		}
		else{
			localStorage.setItem("username",username.value);
			localStorage.setItem("password",password.value);
			alert(`Logged in as ${username.value}`);
		}
		form.reset();
		// form.removeChild(btn);
		btn.style.display = "block";
	}
	else{
		localStorage.getItem("username");
		localStorage.getItem("password");
		alert("Enter Details First");
	}
	btn.style.display = "block";
	// submit.style.display = "none";
});
