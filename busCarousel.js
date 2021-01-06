/*	Аўтар: "БуслікДрэў" ( http://buslikdrev.by/ )
	© 2016-2021; BuslikDrev - Усе правы захаваныя. 
	busCarousel v0.2.1 */

if (Element.prototype.busCarousel === undefined) {
	Element.prototype.busCarousel = function(options) {
		var bus_options_default = {
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
		};

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

		//console.log(this);
		//console.log(options);
	}

	window.addEventListener("load", function () {
		busCarouselSetting = document.querySelectorAll('.bus-carousel');
		if (busCarouselSetting && typeof busCarouselSetting === 'object') {
			//for (var i in busCarouselSetting) {
			for (var i = 0; i < busCarouselSetting.length; i++) {
				if (busCarouselSetting[i].dataset.setting != null) {
					busCarouselSetting[i].busCarousel(JSON.parse(busCarouselSetting[i].dataset.setting));
				} else if (busCarouselSetting[i].dataset) {
					busCarouselSetting[i].busCarousel(busCarouselSetting[i].dataset);
				}
			}
		}

		if (typeof busCarousel === 'object') {
			for (var i in busCarousel) {
				if (busCarousel[i]['elem'] != null) {
					if (typeof busCarousel[i]['elem'].length === 'number') {
						busCarousel[i]['elem'] = busCarousel[i]['elem'][0];
					}
					console.log(busCarousel[i]['elem']);
					busCarousel[i]['elem'].busCarousel(busCarousel[i]);
				}
			}
		}
		//console.log(busCarousel);
		//console.log(document.querySelectorAll('.bus-carousel'));
	});

	var busCarousel = {};
}
