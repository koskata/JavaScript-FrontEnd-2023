async function loadRepos() {


	let response = await fetch(`https://api.github.com/users/k1r1L/repos`);
	let data = await response.json();

	document.getElementById("repos").textContent = JSON.stringify(data);
}