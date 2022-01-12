/*	Аўтар: "БуслікДрэў" ( http://buslikdrev.by/ )
	© 2016-2021; BuslikDrev - Усе правы захаваныя. 
	busCarousel v0.3.1 */

if (Element.prototype.busCarousel === undefined) {
	// настройки
	if (typeof busCarousel !== 'object') {
		var busCarousel = {};
	}

	var bus_pref = 'transform',
	bus_animation = false,
	bus_transformation = false,
	bus_e = document.createElement('div');

	if (typeof bus_e.style.animationName !== 'undefined') {
		bus_animation = true;
	}

	if (typeof bus_e.style.transform !== 'undefined') {
		bus_transformation = true;
	}

	if (bus_animation == false) {
		var domPrefixes = 'Webkit Moz O ms Khtml Sand'.split(' ');

		for (var i = 0; i < domPrefixes.length; i++) {
			if (bus_e.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
				//pref = domPrefixes[i].toLowerCase();
				bus_animation = true;
			}
			if (bus_e.style[domPrefixes[i] + 'Transform'] !== undefined) {
				pref = domPrefixes[i] + 'Transform';
				bus_transformation = true;
			}
		}
	}

	// основной скрипт
	Element.prototype.busCarousel = function(options) {
		var bus_options_default = {
			elem: this,
			items: 6,
			singleItem: false,
			//slideSpeed: 200,
			//paginationSpeed: 800,
			//rewindSpeed: 1000,
			autoPlay: false,
			navigation: false,
			navigationText: ['prev', 'next'],
			pagination: true,
			baseClass: 'bus-carousel',
			lazyLoad: false,
			transitionStyle: false, //"fade", "backSlide", "goDown", "fadeUp"
		};

		if (typeof options === 'undefined') {
			options = bus_options_default;
		} else {
			for (var i in options) {
				if (typeof bus_options_default[i] !== 'undefined') {
					if (options[i] === String(parseFloat(options[i]))) {
						options[i] = parseFloat(options[i]);
					} else if (options[i] == 'true') {
						options[i] = true;
					} else if (options[i] == 'false') {
						options[i] = false;
					}

					if (i == 'navigationText') {
						if (typeof options[i] === 'string') {
							//console.log(options[i]);
							try {
								options[i] = JSON.parse(options[i].replace(/\'/g, '"'));
							} catch (e) {
								console.log(e);
							}
						}

						if (typeof options[i] === 'object') {
							if (!options[i][0]) {
								options[i][0] = bus_options_default[i][0];
							}
							if (!options[i][1]) {
								options[i][1] = bus_options_default[i][1];
							}
						} else {
							options[i] = bus_options_default[i];
						}
					}

					bus_options_default[i] = options[i];
				}
			}

			options = bus_options_default;
		}

		if (options['elem']) {
			//options['elem'].style['display'] = 'none';
			//options['elem'].setAttribute('style','display:none');
			if (bus_transformation == true || bus_animation == true) {
				var images = options['elem'].getElementsByTagName('img');

				if (images.length) {
					/* if (bus_transformation == true) {
						options['elem'].style['display'] = 'block';
						if (options['items'] && options['singleItem'] == false) {
							var image_width = (images[0].offsetWidth/images.length);
							for (var i = 0; i < images.length; i++) {
								images[i].parentNode.style['width'] = image_width.toFixed(2) + 'px';
							}
						}
						if (options['autoPlay']) {
							for (var i = 0; i < images.length; i++) {
								images[i].parentNode.style['animation-duration'] = parseFloat(options['autoPlay']) + 'ms';
							}
						}
						if (images.length > 1 && options['navigation'] == true) {
							var parent = document.createElement("div");
							parent.className = 'bus-carousel-page';
							parent.innerHTML = '<span class="bus-carousel-page-prev">' + options['navigationText'][0] + '</span><span class="bus-carousel-page-next">' + options['navigationText'][1] + '</span>';
							options['elem'].appendChild(parent);
						}
						if (images.length > 1 && options['pagination'] == true) {
							var parent = document.createElement("div");
							parent.className = 'bus-carousel-pagination';
							parent.innerHTML = '';
							//console.log(images.length);
							for (var i = 0; i < images.length; i++) {
								parent.innerHTML += '<span class="bus-carousel-pagination-button' + (i == 0 ? ' active' : '') + '"></span>';
							}
							options['elem'].parentNode.insertBefore(parent, options['elem'].nextSibling);
						}
					} */

					if (bus_animation == true) {
						options['elem'].style['display'] = 'block';
						if (options['items'] && options['singleItem'] == false) {
							var image_width = (images[0].offsetWidth/images.length);
							for (var i = 0; i < images.length; i++) {
								images[i].parentNode.style['width'] = image_width.toFixed(2) + 'px';
							}
						}
						if (options['autoPlay']) {
							for (var i = 0; i < images.length; i++) {
								images[i].parentNode.style['animation-duration'] = parseFloat(options['autoPlay']) + 'ms';
							}
						}
						if (images.length > 1 && options['navigation'] == true) {
							var parent = document.createElement("div");
							parent.className = 'bus-carousel-page';
							parent.innerHTML = '<span class="bus-carousel-page-prev">' + options['navigationText'][0] + '</span><span class="bus-carousel-page-next">' + options['navigationText'][1] + '</span>';
							options['elem'].appendChild(parent);
						}
						if (images.length > 1 && options['pagination'] == true) {
							var parent = document.createElement("div");
							parent.className = 'bus-carousel-pagination';
							parent.innerHTML = '';
							//console.log(images.length);
							for (var i = 0; i < images.length; i++) {
								parent.innerHTML += '<span class="bus-carousel-pagination-button' + (i == 0 ? ' active' : '') + '"></span>';
							}
							options['elem'].parentNode.insertBefore(parent, options['elem'].nextSibling);
						}
					}
				} else {
					options['elem'].style['display'] = 'none';
				}
			}

			if (bus_animation == true && bus_transformation == true) {

			} else if (bus_animation == false && bus_transformation == true) {
				/* setInterval(function() {
				
				}, 1000); */
			} else if (bus_animation == false && bus_transformation == false) {
				options['elem'].style['display'] = 'none';
			}
		}

		//console.log(this);
		//console.log(options['elem']);
	}

	// поиск настроек и запуск основного скрипта
	window.addEventListener('load', function () {
		//busCarouselSetting = document.querySelectorAll('.bus-carousel');
		busCarouselSetting = document.getElementsByClassName('bus-carousel');
		if (busCarouselSetting && typeof busCarouselSetting === 'object') {
			//for (var i in busCarouselSetting) {
			for (var i = 0; i < busCarouselSetting.length; i++) {
				var setting = JSON.parse(JSON.stringify(busCarouselSetting[i].dataset));
				
				if (setting['setting'] != null) {
					setting = setting['setting'];
					//setting['elem'] = busCarouselSetting[i];
					//console.log(setting);
					busCarouselSetting[i].busCarousel(setting);
				} else if (setting != null && Object.keys(setting).length/* && JSON.stringify(setting) != '{}'*/) {
					//setting['elem'] = busCarouselSetting[i];
					//console.log(setting);
					busCarouselSetting[i].busCarousel(setting);
				}
			}
		}

		if (typeof busCarousel === 'object') {
			for (var i in busCarousel) {
				if (busCarousel[i]['elem'] != null) {
					/* if (typeof busCarousel[i]['elem'].length === 'number') {
						busCarousel[i]['elem'] = busCarousel[i]['elem'][0];
					} */
					//console.log(busCarousel[i]);
					busCarousel[i]['elem'].busCarousel(busCarousel[i]);
				}
			}
		}
		//console.log(busCarousel);
		//console.log(document.querySelectorAll('.bus-carousel'));
	});
}
