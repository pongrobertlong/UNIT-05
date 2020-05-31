lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    fitImagesInViewport: true,
    showImageNumberLabel: false,   
})


// This code below returns the user search value

const searchBar = document.getElementById('searchBar');
const photoGallery = document.getElementById('photoGallery');
const photoImg = document.querySelectorAll('a');
const thumb = document.querySelectorAll('img');



searchBar.addEventListener('keyup', (event)=> {
    const searchValue = (event.target.value).toLowerCase();

    
    for (let i = 0; i < photoImg.length; i++ ) {
        const photoCap = [photoImg[i].getAttribute('data-title').toLowerCase()];
        
        if (photoCap === searchValue) {
            thumb[i].style.display = "";
        } else {
            thumb[i].style.display = "none";
        }
    }
    
});
    

