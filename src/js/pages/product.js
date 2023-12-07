import { getMainTitle } from "/src/js/components/mainTitle.js"
import { getDescr } from "/src/js/components/desc.js"
// стр товара
export function getProductPage(title) { // title - приходит из main.js из роутера {data}
    const page = document.createElement('div')
    page.classList.add('page', 'product-page', 'container')
    const mainTitle = getMainTitle(title) // прокидываем параметр  title вниз
    const desc = getDescr('Страница в разработке')

    page.append(mainTitle, desc)
    return page;
}