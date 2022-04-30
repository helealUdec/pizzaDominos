let menuPizza = document.querySelector('.menuPizza');

let pizzas = [];
pizzas.push(new Producto("img/pizzaHawaiana.jpg", "Pizza Hawaiana", "descripcion"));
pizzas.push(new Producto("img/pizza3estaciones.jpg", "Pizza 3 Estaciones", "descripcion"));
pizzas.push(new Producto("img/pizzaAmericana.jpg", "Pizza Americana", "descripcion"));
pizzas.push(new Producto("img/pizzaFiestaPeperoni.jpg", "Pizza Fiesta de Peperoni", "descripcion"));
pizzas.push(new Producto("img/pizzaSuperPollo.jpg", "Pizza Super Pollo", "descripcion"));


let i = 0;
pizzas.forEach(pizza => {
    let div = document.createElement('div');
    // crear elementos dentro del div
    let img = document.createElement('img');
    let a = document.createElement('a');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    // definir valores
    img.src = pizza.imagen;
    p.innerHTML = pizza.descripcion;
    h1.innerHTML = pizza.nombre;
    a.innerHTML = "PIDE YA";
    div.appendChild(img);
    div.appendChild(a);
    div.appendChild(h1);
    div.appendChild(p);
    menuPizza.appendChild(div);

    // anadir evento al boton
    a.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('objeto' + i,  JSON.stringify(pizza));
        i++;
    });
    
});



