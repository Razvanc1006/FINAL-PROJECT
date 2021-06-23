const carouselImages = document.querySelector('.images');
const carouselButtons = document.querySelectorAll('.carousel-button');
const imagesNumber = document.querySelectorAll('.images img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', e => {
        if(e.target.id === 'prev') {
            if(imageIndex !== 1) {
            imageIndex --;
            translateX += 500;
            }
        }
        else {
            if(imageIndex !== imagesNumber) {
                imageIndex ++;
                translateX -= 500;
            }
        }
        

        carouselImages.style.transform = `translateX(${translateX}px)`;
        
    });
});