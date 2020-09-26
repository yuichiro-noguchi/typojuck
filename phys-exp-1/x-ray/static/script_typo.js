if (window.matchMedia('(screen)').matches) {
	$(function () {
		var tl = gsap.timeline({});
		var $formula = $('.formula');

		$formula.each(function (index) {
			tl.fromTo($(this), {
				opacity: 0,
				y: '+=100',
			}, {
				opacity: 1,
				y: '0',
				scrollTrigger: {
					trigger: $(this),
					start: 'top center',
					end: 'bottom center',
					scrub: true,
					markers: true,
					onEnter: self => {
						$(this).textillate({
							inEffects: ['fadeInUp'],
							in: {
								effect: 'fadeInUp',
								delayScale: 0.5,
							}
						})
					}
				}
			})
		})
	})
}
