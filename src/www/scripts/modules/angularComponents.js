define(['angular','angularBlue','angularClick'],function(angular,angularBlue,angularClick) {
    angular.module('moduleApp', []);
    angular.module('moduleApp').directive('makeBlue', angularBlue.directive);
    angular.module('moduleApp').directive('exaclickButton', angularClick.directive);
})