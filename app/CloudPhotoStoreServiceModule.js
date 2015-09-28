angular.module('CloudPhotoStoreServiceModule',[])

.factory('CloudPhotoStoreService',['$http',function($http){

	return {

     show : function(album,filename){

     	return $http.get("http://54.254.179.75:8889/show?album="+album+"&filename="+filename);

     }

	}

}]);
