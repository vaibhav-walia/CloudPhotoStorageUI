angular.module('CloudPhotoStoreModule',['CloudPhotoStoreServiceModule'])

.controller('CloudPhotoStoreController',['CloudPhotoStoreService',function(CloudPhotoStoreService){

	this.res="";

	CloudPhotoStoreService.show('album1','download.png').then(function(result){

		console.log(result);

	});

}]);
