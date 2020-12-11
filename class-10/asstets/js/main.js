$("#submitBtn").click(function (event) {

    event.preventDefault();


    var uName = $('#uname').val();
    var pass = $("#password").val();


    if (uName.length == 0) {
        alert("User name is empty")
        $('#uname').css('border', '1px solid red');
    } else if (pass.length == 0) {
        alert("Password is empty")
    }
    else {
        if (uName == 'admin' && pass === 12345) {
            func()
        } else {
            alert("User Name and PassWord is Wrong")
        }
    }


    function func() {
        alert("Hello")
    }

});




var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})