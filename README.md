# busCarousel (v0.3.0) - замена библиотеки OwlCarousel и swiper в OpenCart 2.X-4.X для возможности ускорения сайта за счёт отсрочки загрузки скрипта через defer или async без использования jQuery.

# Установка
Подключите стили и скрипт, установив в ```<head></head>```:
```
<link href="bus_carousel.css" type="text/css" rel="preload stylesheet" as="style" />
<script src="bus_carousel.js" type="text/javascript" onload="var busCarousel = {};" async></script>
```

Привяжите html-код изображений к скрипту:
Вариант 1 (при таком варианте нельзя отложить загрузку скрипта)
```
if (typeof busCarousel !== 'undefined') {
document.getElementById('slideshow1').busCarousel({
	items: 6,
	singleItem: true,
	autoPlay: 3000,
	navigation: true,
	navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
	pagination: true,
});
}
```
Можно отложить загрузку скрипта, если поместить настройки слайда в событие:
```
window.addEventListener('busCarousel', function() {
	document.getElementById('slideshow1').busCarousel({
		items: 6,
		singleItem: true,
		autoPlay: 3000,
		navigation: true,
		navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
		pagination: true,
	});
});
```

Вариант 2 (при таком варианте можно отложить загрузку скрипта)
```
if (typeof busCarousel !== 'object') {
	var busCarousel = {};
}
busCarousel['slideshow1'] = {
	elem: document.getElementById('slideshow1'),
	items: 6,
	singleItem: true,
	autoPlay: 3000,
	navigation: true,
	navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
	pagination: true,
};
```

Вариант 3 (при таком варианте можно отложить загрузку скрипта)
```
<div id="slideshow1" class="bus-carousel" data-items="6" data-single-item="true" data-auto-play="3000" data-navigation="true" data-navigation-text="['<i class=\'fa fa-chevron-left fa-5x\'></i>', '<i class=\'fa fa-chevron-right fa-5x\'></i>']" data-pagination="true">

</div>
```

Вариант 4 (при таком варианте можно отложить загрузку скрипта)
```
document.getElementById('slideshow1').setAttribute('data-setting', JSON.stringify({
	items: 6,
	singleItem: true,
	autoPlay: 3000,
	navigation: true,
	navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
	pagination: true,
}));
```

# Обозначения параметров настроек:
	'elem' - полученные свойства элемента структуры DOM, например, через document.getElementById(id) или getElementsByClassName(class), document.querySelector(css) или document.querySelectorAll(css), document.getElementsByTagName(tag) или document.getElementsByTagName(tag)[0], $(css) или $(css)[0] - через jQuery;
	'items' - количество видимых кадров при отключённой опции "singleItem",
	'singleItem' - показ одного кадра, опция "items" игнорируется,
	'autoPlay' - время показа кадра в миллисекундах до перехода к следующему кадру,
	'navigation' - включение\отключение кнопок навигации,
	'navigationText' - замена кнопока навигации на свои по такому шаблону: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
	'pagination' - включение\отключение кнопок пагинации;
