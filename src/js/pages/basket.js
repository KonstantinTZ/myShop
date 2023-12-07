import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js"
import { getDescr } from "/src/js/components/desc/desc.js"
import { router } from "/src/js/main"

// стр корзины
export function getBasketPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'basket-page', 'container')
    const mainTitle = getMainTitle('Корзиниа')
    const desc = getDescr('Страница в разработке')

    // кнопка оформления заказа
    let linkBtn = document.createElement('a');
    linkBtn.href ='/order' // просто дублируем из роутера.навигате
    linkBtn.classList.add('btn')
    linkBtn.textContent = 'Оформление заказа'

    linkBtn.addEventListener('click', function (event) {
        event.preventDefault();
        router.navigate('/order')
    })

    page.append(mainTitle, desc, linkBtn)
    return page;
}