import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js"
import { getDescr } from "/src/js/components/desc/desc.js"

// стр католога
export function getOrderPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')
    const mainTitle = getMainTitle('Оформление')
    const desc = getDescr('Здесь оформление заказа')

    page.append(mainTitle, desc)
    return page;
}