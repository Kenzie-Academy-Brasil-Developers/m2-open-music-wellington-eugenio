const rangePrice = document.getElementById('max-price')

let priceFilter = 250

function rangeAndPrice(){
    const range     = document.getElementById('max-price');
    const showPrice = document.getElementById('priceNumber')
    const listCont  = document.getElementById('list')

    range.addEventListener('input', (event)=>{
        showPrice.innerText = range.value
        priceFilter =  range.value
        listCont.innerHTML = ''
        const maxPrice = filterByPrice(range.value)

        
        render(maxPrice)
    })
    
}

 function filterByPrice(val){
    const albumMaxPrice = products.filter(album=>album.price<val)
    return albumMaxPrice;
}
rangeAndPrice()


