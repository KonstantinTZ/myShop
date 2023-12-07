import { getMainTitle } from "/src/js/components/mainTitle/mainTitle.js"
import { router } from "/src/js/main"

// стр католога
export function getNotFoundPage() {
    const page = document.createElement('div')
    page.classList.add('page', 'notfound-page', 'container')
    const mainTitle = getMainTitle('Страница не найдена')

    // кнопка на главную
    let linkBtn = document.createElement('a');
    linkBtn.href ='/' // просто дублируем из роутера.навигате
    linkBtn.classList.add('btn')
    linkBtn.textContent = 'На главную'

    linkBtn.addEventListener('click', function (event) {
        event.preventDefault();
        router.navigate('/')
    })
  

    page.append(mainTitle, linkBtn)
    return page;
}