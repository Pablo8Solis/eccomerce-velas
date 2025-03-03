// Mostrar carrito
const iconOpenCart = document.querySelector(".header-icon-cart");
const sectionCart = document.querySelector(".main__cart");

iconOpenCart.addEventListener(`click`, () =>{
    sectionCart.classList.toggle("show-cart");
})


//Cerrar carrito
const iconCloseCart = document.querySelector(".main__cart-top-icon");

iconCloseCart.addEventListener(`click`, () =>{
    sectionCart.classList.toggle("show-cart")
})

//Agregar cosas al carrito

const listCart = document.querySelector(".main__cart-list");
const addButton = document.querySelectorAll(".main__grid-products-box-textButton-button");
const buttonComprar = document.querySelector(".main__cart-button");
const cartCount = document.querySelector(".header-icon-cart-count");

// iniciar carrito
let cartItems =[];
const  updateCart = ()=>{
    cartCount.textContent = cartItems.length;
}

//mostrar boton comprar
const showButton = () =>{
    if(listCart.children.length === 0){
        buttonComprar.classList.add("hidden-button-comprar");
    } else{
        buttonComprar.classList.remove("hidden-button-comprar");
    }
}

//agregar productos al carrito
addButton.forEach((button) =>{
    button.addEventListener(`click`, (event) =>{
        const producto = event.target.closest(".main__grid-products");
        const name = producto.dataset.name;
        const price =producto.dataset.price;
        const imageSrc = producto.querySelector("img").src;

        //Mostrar carrito al agregar productos
        sectionCart.classList.add("show-cart");

        const newItem = { name, price, imageSrc };
        cartItems.push(newItem);
        //Crear el elemento que se agregara al carrito
        
        const itemCart = document.createElement("article");
        //itemCart.classList.add("main__cart-products");

        //Agregar estructura del producto al carrito

        itemCart.innerHTML = `
        <article class="main__cart-products">
                <div class="main__cart-products-box">
                    <img class="main__cart-products-img" src="${imageSrc}" alt="${name}">
                    <div class="main__cart-products-box-text">
                        <p class="main__cart-products-box-text-title">${name}</p>
                        <p class="main__cart-products-box-text-text">${price}</p>
                    </div>
                </div>
                <i class="main__cart-icons"><img src="img/delete-icon-blanco.svg" alt="delete-icon-cart"></i>
        </article>
        `
        ;

        //Agregar el producto

        listCart.appendChild(itemCart);
        updateCart();
        showButton();

        //Quitar elementos del carrito
        const iconDelete = document.querySelectorAll(".main__cart-icons");
        
        iconDelete.forEach(elem =>{
            elem.addEventListener(`click`, () =>{
                const elemParent = elem.parentElement;
                elemParent.remove();
                // Buscar el índice del producto en el array
                const index = cartItems.findIndex(item => item.name === name);
                // Si el producto existe en el carrito, se elimina
                if (index !== -1) {
                    cartItems.splice(index, 1);
                }
                updateCart();
                showButton();
            })
        })   
    })
    showButton();
})

// ---------------------------------

//Animavion titulo
// Animacion de titulos
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".tracking-in-expand-fwd-bottom");

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Agrega la clase para animar
        }
        });
    },
      { threshold: 0.5 } // Se activa cuando el 30% de la sección es visible
    );

    elements.forEach((el) => observer.observe(el));
});


//Seccion menú

const iconBurger = document.querySelector(".header__seccion-imagen-top-icons");
const sectionMenu = document.querySelector(".header__menu-mobile");
const iconCloseMenu = document.querySelector(".header__menu-mobile-box-icon");

//Abrir carrito
iconBurger.addEventListener(`click`,()=>{
    sectionMenu.classList.toggle("show-menu");
})

iconCloseMenu.addEventListener(`click`,()=>{
    sectionMenu.classList.toggle("show-menu");
})

//Agregar estilos
