; (function () {
	"use strict";

	angular.module('meetings')
	.service('Map', ['$http', '$rootScope', '$timeout', 'Marker', 
	function ($http, $rootScope, $timeout, Marker ) {

		var vm = this;
		this.map = {
			center: { latitude: 49.59001626182558, longitude: 34.55750048160553 }, 
			zoom: 11,
			options: {
				disableDefaultUI: true,
				scrollwheel: true,
				draggable: true,
				maxZoom: 18,
				minZoom: 0
			},
			events: {
				click: onclick
				/*,zoom_changed: function (e) {
					console.log(e.getZoom());
				}*/}
		};

		this.markers = [];

		var userMarker = new Marker (0, 0, "1");




		this.closeClick = function() {
		    this.windowOptions.visible = false;
		};



		this.update = function () {
			$timeout(function() {$rootScope.$broadcast('update', vm.markers[0]);});
		};

		$http({method: 'GET', url: '/entrance/api/events'})
		.success(function(data, status, headers, config) {
			vm.markers.push(userMarker);
			vm.markers = vm.markers.concat(data);
			vm.update();
		})
		.error(function(data, status, headers, config) {
			console.log('ERROR!: Can\'t load events!');
		});;

		function onclick (map, e, params) {
			var coords = {
				lat: params[0].latLng.lat(), 
				lng: params[0].latLng.lng()
			};
			vm.markers[0] = new Marker(coords.lat, coords.lng, "1");			
			vm.update();
		}


		return this;
	}]);
})();