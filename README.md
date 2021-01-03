# busCarousel - замена библиотеки owl-carousel и swiper в OpenCart 2.X-4.X для возможности ускорения сайта за счёт отсрочки загрузки скрипта через отсечку времени или async загрузки без использования jQuery.

# Установка
Подключите стили и скрипт установив в ```<head></head>```:
```
<link href="busCarousel.css" type="text/css" rel="preload stylesheet" />
<script src="busCarousel.js" type="text/javascript"></script>
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
Вариант 2 (при таком варианте можно отложить загрузку скрипта)
```
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

# Обозначения параметров настроек:
	'elem' - полученные свойства elementa структуры DOM, например, через document.getElementById(id), document.querySelector(css), document.getElementsByName(name)[0], $(css) - через jQuery;
	'items: 6 - количество видимых кадров при отключённой опции "singleItem",
	'singleItem: true - показ одного кадра, опция "items" игнорируется,
	'autoPlay: 3000 - время показа кадра в миллисекундах до перехода к следующему кадру,
	'navigation: true - включение\отключение кнопок навигации,
	'navigationText' - замена кнопока навигации на свои по такому шаблону: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
	'pagination' - включение\отключение кнопок пагинации;
