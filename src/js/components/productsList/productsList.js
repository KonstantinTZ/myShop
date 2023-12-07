import './productsList.css'
import { getProductCard } from "/src/js/components/productCard/productCard.js"



//компонент список товаров
export function getProductsList () {
    const productLists = document.createElement('div')
    productLists.classList.add('product-list');
    const preloader = document.createElement('div')
    preloader.classList.add('lds-dual-ring')
    // productLists.append(preloader)

   async function getProducts (URI) {

    try {
        const response =  await fetch(URI)
        
        if (response.ok) preloader.classList.add('preloader-hidden')
        if (response.status === 404) {
            throw new Error ('Тоавры не найдены')
        }
        const data = await response.json()
     console.log(data)
        const list = document.createElement('ul')
        list.classList.add('product-list__list')
        for (const productObj of data) {
         const productCard = getProductCard(productObj )
         list.append(productCard)
        }
 
        productLists.append(list)
    } catch (error){

        const msg = document.createElement('span')
        msg.classList.add('products-list__msg')
        msg.textContent = error.message
        productLists.append(msg)


        console.log(error)
    }
        


    }


    return {
        productLists,
        getProducts
    }
}