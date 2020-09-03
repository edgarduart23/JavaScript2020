setTimeout(function(){
    console.log('esto aparece despues de 3 segundos')
}, 3000);

setTimeout(() => console.log('esto aparece despues de 3 segundos'), 3000);

//JavaScript Asincronico

const segundo = () => {
    setTimeout(() => {
        console.log('llamada a segundo');
    }, 2000);
}

const primero = () => {
    console.log('inicio de primero');
    segundo();
    console.log('fin de primero');
} 

primero();

//
const getUsuarios = () => {
    setTimeout(() => {
        const userIDs = [101, 102, 103, 105];
        console.log(userIDs);
        setTimeout((id) => {
            const usuario = {
                email: 'grover@gmail.com',
                nombre: 'Grover'
            }
            console.log(`${id} - ${usuario.email} ${usuario.nombre}`);
            setTimeout(idPermiso => {
                const permiso = ['admin', 'creador'];
                console.log(permisos);
            },1500, userIDs[2])
        }, 1500, userIDs[1]);

    },1500);

}

getUsuarios();


// ejemplo del uso de promesas


let promesa = new Promise((resolve, reject) => {
    if(true){
        resolve('la operacion fue exitosa')
    } else {
        reject('hubo un error')
    }
};

promesa.then( response => {
    console.log('response: ' + response)
}).catch(error => {
    console.log('error' + error);
})


var miPromesa = Promise.resolve('Comida');
miPromesa.then(resp => console.log(resp));


var miPromesa2 = new Promise(function(resolve, reject){
    setTimeout(() => resolve(4), 2000)
})

miPromesa2.then(resp => {
    resp += 5;
    console.log(resp);
})


// De Callback a Promesas

const getUsuariosIDs = new Promise ((response , reject) => {
    setTimeout(() => {
        response([101, 102, 103, 105]);
    }, 1500)
});

const getUsuario = userID => {
    return new Promise ((resolve, reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'grover@mail.com',
                nombre: 'Grover'
            }
            resolve(`${id} - ${usuario.email} ${usuario.nombre}`)
        }, 1500, userID)
    });
}
getUsuariosIDs
.then(IDs => {
    console.log(IDs);
    return getUsuario(IDs[3])
})
.then(usuario => {
    console.log(usuario);
})
.catch(() =>{
    console.log('error')
})


// Funcion con Async/Await
async function getUsuarioAW(){
    const IDs = await getUsuariosIDs;
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    return usuario;
}

getUsuarioAW().then(resultado => console.log(`${resultado} es un usuario.`));
// llamada AJAX