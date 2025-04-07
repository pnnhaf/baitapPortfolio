var typed = new Typed('.element', {
               	strings: ["Graphic Designer.", "Computer Science","Freelance Photographer."],
       	 		typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();
AOS.init();