(function (app) {
	app
		.controller('detailCtrl', [
			'$scope',
			'$rootScope',
			'$stateParams',
			'myFactory',
			function($scope,$rootScope,$stateParams,myFactory){
				// console.log($stateParams);

			$scope.views = {
				detail: $rootScope.detail,

				// detail:{
				// 	lineLyric: $stateParams.lineLyric,
				// 	name: $stateParams.name,
				// 	time: $stateParams.time
				// },

				// 获取detail的属性值
				// detail: myFactory.storage.getVal('detail'),

				// name返回
				goBack: function () {
					window.history.back();
				},
				age: 20 // 年龄
			};

		}])
})(app);