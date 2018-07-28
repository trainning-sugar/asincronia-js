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
   resolve(usuarios);
   console.log('passed and done');
  } catch (err) {
   reject(err);
   console.error(`failed!!  ${err}`);
  }
 })
};

function getUsuario(obj) {
 return new Promise((resolve, reject) => {
  try {
   resolve(obj);
   console.log('passed and done')
  } catch (err) {
   reject(err);
   console.error('failed' + err)
  }
 })
}

function getProfesion(id) {
 return new Promise((resolve, reject) => {
  try {
   resolve(profesion[id]);
   console.log('passed and donde');
  } catch (err) {
   reject(err);
   console.error('failed' + err);
  }
 })
}

getUsuarios()
 .then(data => {
  const user = data.filter(user => user.id === 2)[0]
  getUsuario(user)
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