let users = [
	{
		nombre: 'Edwin Chapuel', 
		correo: 'echapuel@gmamil.com', 
		edad: 23
	},
	{
		nombre: 'Sofia Hernandez', 
		correo: 'shernandez@gmamil.com', 
		edad: 28
	},
	{
		nombre: 'Luis Toledo', 
		correo: 'ltoledo@gmamil.com', 
		edad: 26
	},
	{
		nombre: 'Marco Polo', 
		correo: 'mpolo@gmamil.com', 
		edad: 25
	},
	{
		nombre: 'Pedro Perez', 
		correo: 'pperez@gmamil.com', 
		edad: 93
	},
];

let correoUsers = [];

for(let i=0; i<users.length; i++){
	correoUsers[i] = users[i].correo;
}

console.log(correoUsers)
