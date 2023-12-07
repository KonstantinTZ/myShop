import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js"

import { getProductsList } from "/src/js/components/productsList/productsList.js"
import  {URL}  from "/src/js/config"
// Главная стр
export function getMainPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'main-page', 'container')
    const mainTitle = getMainTitle('Главная страница')

    const product = getProductsList()
    product.getProducts(`${URL}/wp-json/wp/v1/products?count=4`) // -> потому что требуется URI

    page.append(mainTitle, product.productLists)
    return page;
}