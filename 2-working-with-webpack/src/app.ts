let msg = `Hellow World, I'm learning TypeScript 2`;
let msgs = [
  {
    contenido: 'Hola'
  },
  {
    contenido: 'TypeScript'
  },
  {
    contenido: 'Hasta pronto'
  }
]

msgs.map(function(actualMsg){
  return actualMsg.contenido.toUpperCase();
})

console.log(msg);
