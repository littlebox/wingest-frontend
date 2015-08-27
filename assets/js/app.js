'use strict';
var wingestFront = angular.module("wingestFront", ["ngRoute"]).
  config(function($routeProvider){
    $routeProvider.
      when('/',{
        templateUrl: '/views/main.html',
      }).
      when('/contacto',{
        templateUrl: '/views/contacto.html',
      })
  });
