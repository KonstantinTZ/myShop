import './basketBtn.css'
import basketSVG from 'bundle-text:/src/assets/img/basket.svg' //bundle-text: - лайфхак с ПАРСЕЛЕМ, что бы вставлялся свг, а не просто путь
import { router } from "/src/js/main.js";

export function getBasketBtn() {
    const basketBtn = document.createElement('a')

    basketBtn.classList.add('basket-btn')
    basketBtn.href = '/basket'
    basketBtn.innerHTML = basketSVG

    basketBtn.addEventListener('click', function (event) {
        event.preventDefault()
        router.navigate('/basket')
    })
    return basketBtn
}