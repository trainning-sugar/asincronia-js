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

function getUsuarios(cb) {
  try {
    cb(null, usuarios);
    console.log('passed and done');
  } catch (err) {
    cb(err);
    console.error('failed' + err);
  }
};

function getUsuario(id, cb) {
  try {
    cb(null, usuarios);
    console.log('passed and done')
  } catch (err) {
    console.error('failed' + err)
    throw err;
  }
}

function getProfesion(id, cb) {
  try {
    cb(null, profesion)
    console.log('passed and donde');
  } catch (err) {
    console.error('failed' + err);
    throw err;
  }
}

//Nested de callbacks
//Inversion de control

getUsuarios((err, todosArr) => {
  const userId = todosArr[1].id;
  console.log(userId);
  getUsuario(userId, (err, arr) => {
    const objUser = arr.filter(user => user.id === userId)[0];
    const profesionID = objUser.profesion_id;
    console.log(profesionID);
    getProfesion(profesionID, (err, obj)=>{
      console.log(profesion[profesionID]);
      console.log(`la profesion de ${objUser.nombre} es ${obj[profesionID]}`)
    } )

  })
})