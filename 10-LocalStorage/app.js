localStorage.setItem('nombreUusuario', 'Grover');
localStorage.setItem('ubicacion','Iquitos');
console.log(localStorage.getItem('nombreUsuario'));
console.log(localStorage.getItem('ubicacion'));


localStorage.removeItem('nombreUsuario');
// limpiar el localStorage
localStorage.clear();


// notacion JSON
const usuario = {
    nombre: 'Grover',
    edad: '30'
}

// convertir el objeto a string
const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem('usuario', usuarioJSON);
const userJSON = localStorage.getItem('usuario');
const usuario3 = JSON.parse(userJSON);
console.log(usuario2);
console.log(usuarioJSON);

//convertir de string a objeto
usuario2 = JSON.parse(usuarioJSON);
console.log(usuario2);

