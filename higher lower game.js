const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
function Demander(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (response) => {
      resolve(response);
    })
  })
}

function getRandomInt(){
	let random = Math.random() * 10;
	return Math.round(random)
}

async function yourChoice(){
	let correctValue = false
	let choix = 0
	while (!correctValue){
		let response = await Demander("Entrez un nombre entre 0 et 10: ");
		choix = parseInt(response, 10);
		if (isNaN(choix) || choix < 0 || choix > 10){
			console.log("valeur non valide");
		} 
		else {
			correctValue = true;
		}
	}
	return choix	
}

function verifier(nombreEntre, nombreMystere){
	if (nombreEntre < nombreMystere){
		console.log ("Plus haut");
		return false
	}
	if (nombreEntre > nombreMystere){
		console.log ("Plus bas");
		return false
	}
	console.log ("GG");
	return true
}



async function main(){
	let nombreMystere = getRandomInt();
	let aGagne = false
	while(!aGagne){
		let nombreEntre = await yourChoice();
		aGagne = verifier(nombreEntre, nombreMystere);
	}
	rl.close();
}
main();