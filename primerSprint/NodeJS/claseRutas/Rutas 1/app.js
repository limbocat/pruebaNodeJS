
const express = require('express');


const fs = require('fs');


const app = express();


app.listen(3030, () => console.log('Server running in 3030 port'));


const heroes = JSON.parse(fs.readFileSync(__dirname + './data/heroes.json', 'utf-8'));

app.get('/', function(req, res){
    res.send(`Ni Superman, IronMan o La Mujer Maravilla son tan importantes como las y los Heroes de carne y
    hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
    inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
    ti!.`);
    
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(`${heroes.JSON}`);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = req.params.id;
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:id/bio', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = __¿?__;

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}
});

// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('/creditos', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});