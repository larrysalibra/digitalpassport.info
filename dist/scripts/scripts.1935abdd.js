"use strict";angular.module("digitalpassportApp",["ngResource","ngRoute","ngRetina"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0).hashPrefix("!")}]),angular.module("digitalpassportApp").controller("MainCtrl",["$scope",function(a){a.pageName="index"}]);