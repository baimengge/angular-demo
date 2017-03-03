(function (angular) {
	angular.module('starter')//载入创建的模块
		.controller('homeCtrl', ['$scope', function($scope){
			console.log('hello world');
			// 设立一个命名空间
			$scope.slideData=[
				{
					img:'./img/a.jpg'
				},
				{
					img:'./img/b.jpg'
				},
				{
					img:'./img/timg.jpeg'
				}
			]
		}])
})(angular);