function changeDarkMode(){
    const darkbutton = document.getElementById('dark-btn')
    const html = document.querySelector('html')

    darkbutton.addEventListener('click', ()=>{
        html.classList.toggle('dark-mode');
        darkbutton.classList.toggle('sun');

        const darkpref = localStorage.getItem('darkmode', true)

        if(!darkpref){
            localStorage.setItem('darkmode', true)
        }

        if(darkpref){
            localStorage.removeItem('darkmode')
        }

        if(darkbutton.classList.contains('sun')){
            darkbutton.innerHTML = '<i class="fa-solid fa-sun"></i>'
        } else{
            darkbutton.innerHTML = '<i class="fa-solid fa-moon"></i>'
        }
    })
}

changeDarkMode()