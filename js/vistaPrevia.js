
let modal = document.querySelector('.botonCerrarGaleria');
let images = document.querySelectorAll('.galeriaImagenes img');
let modalImg = document.querySelector('#myModalImg');
let close = document.querySelector('.cerrarGaleria');

images.forEach((images) => {
     
    images.addEventListener('click', () => { 
        modal.style.display = "flex";
        modalImg.src = images.src;
        caption.innerHTML = images.alt;
        
    });

});


function imgLightbox (event) {
    modalImg.src = event.target.src;
}

close.addEventListener("click", () => {
    modal.style.display = "none";
});

