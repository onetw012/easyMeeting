; (function () {
	"use strict";

	angular.module('meetings')
	.factory('Marker', function () {

		var Marker = function (lat, lng, id) {
			this.coords = {
				latitude: lat,
				longitude: lng
			},
			this._id = id;
			this.description = "I'm a userMarker";
			this.info = {
				windowOptions: {
					visible: false
				},
				title: this.description
			};
		}

		Marker.prototype.show = function (map, event, args) {					
					console.log(map);
					console.log(event);
					console.log(args.info.windowOptions.visible);

					args.info.windowOptions.visible = !args.info.windowOptions.visible;
				};

		Marker.prototype.hide = function () {
			args.info.windowOptions.visible = !this.info.windowOptions.visible;
		}


		return Marker;
	});
})();