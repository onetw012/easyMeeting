;(function(){
	angular.module('meetings')
	.directive('addEvent', function () {
		return {
			restrict: 'E',
			templateUrl: './js/templates/addEvent.html',
			scope: {

			},
			require:'^?addEventCtrl',
			link: function (scope, element, attrs, controller) {
				console.log(controller);
			}
		};
	});
})();