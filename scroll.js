$(document).ready(function() {
    // Add scrollspy to <body>
    $('body').scrollspy({
        target: "#sidenav-wrapper"
    });
    $('#sidenav').on('activate.bs.scrollspy', function () {
        console.log(1);
        console.log(this);
    //     //store hash
    //     var hash = this.hash;
     //
    //     // animate
    //     $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //     }, 300, function(){
     //
    //     // when done, add hash to url
    //     // (default click behaviour)
    //     window.location.hash = hash;
    //  });
    })
});
