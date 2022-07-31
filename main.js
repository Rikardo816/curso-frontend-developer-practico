const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarridoAside);

function toggleDesktopMenu(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');

    if(isAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');

    if(isAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarridoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://m.media-amazon.com/images/I/71+E-vRcQ+L._AC_SX425_.jpg',

});

productList.push({
    name: 'Screen',
    price: 400,
    image: 'https://www.compugamer.com.ec/compu/480-large_default/XG27VQ.jpg'
});

productList.push({
    name: 'Computer',
    price: 1000,
    image: 'https://www.tecnosmart.com.ec/wp-content/uploads/2021/08/Pc-Gamer.png'
});

function renderProducts(arr){
    
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDiv = document.createElement('div');
    
        const productName = document.createElement('p');
        const productPrice = document.createElement('p');
        productName.innerText = product.name;
        productPrice.innerText = product.price;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

