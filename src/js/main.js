// библиотеки, устанавливаем так, после подключения сборщика
import Navigo from "navigo";

// компоненты
import { getHeader } from "/src/js/components/header/header.js";
import { getPageContainer } from "/src/js/components/pageContainer/pageContainer.js";



const app = document.getElementById('app')

// из документации к библиотеке роутера navigo
export const router = new Navigo('/'); // export const router что бы можно было использовать в других модулях

const header = getHeader() // вот здесь теперь возвращается объект {header,setActiveLink}
const pageContainer = getPageContainer()

// стр главная
router.on('/', async () => {
    pageContainer.innerHTML = ''
    const pageModuleMain = await import("/src/js/pages/main.js") // динамический импорт // да файл называется main, но он относится к главной странице(первой)
    const mainPage = pageModuleMain.getMainPage()
    pageContainer.append(mainPage)
    header.setActiveLink('mainPage') // вызываем функцию из header.js
})

// стр католога
router.on('/catalog', async () => {
    pageContainer.innerHTML = ''
    const pageModuleCatalog = await import("/src/js/pages/catalog.js") // динамический импорт, здесь получаем объект
    const catalogPage = pageModuleCatalog.getCatalogPage()
    // pageModuleCatalog.getCatalogPage() - т.к. из импорта приходит объект, а .getCatalogPage() - это ключ
    pageContainer.append(catalogPage)
    header.setActiveLink('catalog') // вызываем функцию из header.js
})

// стр продукта
router.on('/product/:title', async ({data}) => { //:title -но вообще пишется id, {data} - есть в документации Navigo
    pageContainer.innerHTML = ''
    const pageModuleProduct = await import("/src/js/pages/product.js") // динамический импорт
    const productPage = pageModuleProduct.getProductPage(data.title);
    pageContainer.append(productPage)
    header.setActiveLink()
})

// стр корзины
router.on('/basket', async () => {
    pageContainer.innerHTML = ''
    const pageModuleBasket = await import("/src/js/pages/basket.js") // динамический импорт
    const basketPage = pageModuleBasket.getBasketPage()
    pageContainer.append(basketPage)
    header.setActiveLink('basket') // вызываем функцию из header.js
})

// стр оформление
router.on('/order', async () => {
    if(true) {
        // в будущем буду проверять колво товаров внутри корзины, если > 0, то страница доступна
        router.navigate('/')
        return
    }

    pageContainer.innerHTML = ''
    const pageModuleOrder = await import("/src/js/pages/order.js") // динамический импорт
    const orderPage = pageModuleOrder.getOrderPage()
    pageContainer.append(orderPage)
    header.setActiveLink()
})

//стр не найдена
router.notFound(async () => {
    pageContainer.innerHTML = ''
    const pageModuleNotFound = await import("/src/js/pages/notFound.js") // динамический импорт // да файл называется main, но он относится к главной странице(первой)
    const notFoundPage = pageModuleNotFound.getNotFoundPage()
    pageContainer.append(notFoundPage)
    header.setActiveLink()
})


router.resolve();

app.append(header.header, pageContainer) // header.header т.к. header = getHeader() возвращается объект
