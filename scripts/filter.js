function filterbyNameAndPrice(){
    const catFilters = document.querySelectorAll('.categories')
    const listAlbum  = document.getElementById('list')
    const container  = document.getElementById('genlist')
    
    catFilters.forEach(item=>{
        item.addEventListener('click',()=>{
            listAlbum.innerHTML = '';
            
            const categ = item.innerText
            item.classList.toggle('ative')

            if(categ==='Todos'){
                render(products)
            }

            const albunsFilters = filterAlbum(categ, priceFilter)

            render(albunsFilters)
        })
    });
}

function filterAlbum(cat, price){
    const albums = products.filter((product)=>{
        return product.category.includes(cat) && parseInt(product.price)<=price;
    })
    return albums
}
filterbyNameAndPrice()