import { router } from "/src/js/main.js";
import './productCard.css'
// карточка товара
export function getProductCard(productObj) {
    const item = document.createElement('li');
    item.classList.add('product')

    const productTitle = document.createElement('h2')
    productTitle.classList.add('product__title')

    const productPreview = document.createElement('img')
    productPreview.classList.add('product__productPreview')
    productPreview.src = productObj.preview

    let productLink = document.createElement('a')
    productLink.textContent = productObj.title
    productLink.href = ''
    
    productLink.addEventListener('click', function(elem) {
        elem.preventDefault();
        router.navigate(`/product/${productObj.id}`)
    })

    productTitle.append(productLink)

    const productPrice = document.createElement('strong')
    productPrice.textContent = `${productObj.price} руб.`
    productPrice.classList.add('product__price')

    const addBasket = document.createElement('button')
    addBasket.textContent = `В корзину`
    addBasket.classList.add('btn', "product__add-basket-btn")

    item.append(productPreview, productTitle, productPrice, addBasket)

    return item
}