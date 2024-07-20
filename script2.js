let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Shoyu Ramen',
        image: 'best_sell1.png',
        price: 1500
    },

    {
        id: 2,
        name: 'Tonkotsu Ramen',
        image: 'best_sell2.png',
        price: 1250        
    },

    {
        id: 3,
        name: 'Chili Crab & Cheese',
        image: 'p3.jpg',
        price: 1500
    },

    {
        id: 4,
        name: 'Ube and Cheese',
        image: 'p4.jpg',
        price: 1150
    },

    {
        id: 5,
        name: 'Peach Mango',
        image: 'best_sell3.png',
        price: 1450
    },

    {
        id: 6,
        name: 'Muscuvado Pearl',
        image: 'new1.jpg',
        price: 1999
    },

    {
        id: 7,
        name: 'Fresh Lemonade',
        image: 'new2.jpg',
        price: 1999
    },

    {
        id: 8,
        name: 'Blueberry',
        image: 'new3.jpg',
        price: 1850
    },

    {
        id: 9,
        name: 'Matcha Milk',
        image: 'p6.jpg',
        price: 2500
    },

    {
        id: 10,
        name: 'Strawberry',
        image: 'new5.jpg',
        price: 2500
    },

    {
        id: 11,
        name: 'Choco Milk',
        image: 'best_sell4.png',
        price: 1000
    },

    {
        id: 12,
        name: 'Mocha Cofee',
        image: 'p11.jpg',
        price: 999
    },
];

let listCarts = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCart(key) {
    if (listCarts[key] == null) {
        listCarts[key] = { ...products[key], quantity: 1 }; // Add product with quantity
    } else {
        listCarts[key].quantity++; // Increment quantity if product already exists
    }
    reloadCart();
    displayNotification("Item added to cart");
}


function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCart.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
    listCarts[key].quantity = newQuantity;
    reloadCart();
}

function redirectToCheckout() {
    window.location.href = 'index1.html'; 
}

function redirectToMain() {
    window.location.href = 'index.html'; 
}

function displayNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove the notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}