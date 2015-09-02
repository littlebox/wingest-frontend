'use strict';
var wingestFront = angular.module("wingestFront", ["ngRoute"]).
  config(function($routeProvider, $locationProvider){
    $routeProvider.
      when('/',{
        templateUrl: '/views/main.html'
      }).
      when('/contacto',{
        templateUrl: '/views/contacto.html'
      })

     $locationProvider.html5Mode(true);
  });
