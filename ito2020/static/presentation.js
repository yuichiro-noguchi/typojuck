$(function () {
	objectFitImages();

	var tl = gsap.timeline({
		repeat: -1,
	});
	$(window).on('load', function () {
		var $slideImages = $('.slide img');

		$slideImages.each(function (index) {
			tl.from($(this),{
				x: '-=100',
				opacity: 0,
				duration: 3,
				ease: 'none',
			}).to($(this), {
				x: '+=100',
				opacity: 0,
				duration: 3,
				ease: 'none',
			});
		});
		tl.restart();
	});
})
