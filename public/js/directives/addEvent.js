;(function(){
	angular.module('meetings')
	.directive('addEvent', function () {
		return {
			restrict: 'E',
			templateUrl: './js/templates/addEvent.html',
			link: function (scope, element, attrs) {

			}
		};
	});
})();