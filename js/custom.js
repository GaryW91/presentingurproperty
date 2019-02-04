/*============ NAVBAR TRANSPARENT TO SOLID ============*/
$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('.navbar').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
		}
	});
});
/*============ END OF NAVBAR TRANSPARENT TO SOLID ============*/

/*============ CLOSE MOBILE NAV ON CLICK ============*/
$(document).ready(function() {
	$(document).click(function (event) {
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show");
		if (_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});
/*============ END OF CLOSE MOBILE NAV ON CLICK ============*/

/*============ SMOOTH SCROLLING TO LINKS ============*/
$(document).ready(function () {
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate( {
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		} //End of if Statment
	});
});
/*============ END OF SMOOTH SCROLLING TO LINKS ============*/

/*============ BOUNCING DOWN ARROW ============*/
$(document).ready(function() {
	$(window).scroll(function() {
		$(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
	});
});

/*============ END OF BOUNCING DOWN ARROW ============*/

/*============ START OF MEET THE TEAM ============*/
$(document).ready(function() {
	$("#team-slider").owlCarousel({
		items:3,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true,
		responsive : {
			0 : {
				items: 1
			},
			576 : {
				items: 2
			},
			768 : {
				items: 3
			}
		}
	}
	);
});
/*============ END OF MEET THE TEAM ============*/

/*============ START OF SKILLS COUNTER ============*/
$(document).ready(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 1800
	});
});
/*============ END OF SKILLS COUNTER ============*/

/*============ CLIENT CAROUSEL ============*/
$(document).ready(function() {
	$("#clients-slider").owlCarousel({
		items:2,
		autoplay:true,
		smartSpeed:1700,
		loop:true,
		autoplayHoverPause:true,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			}
		}
	}
	);
});
/*============ END OF CLIENT CAROUSEL ============*/

/*============ END OF TOP SCROLL ============*/
$(document).ready(function() {
	$(window).scroll(function (){
		if ($(this).scrollTop() > 500) {
			$('.top-scroll').fadeIn();
		} else {
			$('.top-scroll').fadeOut();
		}
	});
});
/*============ END OF TOP SCROLL ============*/

/*============ RESET TO TOP OF PAGE AFTER REFRESH ============*/

$(document).ready(function() {
	$("html,body").animate({scrollTop: 0}, 0);
});

/*============ END OF RESET TO TOP OF PAGE AFTER REFRESH ============*/