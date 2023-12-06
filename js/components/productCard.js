// карточка товара
export function getProductCard(title, price) {
    const item = document.createElement('li');
    item.classList.add('product-list__item')

    const productTitle = document.createElement('h2')
    productTitle.textContent = title
    productTitle.classList.add('product-list__title')

    const productPrice = document.createElement('strong')
    productPrice.textContent = `${price} руб.`
    productPrice.classList.add('product-list__price')

    const addBasket = document.createElement('button')
    addBasket.textContent = `В корзину`
    addBasket.classList.add('btn')

    item.append(productTitle, productPrice, addBasket)

    return item
}