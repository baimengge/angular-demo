(function (angular) {
	angular.module('starter')//载入创建的模块
		.controller('homeCtrl', ['$scope', 'myFactory',function($scope,myFactory){
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
		}])
})(angular);