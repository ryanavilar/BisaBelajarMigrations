(function(){
	var app = angular.module('store', []);

	app.controller('StoreController',function(){
		this.product = item;
	});

	app.directive('libraryused',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/library.html'
		};	
	});

	app.directive('navbartop',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/navbar.html'
		};	
	});

	app.directive('headertop',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/header.html'
		};	
	});

	app.directive('about',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/about.html'
		};	
	});

	app.directive('services',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/services.html'
		};	
	});

	app.directive('portofolio',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/portofolio.html'
		};	
	});

	app.directive('plus',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/plus.html'
		};	
	});

	app.directive('contact',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/contact.html'
		};	
	});

	app.directive('jsadd',function(){
		return{
			restrict: 'E',
			templateUrl: 'Template/addjs.html'
		};	
	});

})();

var item = {
	name : 'Lola',
	price : 500,
	description : 'Endangered Species',
	img : "",
	canPurchase: false
}