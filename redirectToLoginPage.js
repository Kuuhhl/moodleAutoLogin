// Redirect to login page if a login button is visible
if (document.getElementsByClassName("login").length !== 0) {
	console.log("Not logged in. Redirecting to login page...");
	window.open(
		"https://ssl.studiumdigitale.uni-frankfurt.de/cas/login?service=https%3A%2F%2Fmoodle.studiumdigitale.uni-frankfurt.de%2Fmoodle%2Flogin%2Findex.php%3FauthCAS%3DCAS",
		"_self"
	);
} else {
	console.log("Already logged in. Nothing more to do.");
}
