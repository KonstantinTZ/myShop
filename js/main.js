// компоненты
import { getHeader } from "./components/header.js";
import { getPageContainer } from "./components/pageContainer.js";
import { getProductCard } from "./components/productCard.js";
import { getMainTitle } from "./components/mainTitle.js";
import { getDescr } from "./components/desc.js";


const app = document.getElementById('app')


const header = getHeader()
const pageContainer = getPageContainer()

export async function navigation(page) { // export function navigation из main делать не хорошо
    // будем использовать динамический импорт , что бы загружать только нужные страницы и не захламлять память
    pageContainer.innerHTML = ''

    switch (page) { // работает как табы
        case 'catalog':
            const pageModuleCatalog = await import("./pages/catalog.js") // динамический импорт, здесь получаем объект
            const catalogPage = pageModuleCatalog.getCatalogPage()
            // pageModuleCatalog.getCatalogPage() - т.к. из импорта приходит объект, а .getCatalogPage() - это ключ
            pageContainer.append(catalogPage)
            break
        case 'basket':
            const pageModuleBasket = await import("./pages/basket.js") // динамический импорт
            const basketPage = pageModuleBasket.getBasketPage()
            pageContainer.append(basketPage)
            break
        default :
        const pageModuleMain = await import("./pages/main.js") // динамический импорт // да файл называется main, но он относится к главной странице(первой)
            const mainPage = pageModuleMain.getMainPage()
            pageContainer.append(mainPage)
            break
    }
}


navigation () // запускаем, что бы загрузилась страница главное по default.

app.append(header, pageContainer)
