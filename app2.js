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
    for (let i = 0; i < aleatorioo; i++ ){
      const aleatorio = Math.floor(Math.random() *this.productos.length);
      const producto = this.productos[aleatorio];
      console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
    }
  }
  random() {
    const aleatorio = Math.floor(Math.random() *this.productos.length);
    let productoAleatorio =this.productos[aleatorio];
    console.log(`Producto aleatorio: ${productoAleatorio.nombre}, Precio: ${productoAleatorio.precio}`);
    document.getElementById('resultado').innerHTML = `Producto aleatorio: ${productoAleatorio.nombre} - Precio: ${productoAleatorio.precio}`;
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
function generarNumeroAleatorio() {
  const numero = Math.floor(Math.random() * 5) + 1;
  document.getElementById('numero-aleatorio').innerHTML = `Pedido aleatorio: ${numero}`;
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

// Mostrar inventario inicial
inventarioTienda.mostrarInventario();
inventarioTienda.random();
inventarioTienda.random();




//https://jorgesanchez.net/manuales/html/tablas-html.html#google_vignette/
  //https://github.com/configuroweb/nombres/blob/master/index.html// Fuente y codigo base
  //https://jorgesanchez.net/manuales/html/tablas-html.html#google_vignette//
  //https://www.youtube.com/watch?v=5DaZXXbHI_U//
  