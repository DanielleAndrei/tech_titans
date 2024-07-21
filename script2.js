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
    /*Ramen*/
    {
        id: 1,
        name: 'Shoyu Ramen',
        image: 'best_sell1.png',
        price: 275
    },

    {
        id: 2,
        name: 'Tonkotsu Ramen',
        image: 'best_sell2.png',
        price: 265       
    },

    /*Katsu*/

    {
        id: 41,
        name: ' Katsu Kare-Kare',
        image: '25.png',
        price: 195
    },

    {
        id: 42,
        name: 'Katsu Ala King',
        image: '26.png',
        price: 190       
    },

    {
        id: 43,
        name: 'Katsu Pamagiana',
        image: '27.png',
        price: 195
    },

    {
        id: 44,
        name: 'Katsu Spring Rolls',
        image: '28.png',
        price: 215       
    },

    /*Taiyaki*/

    {
        id: 5,
        name: 'Custard 2PCS',
        image: '12.png',
        price: 50
    },

    {
        id: 6,
        name: 'Custard Half Dozen',
        image: '12.png',
        price: 145
    },

    {
        id: 7,
        name: 'Red Bean 2PCS',
        image: '13.png',
        price: 50
    },

    {
        id: 8,
        name: 'Red Bean Half Dozen',
        image: '13.png',
        price: 145
    },

    {
        id: 9,
        name: 'Chocolate 2PCS',
        image: '14.png',
        price: 50
    },

    {
        id: 10,
        name: 'Chocolate Half Dozen',
        image: '14.png',
        price: 145
    },

    {
        id: 11,
        name: 'Matcha Cream 2PCS',
        image: '15.png',
        price: 50
    },

    {
        id: 12,
        name: 'Matcha Cream Half Dozen',
        image: '15.png',
        price: 145
    },

    {
        id: 13,
        name: 'Cream Cheese 2PCS',
        image: '16.png',
        price: 60
    },

    {
        id: 14,
        name: 'Cream Cheese Half Dozen',
        image: '16.png',
        price: 165
    },

    {
        id: 15,
        name: 'Oreo 2PCS',
        image: '17.png',
        price: 60
    },

    {
        id: 16,
        name: 'Oreo Half Dozen',
        image: '17.png',
        price: 165
    },

    {
        id: 17,
        name: 'Ube Cheese 2PCS',
        image: '18.png',
        price: 60
    },

    {
        id: 18,
        name: 'Ube Cheese Half Dozen',
        image: '18.png',
        price: 165
    },

    {
        id: 19,
        name: 'Sausage 2PCS',
        image: '19.png',
        price: 80
    },

    {
        id: 20,
        name: 'Sausage Half Dozen',
        image: '19.png',
        price: 235
    },

    {
        id: 21,
        name: 'Ham & Cheese 2PCS',
        image: '20.png',
        price: 80
    },

    {
        id: 22,
        name: 'Ham & Cheeses Half Dozen',
        image: '20.png',
        price: 235
    },

    {
        id: 23,
        name: 'Chili Crab & Cheese 2PCS',
        image: '22.png',
        price: 80
    },

    {
        id: 24,
        name: 'Chili Crab & Cheese <br> Half Dozen',
        image: '22.png',
        price: 235
    },

    {
        id: 25,
        name: 'Bacon & Maple 2PCS',
        image: '23.png',
        price: 80
    },

    {
        id: 26,
        name: 'Bacon & Maple Half Dozen',
        image: '23.png',
        price: 235
    },

    {
        id: 27,
        name: 'Cheesy Bacon 2PCS',
        image: '24.png',
        price: 80
    },

    {
        id: 28,
        name: 'Cheesy Bacon Half Dozen',
        image: '24.png',
        price: 235
    },

    
    /*Yogurt*/

    {
        id: 29,
        name: 'Peach Mango',
        image: 'best_sell3.png',
        price: 95
    },

    {
        id: 30,
        name: 'Muscuvado Pearl',
        image: 'new1.jpg',
        price: 95
    },

    {
        id: 31,
        name: 'Fresh Lemonade',
        image: 'new2.jpg',
        price: 75
    },
    /*Milk & Cofee*/
    {
        id: 32,
        name: 'Blueberry',
        image: 'new3.jpg',
        price: 95
    },

    {
        id: 33,
        name: 'Matcha Milk',
        image: 'p6.jpg',
        price: 85
    },

    {
        id: 34,
        name: 'Strawberry',
        image: 'new5.jpg',
        price: 85
    },

    {
        id: 35,
        name: 'Choco Milk',
        image: 'best_sell4.png',
        price: 75
    },

    {
        id: 36,
        name: 'Mocha Cofee',
        image: 'p11.jpg',
        price: 65
    },

    /*Strawberry Series*/
    {
        id: 37,
        name: 'Matcha Milk Strawbery',
        image: '8.png',
        price: 145
    },

    {
        id: 38,
        name: 'Strawberry Banana Yogurt',
        image: '10.png',
        price: 135
    },

    {
        id: 39,
        name: ' Milk Strawberry Pearls',
        image: '9.png',
        price: 135
    },

    {
        id: 40,
        name: 'Mocha Cofee',
        image: '11.png',
        price: 140
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