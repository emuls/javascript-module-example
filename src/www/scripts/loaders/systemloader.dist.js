System.baseURL = '/scripts';
System.defaultJSExtensions = true;
System.paths['jquery'] = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
System.paths['angular'] = '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js';

///Local JS Modules using JQuery///
console.log('loading modules');
System.import('modules').then(function(modules){
    console.log('modules loaded');
    window.exa = modules.exa;
    window.htm = htm;

    console.log('bootstrapping angular');
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['moduleApp']);
    });

    console.log('jquery test');
    $('#jqtest').html('JQuery has been loaded because it is a dependency of angular components');
});