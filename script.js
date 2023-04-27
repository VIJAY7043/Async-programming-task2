const catFact = document.getElementById('cat-fact');
const newFactBtn = document.getElementById('new-fact-btn');

function getRandomCatFact() {
	fetch('https://cat-fact.herokuapp.com')
		.then(response => response.json())
		.then(data => {
			catFact.textContent = data.text;
		})
		.catch(error => {
			console.log(error);
		});
}

newFactBtn.addEventListener('click', getRandomCatFact);
getRandomCatFact();
