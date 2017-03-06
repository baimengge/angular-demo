(function (angular) {
	angular.module('starter')//载入创建的模块
		.controller('homeCtrl', [
			'$scope',
			'myFactory',
			'$state',
			'$rootScope',
			'$filter',
			function($scope,myFactory,$state,$rootScope,$filter){

			// 设立一个命名空间
			$scope.slideData=[
				{
					img:'./img/a.jpg'
				},
				{
					img:'./img/b.jpg'
				},
				{
					img:'./img/20170301152527.png'
				}
			]
			// 列表数据
			var listData=[];
			var getList=function () {
				// 调用服务里面的方法
				myFactory.getList().then(function(res) {
					if (res.status === 200 && res.data) {
						// 赋值
						$scope.listData=res.data;
						console.log($scope.listData);
					}
				},function (res) {
					// 接口请求失败或者延迟
				});
			}
			getList(); // 执行方法

			// $scope.name = $filter('uppercase')($scope.listData.name);

			$scope.goDetail　=　function (item) {
				// 方法二：$state.go("xxx", {obj});配置路由参数
				// $state.go('detail',item); // 跳转detail路由
				$state.go('detail');

				// 方法一： $rootScope顶级作用域传递数据
				$rootScope.detail = item;

				// 方法三：services里面建立一个服务（传递数据）
				// myFactory.storage.setVal('detail',item); // 保存数据
			}
		}])
})(angular);