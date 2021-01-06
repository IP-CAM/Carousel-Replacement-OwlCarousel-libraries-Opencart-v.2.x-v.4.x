/*	Аўтар: "БуслікДрэў" ( http://buslikdrev.by/ )
	© 2016-2021; BuslikDrev - Усе правы захаваныя. 
	busCarousel v0.2.2 */

if (Element.prototype.busCarousel === undefined) {
	var bus_options_default = {
		elem: false,
		items: 6,
		singleItem: false,
		//slideSpeed: 200,
		//paginationSpeed: 800,
		//rewindSpeed: 1000,
		autoPlay: false,
		navigation: false,
		navigationText: ["prev", "next"],
		pagination: true,
		baseClass: "bus-carousel",
		lazyLoad: false,
		transitionStyle: false, //"fade", "backSlide", "goDown", "fadeUp"
	};

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

	Element.prototype.busCarousel = function(options) {
		if (typeof options === 'undefined') {
			options = bus_options_default;
		} else {
			for (var i in options) {
				if (typeof bus_options_default[i] !== 'undefined') {
					if (i == 'navigationText') {
						options[i][0]
					}
					bus_options_default[i] = options[i];
				}
			}

			options = bus_options_default;
		}

		
		if (options['elem']) {
			options['elem'].style['display'] = 'none';
			//options['elem'].setAttribute('style','display:none');
			console.log(options['elem']);
		}

		if (bus_animation == false && bus_transformation == true) {
			setInterval(function() {
				
			}, 1000);
		} else if (bus_animation == false && bus_transformation == false) {
			if (options['elem']) {
				options['elem'].style['display'] = 'none';
			}
		}

		//console.log(this);
		//console.log(options);
	}

	window.addEventListener("load", function () {
		//busCarouselSetting = document.querySelectorAll('.bus-carousel');
		busCarouselSetting = document.getElementsByClassName('bus-carousel');
		if (busCarouselSetting && typeof busCarouselSetting === 'object') {
			//for (var i in busCarouselSetting) {
			for (var i = 0; i < busCarouselSetting.length; i++) {
				var setting = JSON.parse(JSON.stringify(busCarouselSetting[i].dataset));
				
				if (setting['setting'] != null) {
					setting = setting['setting'];
					setting['elem'] = busCarouselSetting[i];
					//console.log(setting);
					busCarouselSetting[i].busCarousel(setting);
				} else if (setting != null && Object.keys(setting).length/* && JSON.stringify(setting) != '{}'*/) {
					setting['elem'] = busCarouselSetting[i];
					//console.log(setting);
					busCarouselSetting[i].busCarousel(setting);
				}
			}
		}

		if (typeof busCarousel === 'object') {
			for (var i in busCarousel) {
				if (busCarousel[i]['elem'] != null) {
					if (typeof busCarousel[i]['elem'].length === 'number') {
						busCarousel[i]['elem'] = busCarousel[i]['elem'][0];
					}
					//console.log(busCarousel[i]);
					busCarousel[i]['elem'].busCarousel(busCarousel[i]);
				}
			}
		}
		//console.log(busCarousel);
		//console.log(document.querySelectorAll('.bus-carousel'));
	});

	var busCarousel = {};
}
