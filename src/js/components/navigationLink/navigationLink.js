import { router } from "/src/js/main.js";
import './navigationLink.css'

export function getNavigationLink(path, title = '') {
    let link = document.createElement('a');
    link.href = path
    link.classList.add('navigation-link')
    link.textContent = title

    link.addEventListener('click', function (event) {
        event.preventDefault();
        // navigation() // теперь нам не нужен , т.к. есть отдельный роутер для этого
        router.navigate(path)
    })

    return link
}