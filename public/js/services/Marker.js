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
		}
		return Marker;
	});
})();