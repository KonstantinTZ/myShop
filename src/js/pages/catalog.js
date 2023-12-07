import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js"
import { getDescr } from "/src/js/components/desc/desc.js"

// стр католога
export function getCatalogPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'catalog-page', 'container')
    const mainTitle = getMainTitle('Каталог')
    const desc = getDescr('Страница в разработке')

    page.append(mainTitle, desc)
    return page;
}