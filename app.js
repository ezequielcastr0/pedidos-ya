// Función asincrónica para simular una solicitud de pedido
async function placeOrder() {
    
    // Devuelve una nueva Promesa
    return new Promise((resolve) => {
       
        // Simula un retraso en la solicitud usando setTimeout
        setTimeout(() => {
          
            // Cuando el retraso termina, resuelve la Promesa con el mensaje de éxito
            resolve("Pedido realizado con éxito!"); // Mensaje de éxito
        }, 1000); // Retraso de 1 segundo
    });
}

// Función asincrónica para simular una solicitud de pedido
async function entregado() {
    
    // Devuelve una nueva Promesa
    return new Promise((resolve) => {
       
        // Simula un retraso en la solicitud usando setTimeout
        setTimeout(() => {
          
            // Cuando el retraso termina, resuelve la Promesa con el mensaje de éxito
            resolve("Pedido entregado  con éxito!"); // Mensaje de éxito
        }, 5000); // Retraso de 1 segundo
    });
}

async function placeWait() {
    
    // Devuelve una nueva Promesa
    return new Promise((resolve) => {
       
        // Simula un retraso en la solicitud usando setTimeout
        setTimeout(() => {
          
            // Cuando el retraso termina, resuelve la Promesa con el mensaje de éxito
            resolve("El pedido esta en preparacion. . ."); // Mensaje de éxito
        }, 2000); // Retraso de 10 segundo
    });
}

function generarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 5) + 1;
    document.getElementById('numero-aleatorio').innerText = `Pedido aleatorio: ${numero}`;

}

async function pedidoEncamino() {
    
    // Devuelve una nueva Promesa
    return new Promise((resolve) => {
       
        // Simula un retraso en la solicitud usando setTimeout
        setTimeout(() => {
          
            // Cuando el retraso termina, resuelve la Promesa con el mensaje de éxito
            resolve("el pedido esta en camino. . ."); // Mensaje de éxito
        }, 3000); // Retraso de 10 segundo
    });
}


// Función asincrónica para manejar el clic en el botón de realizar pedido
    async function handleOrderButtonClick() {


    generarNumeroAleatorio();
    
    // Crea un nuevo elemento <div> para mostrar el estado del pedido
    const statusElement = document.createElement('div');
    
    // Añade una clase CSS al nuevo elemento para aplicar estilos
    statusElement.classList.add('order-status'); // Añade una clase para estilo
   
    // Establece el texto inicial del elemento <div> para indicar que el pedido está en proceso
    statusElement.textContent = "Pedido en proceso...";
    
    // Agrega el nuevo elemento <div> al contenedor con id 'order-status-container' en el DOM
    document.getElementById('order-status-container').appendChild(statusElement); // Agrega el mensaje al contenedor

    try {

       

        // Llama a la función placeOrder y espera a que se complete
        const response = await placeOrder(); // Realiza el pedido
        // Una vez completado el pedido, actualiza el texto del elemento <div> con el mensaje de éxito
        statusElement.classList.add('order-success'); // Añade clase de éxito
        statusElement.textContent = response;
        

        const responde = await placeWait(); // En espera
        statusElement.classList.add('order-wait'); // Añade clase de éxito
        statusElement.textContent = responde;
       
        const respon = await pedidoEncamino(); // En espera
        statusElement.classList.add('order-encamino'); // Añade clase de éxito
        statusElement.textContent = respon;

        const respo = await entregado(); // En espera
        statusElement.classList.add('order-entregada'); // Añade clase de éxito
        statusElement.textContent = respo;
        
    } catch (error) {
        // Si ocurre un error al realizar el pedido, captura el error
        statusElement.textContent = `Error: ${error.message}`;
        
        // Añade una clase CSS para indicar que ocurrió un error
        statusElement.classList.add('order-error'); // Añade clase de error
    }
}
        
function generate(){
	var firstname = ["Adrián", "Agustín", "Alberto", "Alejandro", "Alexander", "Alexis", "Alonso", "Andrés Felipe", "Ángel", "Anthony", "Antonio", "Bautista", "Benicio", "Benjamín", "Carlos", "Carlos Alberto", "Carlos Eduardo", "Carlos Roberto", "César", "Cristóbal", "Daniel", "David", "Diego", "Dylan", "Eduardo", "Emiliano", "Emmanuel", "Enrique", "Erik", "Ernesto", "Ethan", "Fabián", "Facundo", "Felipe", "Félix", "Félix María", "Fernando", "Francisco", "Francisco Javier", "Gabriel", "Gaspar", "Gustavo Adolfo", "Hugo", "Ian", "Iker", "Isaac", "Jacob", "Javier", "Jayden", "Jeremy", "Jerónimo", "Jesús", "Jesús Antonio", "Jesús Víctor", "Joaquín", "Jorge", "Jorge  Alberto", "Jorge Luis", "José", "José Antonio", "José Daniel", "José David", "José Francisco", "José Gregorio", "José Luis", "José Manuel", "José Pablo", "Josué", "Juan", "Juan Ángel", "Juan Carlos", "Juan David", "Juan Esteban", "Juan Ignacio", "Juan José", "Juan Manuel", "Juan Pablo", "Juan Sebastián", "Julio", "Julio Cesar", "Justin", "Kevin", "Lautaro", "Liam", "Lian", "Lorenzo", "Lucas", "Luis", "Luis Alberto", "Luis Emilio", "Luis Fernando", "Manuel", "Manuel Antonio", "Marco Antonio", "Mario", "Martín", "Mateo", "Matías", "Maximiliano", "Maykel", "Miguel", "Miguel  ngel", "Nelson", "Noah", "Oscar", "Pablo", "Pedro", "Rafael", "Ramón", "Raúl", "Ricardo", "Rigoberto", "Roberto", "Rolando", "Samuel", "Samuel David", "Santiago", "Santino", "Santos", "Sebastián", "Thiago", "Thiago Benjamín", "Tomás", "Valentino", "Vicente", "Víctor", "Víctor Hugo"];
	var lastname= ["Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Sanchez", "Perez", "Gomez", "Martin", "Jimenez", "Ruiz", "Hernandez", "Diaz", "Moreno", "Alvarez", "Muñoz", "Romero", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez",
	"Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Suarez", "Molina", "Morales", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio", "Marin", "Sanz", "Nuñez", "Iglesias", "Medina", "Garrido", "Santos", "Castillo", "Cortes", "Lozano", "Guerrero", "Cano", "Prieto", "Mendez", "Calvo", "Cruz", "Gallego", "Vidal", "Leon", "Herrera", "Marquez", "Peña", "Cabrera", "Flores", "Campos", "Vega", "Diez", "Fuentes", "Carrasco", "Caballero", "Nieto", "Reyes", "Aguilar", "Pascual", "Herrero", "Santana", "Lorenzo", "Hidalgo", "Montero", "Ibañez", "Gimenez", "Ferrer", "Duran", "Vicente", "Benitez", "Mora", "Santiago", "Arias", "Vargas", "Carmona", "Crespo", "Roman", "Pastor", "Soto", "Saez", "Velasco", "Soler", "Moya", "Esteban", "Parra", "Bravo", "Gallardo", "Rojas", "Pardo", "Merino", "Franco", "Espinosa", "Izquierdo", "Lara", "Rivas", "Silva", "Rivera", "Casado", "Arroyo", "Redondo", "Camacho", "Rey", "Vera", "Otero", "Luque", "Galan", "Montes", "Rios", "Sierra", "Segura", "Carrillo", "Marcos", "Marti", "Soriano", "Mendoza"];
	var rand_first = Math.floor(Math.random()*firstname.length); 
	var rand_last = Math.floor(Math.random()*lastname.length); 
	document.getElementById('result').innerHTML = "<h1>Nombre:</h1><div class='alert alert-success'><h2>"+firstname[rand_first]+" "+lastname[rand_last]+"</h2></div>";
    }

    // Evento que se dispara cuando el DOM está completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
    // Agrega un manejador de eventos al botón con id 'place-order-btn'
   
    // Cuando se haga clic en el botón, se llamará a la función handleOrderButtonClick
    document.getElementById('place-order-btn').addEventListener('click', handleOrderButtonClick);


});