// // nuestro objeto de prueba
// let customObject = {
//     name:'California, Eureka',
//     onClick:function(){
//       console.log("I've been clicked");
//       console.log(this.name);
//     }
//   }
//   // nuestro comportamiento al hacer clic
// //  $('button').click(customObject.onClick);
//   $('button').click(customObject.onClick.bind(customObject));

  
//   let newObject = {
//     name:"West Virginia,  Montani semper liberi"
//   }
//   // modifica el método del botón a esto:
//   $('button').click(customObject.onClick.bind(newObject));
  
// nuestro objeto de prueba
let customObject = {
    name:'California, Eureka',
    onClick:function(myParam){
      console.log("I've been clicked");
      console.log(myParam, "I've been passed by bind");
      console.log(this.name);
    }
  }
  // nuestro comportamiento al hacer clic
  $('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
  
  

  