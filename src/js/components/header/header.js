import { router } from "/src/js/main.js";
import {getNavigationLink} from "/src/js/components/navigationLink/navigationLink.js";
import './header.css' // для того что бы стили хранились в этой же папке и применились тут же
import { getLogo } from "/src/js/components/logo/logo";
import { getBasketBtn } from "/src/js/components/basketBtn/basketBtn";



// создаем шапку
export function getHeader() {
    const header = document.createElement('header');
    header.classList.add('header')

    const container = document.createElement('div');
    container.classList.add('container', 'header__container')


    const nav = document.createElement('nav');
    nav.classList.add('header__navigation')

    const logo = getLogo();
    logo.classList.add('header__logo') // что бы стилизовать его именно в хедере(в общих css logo этого не указываем)

    const basketBtn = getBasketBtn();

    // все что ниже нужно для того что бы подсветить активную кнопку страницы в хедере
    const linksObj =  {
        'mainPage':getNavigationLink('/', 'Главная страница'),
        'catalog': getNavigationLink('/catalog', 'Каталог'),
        'basket': basketBtn // т.к. мы ее уже вставили
        // если захочу добавить еще страницу, то сюда вставить 'newPage':getNavigationLink('/newPage', 'новая страница')+ добавить ее в роутере на main.js
    }

    for (const oneLink in linksObj) {
        nav.append(linksObj[oneLink])
    }

    // циклом in мы аолучаем только ключ
    // linksObj[link] - а так получаем значение по названию ключа
    // и собственно отрисовываем на странице
 
    function setActiveLink (link='') {
        // значение link присваиваем в файле main.js в роутере
        
        for (const oneLink in linksObj) {
            linksObj[oneLink].classList.remove('active')
        }

        if (link !== '') {
            linksObj[link].classList.add('active')
        }
    }

     // все что выше нужно для того что бы подсветить активную страницу ^

    
    container.append(logo, nav, basketBtn)
    header.append(container)


    return {
        header,
        setActiveLink
    }
}