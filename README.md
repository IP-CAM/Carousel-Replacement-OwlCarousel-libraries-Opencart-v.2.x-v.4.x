# Carousel (v0.3.0) - replacement of the OwlCarousel and swiper 
libraries in OpenCart 2.X-4.X to speed up the site by delaying the 
loading of the script via defer or async without using jQuery.

# Installation
Connect styles and script by setting in ```<head></head>```:
```
<link href="busCarousel.css" type="text/css" rel="preload stylesheet" as="style" />
<script src="busCarousel.js" type="text/javascript" onload="var busCarousel = {};" async></script>
```
Bind the html code of images to the script:
Option 1 (with this option, you cannot postpone the loading of the script)

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
Option 2 (with this option, you can postpone the loading of the script)

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

Option 3 (with this option, you can postpone the loading of the script)
```
<div id="slideshow1" class="bus-carousel" data-items="6" data-single-item="true" data-auto-play="3000" data-navigation="true" data-navigation-text="['<i class=\'fa fa-chevron-left fa-5x\'></i>', '<i class=\'fa fa-chevron-right fa-5x\'></i>']" data-pagination="true">

</div>
```
Option 4 (with this option, you can postpone the loading of the script)

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

# Designation of setting parameters:
'elem' - retrieved DOM element properties, for example via document.getElementById (id) or getElementsByClassName (class), document.querySelector (css) or document.querySelectorAll (css), document.getElementsByTagName (tag) or document.getElementsByTagName (tag) or document.getElementsByTagName (tag) ], $ (css) or $ (css) [0] - via jQuery;
'items' - the number of visible frames when the "singleItem" option is disabled,
'singleItem' - show one frame, the "items" option is ignored,
'autoPlay' - frame display time in milliseconds before moving to the next frame,
'navigation' - enable / disable navigation buttons,
'navigationText' - replacing the navigation button with your own according to the following template: ['<i class = "fa fa-chevron-left fa-5x"> </i>', '<i class = "fa fa-chevron-right fa -5x "> </i> '],
'pagination' - enable / disable pagination buttons;

------------

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
