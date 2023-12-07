import { router } from "/src/js/main.js";
// карточка товара
export function getProductCard(title, price) {
    const item = document.createElement('li');
    item.classList.add('product-list__item')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product-list__title')

    let productLink = document.createElement('a')
    productLink.textContent = title
    productLink.href = ''
    
    productLink.addEventListener('click', function(elem) {
        elem.preventDefault();
        router.navigate(`/product/${title}`)
    })

    productTitle.append(productLink)

    const productPrice = document.createElement('strong')
    productPrice.textContent = `${price} руб.`
    productPrice.classList.add('product-list__price')

    const addBasket = document.createElement('button')
    addBasket.textContent = `В корзину`
    addBasket.classList.add('btn')

    item.append(productTitle, productPrice, addBasket)

    return item
}