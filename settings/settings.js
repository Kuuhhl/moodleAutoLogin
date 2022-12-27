// Saves options to chrome.storage
function save_options() {
	var user = document.getElementById('username').value
	var pass = document.getElementById('password').value
	chrome.storage.local.set({
		user: user,
		pass: pass,
	})
}

function restore_options() {
	chrome.storage.sync.get(
		{
			user: '',
			pass: '',
		},
		function (items) {
			document.getElementById('username').value = items.user
			document.getElementById('password').value = items.pass
		}
	)
}
document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('login-form').addEventListener('submit', save_options)
