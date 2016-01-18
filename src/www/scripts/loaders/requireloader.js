requirejs.config({
    baseUrl: '/scripts/modules',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min'
    },
    shim: {
        "jquery": { exports: "$" },
        "angular" : {
            exports : "angular",
            deps: ["jquery"]
        }
    }
});

///Local JS Modules///
console.log('requiring basic modules');
require(['exalert','exhtml'], function (exa,htm) {
    console.log('ex modules loaded');
    window.exa = exa;
    window.htm = htm;
});

///Angular Modules///
console.log('requiring angular components');
require(['angularComponents'], function(){
    console.log('bootstrapping angular');
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['moduleApp']);
    });

    $('#jqtest').html('JQuery has been loaded because it is a dependency of angular components');
});