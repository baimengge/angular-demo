(function (app) {
	app
		.factory('myFactory', ['$http','$q', function($http,$q){
			var factory={};

			// 设置一个空对象
			var storage = {};

			factory.getList=function () {
				return $http.get('./data/data.json')
					// .success(function (response) {
					// 	console.log(response);
					// });
			}
			// 编写factory上storage方法
			factory.storage = {
				// 设置值
				setVal : function (name,value) { //设置detail属性
					if ( vlaue && name) {
						storage[name] = value;
					}
				},
				// 获取值
				getVal : function (name) {
					if ( !storage[name] || !name) {
						return;
					}
					return storage[name];
				},
				// 删除值
				removeVal: function (name) {
					if ( name && storage[name]) {
						delete storage[name];
					}
				}
			}

			return factory;
		}])
})(app);