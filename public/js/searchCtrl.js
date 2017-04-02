angular.module('spotApp').controller('searchCtrl', function($scope, $stateParams, mainService) {
  $scope.products = [];
  mainService.getProducts()
        .then(function(res){
          $scope.products = res.data.results;
        });
});
