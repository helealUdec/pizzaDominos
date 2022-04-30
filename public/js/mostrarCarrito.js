

let carrito = document.querySelector('.mostrarCarrito');
let li = document.querySelector('.carrito');
let body = document.querySelector('body');
body.addEventListener('click', (e) => {
    e.stopPropagation();
    carrito.classList = "mostrarCarrito oculto";
});

li.addEventListener('mouseover', (e) => {
    carrito.classList = "mostrarCarrito";
    actualizar();
});


function actualizar() {
    carrito.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let producto = localStorage.getItem(clave);
        producto = JSON.parse(producto);
        let div = document.createElement('div');
        // crear elementos dentro del div
        let img = document.createElement('img');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let text = document.createElement('div');
        let ip = document.createElement('i');
        ip.classList =  "fa-solid fa-trash-can";
        //let a = document.createElement('a');
        //a.appendChild(ip);
        text.classList = "divText";
        // definir valores
        img.src = producto.imagen;
        p.innerHTML = producto.descripcion;
        h1.innerHTML = producto.nombre;
        div.appendChild(img);
        text.appendChild(h1);
        text.appendChild(document.createElement('br'));
        text.appendChild(p);

        div.appendChild(text);
        div.appendChild(ip);
        carrito.appendChild(div);
        div.classList = "divCarrito";

        ip.addEventListener('click', (e) => {
            
            alert('d');
        });
    }
    
}