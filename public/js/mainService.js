angular.module('spotApp').service('mainService', function($http){
return {
  getProducts (){
    return $http.get('products');
  },
  getProduct (id){
    return $http.get(`products/${id}`);
  }
};
  // this.getProducts = function (){
  //   return $http.get('/products');
  // };
  // this.getProduct = function (id){
  //   return $http.get(`/products/${id}`);
  // };




});
