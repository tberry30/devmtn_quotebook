angular.module('quoteBook')
	.controller('mainCtrl', function($scope, dataService){

	$scope.getQuotes = function() {
		$scope.quotes = dataService.getData();
	}


	$scope.getQuotes();


	$scope.addQuote = function(obj) {
		dataService.addData(obj);
		$scope.userAddedQuote = '';
		$scope.userAddedAuthor = '';
	}

	$scope.removeQuote = function(txt) {
		dataService.removeData(txt);
		$scope.quoteToRemove = '';
	}

});