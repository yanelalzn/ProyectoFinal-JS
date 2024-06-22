const productos = [
    {
    nombre: 'Clasic Short Dress',
    precioant: 'PEN 100.00',
    precio: 'PEN 80.00',
    imagen: 'https://ih1.redbubble.net/image.2141290934.1326/aldr,x1440,front-c,168,326,600,600-bg,f8f8f8.jpg'
    },
    {
    nombre: 'Short Wheat Dress ',
    precioant: 'PEN 280.00',
    precio: 'PEN 180.00',
    imagen: 'https://i.pinimg.com/236x/b1/1e/e6/b11ee6f50c428a52ab928bd1c8fe5d4b.jpg'
    },
    {
    nombre: 'Long LightBlue Dress',
    precioant: 'PEN 500.00',
    precio: 'PEN 480.00',
    imagen: 'https://i.pinimg.com/564x/af/fc/30/affc300c3172826a5fce7cecc7bfe018.jpg'
    },
    {
    nombre: 'Long Red Dress',
    precioant: 'PEN 500.00',
    precio: 'PEN 300.00',
    imagen: 'https://i.pinimg.com/564x/b9/ae/3c/b9ae3c4dbc57e2b8ff85f98aeb1e8e9e.jpg'
    },
    {
    nombre: 'Long Black Dress',
    precioant: 'PEN 400.00',
    precio: 'PEN 320.00',
    imagen: 'https://i.pinimg.com/564x/b2/82/7e/b2827eaf1cd3308389d4909bbcb76f01.jpg'
    },
    {
    nombre: 'Long Blue Dress',
    precioant: 'PEN 300.00',
    precio: 'PEN 280.00',
    imagen: 'https://i.pinimg.com/564x/55/a0/9d/55a09d5ff846a69f97b89043b515ab97.jpg'
    }
    ];
    function pintarProductos(productos){
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    
    productos.forEach( producto =>{
    //generar un elemento nuevo
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');
    
    productoDiv.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <p class="title-cat">${producto.nombre}</p>
    <p class="tachado">${producto.precioant}</p>
    <p>${producto.precio}</p>
   <div class="btn-cat"> 
        <a href="lightBlue-Dress.html" class="btn btn-color btn-block">Ver detalle</a>
    </div>
    `;
    
    contenedor.appendChild(productoDiv);
    } );
    }
    
    pintarProductos(productos);