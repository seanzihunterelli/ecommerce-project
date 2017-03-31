angular.module('spotApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        templateUrl: '../views/splash.html',
        controller: 'searchCtrl',
        url: '/'
      })
      .state('searchResults', {
        templateUrl: '../views/searchResults.html',
        // controller: 'resultsCtrl',
        url: '/search'
      });

    $urlRouterProvider
      .otherwise('/');
  });
