console.log('Logging in with credentials...')

// get credentials from storage
chrome.storage.local.get(null, function (creds) {
	// fill in credentials
	usernameField = document.getElementById('username')
	passwordField = document.getElementById('password')

	usernameField.value = creds.user
	passwordField.value = creds.pass

	// if no warning message is displayed
	// (wrong credentials), then we submit them.
	// Else, we ask the user to correct their credentials.
	if (document.getElementById('msg') == null) {
		HTMLFormElement.prototype.submit.call(document.getElementById('fm1'))
	} else {
		alert(
			"Your credentials don't seem to be working. Specify correct ones in the settings."
		)
	}
})
