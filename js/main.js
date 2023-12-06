const app = document.getElementById('app')

// создаем шапку
function getHeader() {
    const header = document.createElement('header');
    header.classList.add('header')

    const container = document.createElement('div');
    container.classList.add('container', 'header__container')


    const nav = document.createElement('nav');
    nav.classList.add('navigation')

    let link1 = document.createElement('a');
    link1.href = '#'
    link1.classList.add('btn')
    link1.textContent = 'Главная страница'

    link1.addEventListener('click', function (event) {
        event.preventDefault();
        navigation() // т.к. есть параметр в swich case - default
    })

    let link2 = document.createElement('a');
    link2.href = '#'
    link2.classList.add('btn')
    link2.textContent = 'Каталог'

    link2.addEventListener('click', function (event) {
        event.preventDefault();
        navigation('catalog')
    })

    let link3 = document.createElement('a');
    link3.href = '#'
    link3.classList.add('btn')
    link3.textContent = 'Корзина'

    link3.addEventListener('click', function (event) {
        event.preventDefault();
        navigation('basket')
    })

    nav.append(link1, link2, link3)
    container.append(nav)
    header.append(container)


    return header
}

// контейнер для страниц
function getPageContainer() {
    const main = document.createElement('main');
    main.classList.add('paige-container')
    return main
}

function getProductCard(title, price) {
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

// create main title
function getMainTitle(text) {
    const title = document.createElement('h1')
    title.textContent = text
    title.classList.add('main-title')


    return title;

}

// create description
function getDescr(text) {
    const desc = document.createElement('p')
    desc.textContent = text
    desc.classList.add('desc')


    return desc;

}

// Главная стр
function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')
    const mainTitle = getMainTitle('Главная страница')



    const list = document.createElement('ul')
    list.classList.add('product-list', 'list-reset')

    list.append(
        getProductCard('Товар1', '400'),
        getProductCard('Товар2', '500'),
        getProductCard('Товар3', '600')
    )


    page.append(mainTitle, list)
    return page;
}


// стр товара
function getProductPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')
    const mainTitle = getMainTitle('Продукт')
    const desc = getDescr('Страница в разработке')

    page.append(mainTitle, desc)
    return page;
}

// стр католога
function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')
    const mainTitle = getMainTitle('Каталог')
    const desc = getDescr('Страница в разработке')

    page.append(mainTitle, desc)
    return page;
}

// стр корзины
function getBasketPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'basket-page', 'container')
    const mainTitle = getMainTitle('Корзиниа')
    const desc = getDescr('Страница в разработке')

    page.append(mainTitle, desc)
    return page;
}

const header = getHeader()
const pageContainer = getPageContainer()

function navigation(page) {
    pageContainer.innerHTML = ''

    switch (page) { // работает как табы
        case 'catalog':
            const catalogPage = getCatalogPage()
            pageContainer.append(catalogPage)
            break
        case 'basket':
            const basketPage = getBasketPage()
            pageContainer.append(basketPage)
            break
        default :
            const mainPage = getMainPage()
            pageContainer.append(mainPage)
            break
    }
}


navigation () // запускаем, что бы загрузилась страница главное по default.

app.append(header, pageContainer)
