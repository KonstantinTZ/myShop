import './desc.css'

// create description
export function getDescr(text) {
    const desc = document.createElement('p')
    desc.textContent = text
    desc.classList.add('desc')


    return desc;

}