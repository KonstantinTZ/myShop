import { getMainTitle } from "/src/js/components/mainTitle.js"
import { getProductCard } from "/src/js/components/productCard.js"

// Главная стр
export function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')
    const mainTitle = getMainTitle('Главная страница')



    const list = document.createElement('ul')
    list.classList.add('product-list', 'list-reset')

    list.append(
        getProductCard('Товар_1', '400'),
        getProductCard('Товар_2', '500'),
        getProductCard('Товар_3', '600')
    )


    page.append(mainTitle, list)
    return page;
}