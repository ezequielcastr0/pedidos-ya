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
    console.log("Inventario actual:");
    for (let producto of this.productos) {
      console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
    }
  }
  random() {
    var aleatorio = Math.floor(Math.random() *this.productos.length);
    const productoAleatorio =this.productos[aleatorio];
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

// Ejecución
let inventarioTienda = new Producto();

// Agregar productos al inventario
inventarioTienda.agregarProducto("Pizza",200);
inventarioTienda.agregarProducto("Manaos",200);
inventarioTienda.agregarProducto("Agua",100);

// Mostrar inventario inicial
inventarioTienda.mostrarInventario();
inventarioTienda.random();




  //https://github.com/configuroweb/nombres/blob/master/index.html// Fuente y codigo base
  //https://jorgesanchez.net/manuales/html/tablas-html.html#google_vignette//
  //https://www.youtube.com/watch?v=5DaZXXbHI_U//
  