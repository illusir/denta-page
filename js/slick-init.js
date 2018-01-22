$(".slider-firstscreen").slick({
	dots: true,
    appendArrows: $('.slider-arrow'),
    prevArrow: $('.slider-arrow--left'),
    nextArrow: $('.slider-arrow--right'),
	appendDots: $('.slider-dots--1stscreen'),
});

$(".slider-about").slick({
	dots: true,
    appendArrows: $('.about-arrow'),
    prevArrow: $('.about-arrow--left'),
    nextArrow: $('.about-arrow--right'),
	appendDots: $('.slider-dots--about'),
});

$(".slider-feedback").slick({
	dots: false,
    appendArrows: $('.feedback-arrow'),
    prevArrow: $('.feedback-arrow--left'),
    nextArrow: $('.feedback-arrow--right'),
});
