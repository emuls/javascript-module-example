define(['angular', 'angularBlue','angularClick'],function(angular, angularBlue,angularClick) {
    console.log('angular components loaded');
    angular.module('moduleApp', []);
    angular.module('moduleApp').directive('makeBlue', angularBlue.directive);
    angular.module('moduleApp').directive('exaclickButton', angularClick.directive);

    console.log('bootstrapping angular');
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['moduleApp']);
    });
})