;(function(){
	"use strict";
	angular.module('meetings')
	.directive('addEvent', function () {
		return {
			restrict: 'E',
			templateUrl: './js/templates/addEvent.html',
			/*scope: {

			},*/
			/*require:'^AddEventController',*/
			link: function (scope, element, attrs, controller) {

			}
		};
	});
})();