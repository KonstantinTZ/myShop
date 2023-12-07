import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js"
import { getProductsList } from "/src/js/components/productsList/productsList.js"
import  {URL}  from "/src/js/config"


// стр католога
export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')
    const mainTitle = getMainTitle('Каталог')
    const product = getProductsList()
    product.getProducts(`${URL}/wp-json/wp/v1/products`) // -> потому что требуется URI

    page.append(mainTitle, product.productLists)
    return page;
}