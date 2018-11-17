/*!
 *
 * Angle - Bootstrap Admin App + AngularJS
 *
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 *
 */

if (typeof $ === 'undefined') {
    throw new Error('This application\'s JavaScript requires jQuery');
}


// APP START
// -----------------------------------

var App = angular.module('mainApp', ['ui.bootstrap','ui.router','ui.bootstrap','ngCookies','ngStorage']);


/**=========================================================
 * Module: main.js
 * Main Application Controller
 =========================================================*/




App.controller('AppController',
    ['$rootScope', '$scope', "$cookieStore","$route",
        function ($rootScope, $scope, $cookieStore, $route) {
            "use strict";



        }]);


App.controller('UserController', function ($scope, $http, $cookies, $cookieStore,$rootScope,$timeout, $state) {
//console.log(MY_CONSTANT.url);
});





