const f = new Date();
const hora = f.getHours() * 60 + f.getMinutes() * 60 + f.getSeconds();
console.log(`empezo mi carga ${hora}`)
//Relación 1 -> muchos
/*Simulando que esto es una base de datos y las bd son asincronas
le decimos bd, plis dame este usuario */
const usuarios = [{
  id: 1,
  nombre: 'lulu',
  profesion_id: 1
 },
 {
  id: 2,
  nombre: 'teresa',
  profesion_id: 1
 },
 {
  id: 3,
  nombre: 'diego',
  profesion_id: 2
 }
];

const profesion = {
 1: 'developer',
 2: 'diseñador'
}

//callbacks

function getUsuarios() {

 return new Promise((resolve, reject) => {
  try {
   setTimeout(() => {
    const f = new Date();
    const hora = f.getHours() * 60 + f.getMinutes() * 60 + f.getSeconds();
    resolve(usuarios);
    console.log(`passed and done ${hora}`);
   }, 1000)
  } catch (err) {
   reject(err);
   console.error(`failed!!  ${err}`);
  }
 })
};

function getUsuario(users, id) {
 return new Promise((resolve, reject) => {
  try {
   setTimeout(() => {
    const f = new Date();
    const hora = f.getHours() * 60 + f.getMinutes() * 60 + f.getSeconds();
    resolve(users.filter(user => user.id === id)[0]);
    console.log(`passed and done ${hora}`);
   }, 2000)
  } catch (err) {
   reject(err);
   console.error(`Failed!! ${err}`)
  }
 })
}

function getProfesion(id) {
 return new Promise((resolve, reject) => {
  try {
   setTimeout(() => {
    resolve(profesion[id]);
    console.log('passed and donde');
   }, 3000)
  } catch (err) {
   reject(err);
   console.error('failed' + err);
  }
 })
}

getUsuarios()
 .then(data => {
  getUsuario(data, 2)
   .then(user => {
    console.log(user);
    const id = user.profesion_id;
    getProfesion(id)
     .then(prof => {
      console.log(`La profesion de ${user.nombre} es ${prof}`);
     })
     .catch(err => {
      console.error(err);
     })
   })
   .catch(err => {
    console.error(err)
   })
 })
 .catch(err => {
  console.error(err);
 })


console.log(usuarios);
console.log(profesion);

console.log(`termino mi carga ${hora}`)