lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    fitImagesInViewport: true,
    showImageNumberLabel: false,   
})


// This code below returns the user search value

function imageSearch () {
    //Variables
    let getValue = document.getElementById('searchBar').value;
    getValue = getValue.toUpperCase();
    
    console.log(getValue);


}