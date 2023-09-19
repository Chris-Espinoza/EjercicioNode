const telefonos = require ('./agenda.js');

function cantidadTelefonos(){
    const cantidad = telefonos.length;
    console.log (`La catinad de telefono es : ${cantidad}`)
}
//cantidadTelefonos();
function mostrarTelefonos (){
    console.log ('los contactos son:',telefonos);
    const cantidad = telefonos.length;

    let i =0;
    while (i< cantidad){
        console.log (telefonos[i]);
        i++;
    }
    let nuevo = {
        id : "8",
        name : "Diego",
        number : "351-338707748",
    }
}
//mostrarTelefonos();
function mostrarporId (idContacto)   
{
    const contacto = telefonos.find((x) => x.id === idContacto && x.name === "Ada Lovelace");
    console.log ('el contacto es:',contacto);
}
//mostrarporId(2);

function mostrarporTelefono (numberPhone)   
{
    const contacto = telefonos.find((x) => x.number === numberPhone);
    console.log ('el contacto es:',contacto);
}
//mostrarporTelefono(39-44-5323523);


agregarObjeto (nuevo)
function agregarObjeto(nuevo)
{telefonos.push(nuevo);
console.log (telefonos);
}
/*const chance = require{'chance '};

const chance = new Chance ();

const randomEmail = chance.email();
const randomeAge = chance.age();
const randomName = chance.randomName();

console.log(randomEmail,randomName,randomeAge)*/