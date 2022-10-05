const formatoMoeda = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

function render(arr){
    const listAlbum = document.getElementById('list');
    console.log(listAlbum)
    arr.forEach((album)=>{
        const card = createCard(album);
        listAlbum.appendChild(card);      
    });
}


function createCard(obj){
const cardLi     = document.createElement('li');
const imgCard    = document.createElement('img');
const cardDesc   = document.createElement('div');
const cardBAnd   = document.createElement('div');
const bandName   = document.createElement('p');
const albumDate  = document.createElement('p');
const albumName  = document.createElement('p');
const albumfoot  = document.createElement('div');
const albumprice = document.createElement('p');
const buttonCard = document.createElement('button');

cardLi.classList     = 'card-album';
imgCard.classList    = "img-albums";
cardDesc.classList   = 'album-desc';
cardBAnd.classList   = 'album-band';
bandName.classList   = 'band-name';
albumDate.classList  = 'band-name';
albumName.classList  = 'album-dest';
albumfoot.classList  = 'album-footer';
albumprice.classList = 'album-dest';
buttonCard.classList = 'btn-album';

imgCard.src = obj.img;
imgCard.alt = obj.title;

bandName.innerText  = obj.band;
bandName.appendChild
albumDate.innerText = obj.year;

albumName.innerText = obj.title;

albumprice.innerText = obj.price.toLocaleString('pt-BR', formatoMoeda);

buttonCard.innerText = "Comprar";

albumfoot.append(albumprice, buttonCard);

cardBAnd.append(bandName, albumDate);

cardDesc.append(cardBAnd, albumName, albumfoot)

cardLi.append(imgCard, cardDesc)

return cardLi
}

render(products)

function renderCategories(arr){
    const listCat = document.getElementById('genList')

    arr.forEach((cat)=>{
        const name = createCat(cat)
        listCat.appendChild(name)
    })
}

function createCat(item){
    const li = document.createElement('li')
    const name = document.createElement('p')
    
    li.classList = 'categories'
    name.classList = 'cat-name'

    name.innerText = item

    li.appendChild(name)

    return li;
}

renderCategories(categories)