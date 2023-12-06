import { getMainTitle } from "../components/mainTitle.js"
import { getDescr } from "../components/desc.js"

// стр корзины
export function getBasketPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'basket-page', 'container')
    const mainTitle = getMainTitle('Корзиниа')
    const desc = getDescr('Страница в разработке')

    page.append(mainTitle, desc)
    return page;
}