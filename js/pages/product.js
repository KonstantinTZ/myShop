import { getMainTitle } from "../components/mainTitle.js"
import { getDescr } from "../components/desc.js"
// стр товара
export function getProductPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')
    const mainTitle = getMainTitle('Продукт')
    const desc = getDescr('Страница в разработке')

    page.append(mainTitle, desc)
    return page;
}