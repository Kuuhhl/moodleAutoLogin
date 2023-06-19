// Saves options to chrome.storage
function save_options(event) {
	event.preventDefault();
	// get user and pass
	const user = document.getElementById("username").value;
	const pass = document.getElementById("password").value;

	// get status element
	const success = document.getElementById("success");
	if (!success) {
		return;
	}

	// get status element
	const status = document.getElementById("status");
	if (!status) {
		return;
	}

	// set status to "Saving..."
	status.textContent = "Saving...";

	// check if user and pass are not empty
	if (user && pass) {
		// set user and pass
		chrome.storage.local.set({
			user: user,
			pass: pass,
		});

		// hide form
		document.getElementById("login-form").style.display = "none";

		// show success message
		success.style.display = "block";
	} else if (user && !pass) {
		// show error message
		status.textContent = "Please enter a password.";
		status.classList.add("error");
	} else if (pass && !user) {
		// show error message
		status.textContent = "Please enter a username.";
		status.classList.add("error");
	} else {
		// show error message
		status.textContent = "Please enter a username and password.";
		status.classList.add("error");
	}
}

function restore_options() {
	chrome.storage.local.get(
		{
			user: "",
			pass: "",
		},
		function (items) {
			// fill in old credentials
			document.getElementById("username").value = items.user;
			document.getElementById("password").value = items.pass;

			// get button element
			const button = document.getElementById("submitBtn");
			if (!button) {
				return;
			}

			if (items.user && items.pass) {
				button.value = "Update";
			}
		}
	);
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("login-form").addEventListener("submit", save_options);
