(function (angular) {
	angular.module('starter')//载入创建的模块
		.controller('homeCtrl', ['$scope', function($scope){
			console.log('hello world');
		}])
})(angular);