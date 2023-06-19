console.log("Logging in with credentials...");

chrome.storage.local.get(null, function (creds) {
	// if no credentials are set, we don't do anything
	if (!creds.user || !creds.pass) {
		return;
	}

	// get fields
	const usernameField = document.getElementById("username");
	const passwordField = document.getElementById("password");

	if (!usernameField || !passwordField) {
		return;
	}

	// fill in credentials
	usernameField.value = creds.user;
	passwordField.value = creds.pass;

	// if no warning message is displayed
	// (wrong credentials), then we submit them.
	// Else, we ask the user to correct their credentials.
	if (!document.getElementById("msg")) {
		HTMLFormElement.prototype.submit.call(document.getElementById("fm1"));
	} else {
		alert(
			"Your credentials don't seem to be working. Specify correct ones in the settings."
		);
	}
});
