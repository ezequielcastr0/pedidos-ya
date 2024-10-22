class Producto {
  constructor() {
    this.productos = [];
  }

  // Método para agregar productos al inventario
  agregarProducto(nombre, precio) {
    this.productos.push({ nombre, precio});
  }

  // Método para mostrar el inventario completo
  mostrarInventario() {
    console.log("PEDIDO:");
    const aleatorioo = Math.floor(Math.random() *this.productos.length);

      var firstname = ["Adrián", "Agustín", "Alberto", "Alejandro", "Alexander", "Alexis", "Alonso", "Andrés Felipe", "Ángel", "Anthony", "Antonio", "Bautista", "Benicio", "Benjamín", "Carlos", "Carlos Alberto", "Carlos Eduardo", "Carlos Roberto", "César", "Cristóbal", "Daniel", "David", "Diego", "Dylan", "Eduardo", "Emiliano", "Emmanuel", "Enrique", "Erik", "Ernesto", "Ethan", "Fabián", "Facundo", "Felipe", "Félix", "Félix María", "Fernando", "Francisco", "Francisco Javier", "Gabriel", "Gaspar", "Gustavo Adolfo", "Hugo", "Ian", "Iker", "Isaac", "Jacob", "Javier", "Jayden", "Jeremy", "Jerónimo", "Jesús", "Jesús Antonio", "Jesús Víctor", "Joaquín", "Jorge", "Jorge  Alberto", "Jorge Luis", "José", "José Antonio", "José Daniel", "José David", "José Francisco", "José Gregorio", "José Luis", "José Manuel", "José Pablo", "Josué", "Juan", "Juan Ángel", "Juan Carlos", "Juan David", "Juan Esteban", "Juan Ignacio", "Juan José", "Juan Manuel", "Juan Pablo", "Juan Sebastián", "Julio", "Julio Cesar", "Justin", "Kevin", "Lautaro", "Liam", "Lian", "Lorenzo", "Lucas", "Luis", "Luis Alberto", "Luis Emilio", "Luis Fernando", "Manuel", "Manuel Antonio", "Marco Antonio", "Mario", "Martín", "Mateo", "Matías", "Maximiliano", "Maykel", "Miguel", "Miguel  ngel", "Nelson", "Noah", "Oscar", "Pablo", "Pedro", "Rafael", "Ramón", "Raúl", "Ricardo", "Rigoberto", "Roberto", "Rolando", "Samuel", "Samuel David", "Santiago", "Santino", "Santos", "Sebastián", "Thiago", "Thiago Benjamín", "Tomás", "Valentino", "Vicente", "Víctor", "Víctor Hugo"];
      var lastname= ["Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin", "Jimenez", "Ruiz", "Hernandez", "Diaz", "Moreno", "Alvarez", "Muñoz", "Romero", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez",
      "Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Suarez", "Molina", "Morales", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez", "Iglesias", "Medina", "Garrido", "Santos", "Castillo", "Cortes", "Lozano", "Guerrero", "Cano", "Prieto", "Mendez", "Calvo", "Cruz", "Gallego", "Vidal", "Leon", "Herrera", "Marquez", "Peña", "Cabrera", "Flores", "Campos", "Vega", "Diez", "Fuentes", "Carrasco", "Caballero", "Nieto", "Reyes", "Aguilar", "Pascual", "Herrero", "Santana", "Lorenzo", "Hidalgo", "Montero", "Ibañez", "Gimenez", "Ferrer", "Duran", "Vicente", "Benitez", "Mora", "Santiago", "Arias", "Vargas", "Carmona", "Crespo", "Roman", "Pastor", "Soto", "Saez", "Velasco", "Soler", "Moya", "Esteban", "Parra", "Bravo", "Gallardo", "Rojas", "Pardo", "Merino", "Franco", "Espinosa", "Izquierdo", "Lara", "Rivas", "Silva", "Rivera", "Casado", "Arroyo", "Redondo", "Camacho", "Rey", "Vera", "Otero", "Luque", "Galan", "Montes", "Rios", "Sierra", "Segura", "Carrillo", "Marcos", "Marti", "Soriano", "Mendoza"];
      var rand_first = Math.floor(Math.random()*firstname.length); 
      var rand_last = Math.floor(Math.random()*lastname.length); 

    let modeloTabla='<table class="table table-hover"';
    modeloTabla=modeloTabla+'<tr> <th>Cliente<tr><td>'+firstname[rand_first] +' </td></tr></th> <th>Producto</th> <th> Precio</th>'
  
  
    for (let i = 0; i < aleatorioo; i++ ){
      const aleatorio = Math.floor(Math.random() *this.productos.length);
      const producto = this.productos[aleatorio];
      console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
      modeloTabla=modeloTabla+'<tr>' ;
     
      modeloTabla=modeloTabla+'<td>'+producto.nombre +'</td>' ;
      modeloTabla=modeloTabla+'<td>'+producto.precio +'</td>' ;
      modeloTabla=modeloTabla+'</tr>' ;
     
    }
    
    modeloTabla=modeloTabla + '</table>'
    document.getElementById('lista').innerHTML=modeloTabla;
  }
  // Método para calcular el valor total del inventario
  calcularValorTotalInventario() {
    let valorTotal = 0;
    for (let producto of this.productos) {
      valorTotal += producto.precio * producto.cantidad;
    }
    return valorTotal;
  }

}


// Ejecución
let inventarioTienda = new Producto();

// Agregar productos al inventario
inventarioTienda.agregarProducto("Pizza",10000);
inventarioTienda.agregarProducto("Coca-Cola",3000);
inventarioTienda.agregarProducto("Agua Chica",300);
inventarioTienda.agregarProducto("Milanesa",5000);
inventarioTienda.agregarProducto("Saladix",1500);
inventarioTienda.agregarProducto("Agua saboriza",2300);
inventarioTienda.agregarProducto("Pepsi",2800);
inventarioTienda.agregarProducto("Docena de empanadas",10000);







//https://jorgesanchez.net/manuales/html/tablas-html.html#google_vignette/
  //https://github.com/configuroweb/nombres/blob/master/index.html// Fuente y codigo base
  //https://jorgesanchez.net/manuales/html/tablas-html.html#google_vignette//
 
 