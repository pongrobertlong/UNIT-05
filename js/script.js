lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    fitImagesInViewport: true,
    showImageNumberLabel: false,   
})


// This code below returns the user search value

$(document).ready(function(){
    $("#searchBar").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#photoGallery a").filter(function() {
        $(this).toggle($(this).attr('data-title').toLowerCase().indexOf(value) > -1)
      });
    });
  });