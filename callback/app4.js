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
  nombre: 'cesar',
  profesion_id: 2
 },
 {
  id: 4,
  nombre: 'mario',
  profesion_id: 3
 }
];



const profesion = {
 1: 'developer',
 2: 'diseñador',
 3: 'arquitect'
}

const root = document.getElementById('root');
const options = {};

const getUsers = (url, callback) => {
 setTimeout(() => {
  try {
   callback(null, url);
  } catch (err) {
   callback(new Error(`Algo paso al momento de llamar a todos los usuarios ${err}`));
  }
 }, 1000)
};

const getUser = (id, callback) => {
 const user = options.data.filter(user => user.id === id)[0];
 try {
  callback(null, user)
 } catch (err) {
  callback(new Error(`Algo paso al momento de seleccionar al usuario ${err}`))
 }
};

const getProfesion = (url, callback) => {
 try {
  callback(null, url)
 } catch (err) {
  callback(new Error(`Algo paso al llamar a las profesiones ${err}`));
 }
}

const printUsers = users => {
 let template = '';
 users.forEach(user => {
  template += `<li><a id=${user.id} href="#" class="user">${user.nombre}</a></li>`
 });
 root.appendChild(document.createElement('ul'));
 root.firstElementChild.innerHTML = template;
 root.appendChild(document.createElement('div'));
 root.lastElementChild.id = 'dataUser';
}

const printUserDetail = user => {
 const wrapUserDetail = document.getElementById('dataUser');
 const template = `<p>${user.nombre} es ${user.profesion}</p>`
 wrapUserDetail.innerHTML = template;
}


root.addEventListener('click', e => {
 getUser(Number(e.target.id), (err, user) => {
  if (err) throw console.error(err);
  options.userSelected = user;
  getProfesion(profesion, (err, profesion) => {
   if (err) throw console.error(err);
   options.userSelected.profesion = profesion[options.userSelected.profesion_id]
   printUserDetail(options.userSelected)
  })
 });
})


getUsers(usuarios, (err, data) => {
 if (err) throw console.error(err)
 options.data = data;
 printUsers(data);
})