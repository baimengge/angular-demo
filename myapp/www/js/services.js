(function (app) {
	app
		.factory('myFactory', ['$http','$q', function($http,$q){
			var factory={};
			factory.getList=function () {
				return $http.get('./data/data.json')
					// .success(function (response) {
					// 	console.log(response);
					// });
			}

			return factory;
		}])
})(app);