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


    let modeloTabla='<table class="table table-hover"';
    modeloTabla=modeloTabla+'<tr> <th>Producto</th> <th> Precio</th>'
  
    
  
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

function mostratTabla(){
  let modeloTabla='<table>';
  modeloTabla=modeloTabla+'<tr> <th>Producto</th> <th> Precio</th>'



  modeloTabla=modeloTabla + '</table>'
  document.getElementById('lista').innerHTML=modeloTabla;

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
 
 