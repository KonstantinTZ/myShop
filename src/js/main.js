// библиотеки, устанавливаем так, после подключения сборщика
import Navigo from "navigo";

// компоненты
import { getHeader } from "./components/header.js";
import { getPageContainer } from "./components/pageContainer.js";
import { getProductCard } from "./components/productCard.js";
import { getMainTitle } from "./components/mainTitle.js";
import { getDescr } from "./components/desc.js";


const app = document.getElementById('app')

// из документации к библиотеке роутера navigo
export const router = new Navigo('/'); // export const router что бы можно было использовать в других модулях

const header = getHeader()
const pageContainer = getPageContainer()


router.on('/', async () => {
    pageContainer.innerHTML = ''
    const pageModuleMain = await import("./pages/main.js") // динамический импорт // да файл называется main, но он относится к главной странице(первой)
    const mainPage = pageModuleMain.getMainPage()
    pageContainer.append(mainPage)
})

router.on('/catalog', async () => {
    pageContainer.innerHTML = ''
    const pageModuleCatalog = await import("./pages/catalog.js") // динамический импорт, здесь получаем объект
    const catalogPage = pageModuleCatalog.getCatalogPage()
    // pageModuleCatalog.getCatalogPage() - т.к. из импорта приходит объект, а .getCatalogPage() - это ключ
    pageContainer.append(catalogPage)
})

router.on('/basket', async () => {
    pageContainer.innerHTML = ''
    const pageModuleBasket = await import("./pages/basket.js") // динамический импорт
    const basketPage = pageModuleBasket.getBasketPage()
    pageContainer.append(basketPage)
})

router.on('/product/:title', async ({data}) => { //:title -но вообще пишется id, {data} - есть в документации Navigo
    pageContainer.innerHTML = ''
    const pageModuleProduct = await import("./pages/product.js") // динамический импорт
    const productPage = pageModuleProduct.getProductPage(data.title);
    pageContainer.append(productPage)
})

router.resolve();

app.append(header, pageContainer)
