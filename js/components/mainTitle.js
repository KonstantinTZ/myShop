// create main title
export function getMainTitle(text) {
    const title = document.createElement('h1')
    title.textContent = text
    title.classList.add('main-title')


    return title;

}