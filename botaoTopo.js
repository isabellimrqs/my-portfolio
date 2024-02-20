const scrollToTop = () => {
    window.scrollTo({
   top: 0,
   behavior: 'smooth'
    })
   }

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.botao-voltar-topo')
        scroll.classList.toggle('active', window.scrollY > 450)

})