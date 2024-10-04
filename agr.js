// Clase Inventario
class Inventario {
    constructor() {
      this.productos = [];
    }
  
    // Método para agregar productos al inventario
    agregarProducto(nombre, precio, cantidad) {
      this.productos.push({ nombre, precio, cantidad });
    }
  
    // Método para mostrar el inventario completo
    mostrarInventario() {
      for (let producto of this.productos) {
        document.getElementById('resultado').innerText = `Pedido aleatorio: ${producto.nombre},${producto.precio},${producto.cantidad}`;
        
      }
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
  let inventarioTienda = new Inventario();
  
  // Agregar productos al inventario
  inventarioTienda.agregarProducto("Pizza NAPO", 1, 10000);
  inventarioTienda.agregarProducto("COCA COLA", 2, 3000);
  inventarioTienda.agregarProducto("AGUA SABORIZADA", 1, 2000);
  
  // Mostrar inventario inicial
  inventarioTienda.mostrarInventario();
  
  // Calcular y mostrar el valor total del inventario
  let valorTotal = inventarioTienda.calcularValorTotalInventario();
  console.log(`Valor total del inventario: ${valorTotal}`);
