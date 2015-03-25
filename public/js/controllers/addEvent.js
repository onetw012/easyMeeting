; (function(){
	angular.module('meetings')
	.controller('addEventCtrl', ['$scope', function($scope){
		$scope.event = {
			name: ""
		};
	}]);
})();